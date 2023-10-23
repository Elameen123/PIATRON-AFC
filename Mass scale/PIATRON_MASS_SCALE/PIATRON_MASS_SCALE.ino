#include <HX711_ADC.h>
#include "HardwareSerial.h"
#include "defines.h" // contains defintions 

#if defined(ESP8266)|| defined(ESP32) || defined(AVR)
#include <EEPROM.h>
#endif




// zero offset value (tare), calculate and save to EEprom:
void refreshOffsetValueAndSaveToEEprom() {
  long _offset = 0;
  Serial.println("Calculating tare offset value...");
  LoadCell.tare();                                  // calculate the new tare / zero offset value (blocking)
  _offset = LoadCell.getTareOffset();               // get the new tare / zero offset value
  EEPROM.put(tareOffsetVal_eepromAdress, _offset);  // save the new tare / zero offset value to EEprom
#if defined(ESP8266) || defined(ESP32)
  EEPROM.commit();
#endif
  LoadCell.setTareOffset(_offset);  // set value as library parameter (next restart it will be read from EEprom)
  Serial.print("New tare offset value:");
  Serial.print(_offset);
  Serial.print(", saved to EEprom adr:");
  Serial.println(tareOffsetVal_eepromAdress);
}

void setup() {
  Serial.begin(38400); delay(10);
 mySerial.begin(38400); // 38400 is the baud rate of the bluetooth module
  debugln();
  debugln("Starting...");

  LoadCell.begin();
  //LoadCell.setReverseOutput();
  float calibrationValue;  // calibration value (see example file "Calibration.ino")
  //calibrationValue = 696.0; // uncomment this if you want to set the calibration value in the sketch

#if defined(ESP8266) || defined(ESP32)
  EEPROM.begin(512);
#endif

  EEPROM.get(calVal_eepromAdress, calibrationValue);

  //restore the zero offset value from eeprom:
  long tare_offset = 0;
  EEPROM.get(tareOffsetVal_eepromAdress, tare_offset);
  LoadCell.setTareOffset(tare_offset);
  boolean _tare = false;  //set this to false as the value has been resored from eeprom

  unsigned long stabilizingtime = 2000;  // preciscion right after power-up can be improved by adding a few seconds of stabilizing time
  LoadCell.start(stabilizingtime, _tare);
  if (LoadCell.getTareTimeoutFlag()) {
    debugln("Timeout, check MCU>HX711 wiring and pin designations");
    while (1)
      ;
  } else {
    LoadCell.setCalFactor(calibrationValue);  // set calibration value (float)
    debugln("Startup is complete");
  }
}

void loop() {
  static boolean newDataReady = 0;
  const int serialPrintInterval = 500;  //increase value to slow down serial print activity

  // check for new data/start next conversion:
  if (LoadCell.update()) newDataReady = true;


  if (newDataReady) {
    if (millis() > t + serialPrintInterval) {
      float i = LoadCell.getData();
      Serial.print("Load_cell output val: ");
      Serial.println(i);
      mySerial.println(i);
      mySerial.flush();
      Serial.flush();
      newDataReady = 0;
      t = millis();
    }
  }

  // receive command from serial terminal, send 't' to initiate tare operation:
  if (Serial.available() > 0) {
    char inByte = Serial.read();
    if (inByte == 't') refreshOffsetValueAndSaveToEEprom();
  }

  if (mySerial.available() > 0) {
    char inByte = mySerial.read();
    if (inByte == 't') refreshOffsetValueAndSaveToEEprom();
  }

}


