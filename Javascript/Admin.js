import { get, onValue, ref, set } from 'firebase/database';
import { db, storage } from '../Javascript/index.js';
import { ref as sRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

// Ensure the document is ready
$(document).ready(function () {
  const modal = $("#myModal");
  const btn = $("#add-menu-group");
  const menuname = $("#menuName");
  const form = $(".modal-content form");
  const nameError = $("#nameError");
  const  mealLocation = [];
  const  mealCategory = [];
  const mealName = [];
  // const menuList = ['Rice & Pasta Dishes', 'Side Dishes', 'Soups & Swallows', 'Proteins', 'Drinks'];
  const rice = $("input[name='rice']");
  const side = $("input[name='side']");
  const swallow = $("input[name='swallow']");
  const protein = $("input[name='protein']");
  const drinks = $("input[name='drinks']");

  $('#sidebar-container').on('click', '.sideMenu > ul > li', function () {
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
    $(this).find('ul').slideToggle();
    $(this).siblings().find('ul').slideUp();
    $(this).siblings().find('ul').find('li').removeClass('active');
  });

  $('#sidebar-container').on('click', '.sub-side-menu > li', function (e) {
    e.stopPropagation();
    $(this).toggleClass('active');
    $(this).find('.sub-sub-side-menu').slideToggle();
    $(this).siblings().find('.sub-sub-side-menu').slideUp();
    $(this).siblings().find('.sub-sub-side-menu li').removeClass('active');
  });

  btn.click(function (e) {
    e.stopPropagation();
    modal.css("display", "block");
  });

  modal.find(".close-menu-group").click(function (e) {
    e.stopPropagation();
    modal.css("display", "none");
  });

  // Prevent event propagation inside the modal content
  modal.find(".modal-content").click(function (e) {
    e.stopPropagation();
  });

   // Function to handle radio button click within a group
   function handleRadioGroupClick(event) {
    const clickedRadio = event.target;
    const groupName = clickedRadio.getAttribute("name");

    // Get the data attribute value (data-category or data-location)
    const dataAttribute = groupName === "location" ? "data-location" : "data-category";
    const selectedValue = clickedRadio.getAttribute(dataAttribute);


    // Get all radio buttons within the same group
    const radios = document.querySelectorAll(`input[name="${groupName}"]`);

    // Deselect other radio buttons in the same group
    radios.forEach((radio) => {
      if (radio !== clickedRadio) {
        radio.checked = false;
      }
    }); 
    
    if (groupName === 'location') {
      mealLocation.length = 0;
      mealLocation.push(selectedValue);
      console.log(mealLocation)
    }
    else {
      mealCategory.length = 0;
      mealCategory.push(selectedValue);
      console.log(mealCategory);
    }

    
  }

  // Add event listeners to radio buttons in "choose-location" and "choose-category"
  const locationRadios = document.querySelectorAll('#choose-location input[type="radio"]');
  locationRadios.forEach((radio) => {
    radio.addEventListener("click", handleRadioGroupClick);
  });

  const categoryRadios = document.querySelectorAll('#choose-category input[type="radio"]');
  categoryRadios.forEach((radio) => {
    radio.addEventListener("click", handleRadioGroupClick);
  });

  form.submit(async function (e) {
    const errors = [];

    const menuList = [];

    async function fetchData(data, menuType) {
      const snapshot = await get(ref(db, 'PAU_all_foods/' + data));
      const item = snapshot.val().food;
      const menuObject = { 
        [item] : {...snapshot.val(), menuType : menuType}
      }
      console.log(item);
      menuList.push(menuObject);
      return snapshot.val();
    }

    if (menuname.val().length < 4) {
      errors.push("Menu Group Name must be at least 4 characters");
    }

    if (menuname.val().length === 0 || menuname.val().trim() === "") {
      errors.push("Menu Group Name required");
    }

    if (errors.length > 0) {
      e.preventDefault();
      nameError.removeAttr("hidden");
      nameError.html(errors.join(', '));
    }

    mealName.push(menuname.val());


    // Rest of your form submission logic
    // const menuListData = [];
    const riceList = [];
    const sideList = [];
    const swallowList = [];
    const proteinList = [];
    const drinksList = [];

    rice.each(function () {
      if ($(this).prop("checked")) {
        const menuType = "Rice & Pasta Dishes";
        fetchData($(this).val(), menuType);
        riceList.push($(this).val());
      }
    });

    side.each(function () {
      if ($(this).prop("checked")) {
        const menuType = "Side Dishes";
        fetchData($(this).val(), menuType);
        sideList.push($(this).val());
      }
    });

    swallow.each(function () {
      if ($(this).prop("checked")) {
        const menuType = "Soups & Swallows";
        fetchData($(this).val(), menuType);
        swallowList.push($(this).val());
      }
    });

    protein.each(function () {
      if ($(this).prop("checked")) {
        const menuType = "Proteins";
        fetchData($(this).val(), menuType);
        proteinList.push($(this).val());
      }
    });

    drinks.each(function () {
      if ($(this).prop("checked")) {
        const menuType = "Drinks";
        fetchData($(this).val(), menuType);
        drinksList.push($(this).val());
      }
    });

    // console.log(test);
  console.log(menuList);
  console.log('Working');
  console.log(mealCategory);
  console.log(mealLocation);
  console.log(mealName);
  console.log('PAU/timetable/' + mealCategory[0] + '/' + mealLocation[0] + '/' + mealName[0] + '/');

  const data = [
    {
        "Jollof Rice": {
            "food": "Jollof Rice",
            "id": "1",
            "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FjollofRice.jpg?alt=media&token=846bbe69-8d87-4e74-8f9a-ce16dc4b792b",
            "mass_per_portion": "185g",
            "price": "300",
            "menuType": "Rice & Pasta Dishes"
        }
    },
    {
        "Jollof Spaghetti": {
            "food": "Jollof Spaghetti",
            "id": 3,
            "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FjollofSpaghetti.jpg?alt=media&token=d019f587-2a95-487e-ae17-c3e0b8d825c6",
            "mass_per_portion": "180g",
            "price": "300",
            "menuType": "Rice & Pasta Dishes"
        }
    }
];

for (const item of data) {
  const itemName = Object.keys(item)[0];
  const itemData = item[itemName];
  const dataToWrite = {
    [itemName]: itemData
  };

  console.log(dataToWrite);

  // Write data to the database
  try {
    const menuGroupRef = ref(
      db,
      'PAU/timetable/' +
        mealCategory[0] +
        '/' +
        mealLocation[0] +
        '/' +
        mealName[0] +
        '/'
    );

    await set(menuGroupRef, dataToWrite);
    console.log('Item uploaded to the database');
  } catch (error) {
    console.error('Error uploading to the database', error);
  }
}







// Assuming you have a Firebase Realtime Database reference
// Change this to your desired database reference path
// let i = 0;
// dataList.forEach((item) => {
//     const itemName = Object.keys(item)[0];
//     const itemData = item[itemName];
    

//     console.log('itemName: ', itemName);
//     console.log('itemData: ' , itemData);

//     const dataToWrite = {
//       [itemName]: itemData
//     };

//     // const newMenuGroup  = ref(db, 'PAU/timetable/' + mealCategory[0] + '/' + mealLocation[0] + '/' + mealName[0] + '/');

//     // set(newMenuGroup, dataToWrite).then(() => {
//     //   console.log('Item Uploaded to database');
//     // }).catch((error) => {
//     //   console.log('Error uploading to database', error);
//     // });

//     console.log('dataToWrite: ', dataToWrite);
//     // i++;
//     // i<2;
// });


  // $("input[type='text'], input[type='checkbox'], input[type='radio']").val('');
  //   modal.css("display", "none");  
  });

  // When the user clicks anywhere outside of the modal, close it
  $(window).click(function (event) {
    if (event.target === modal[0]) {
      modal.css("display", "none");
    }
  });
});


$('#sidebar-container').on('click', '.admin-order > li', function (e) {
  const location = $(this).data('location');
  const clickedMenuItem = $(this).text();

  console.log(clickedMenuItem);
  console.log(location);

  const dataToSend = {
    location: "PAU/Location/" + location + "/",
    clickedMenuItem: clickedMenuItem,
    dataLocation: location,
  };
  const newPageURL = "/pages/Order.html?data=" + JSON.stringify(dataToSend);
  window.location.href = newPageURL;
});

let foodModal = $('#foodModal');
let cancel = $('#cancelModal');
let addFoodItem = $('#add-food-item');


addFoodItem.click(function (e) {
  foodModal.css("display", "block");
});

foodModal.find("#cancelModal").click(function (e) {
  foodModal.css("display", "none");
});

$(document).ready(function () {

  $(".food-form").submit(function (event) {
    event.preventDefault();

    var foodName = $("#food-name").val();
    var foodUnitMass = $("#food-unit-mass").val();
    var foodPrice = $("#food-price").val();

    var foodImageFile = $("#food-image")[0].files[0];

    if (foodName === "" || foodUnitMass === "" || foodPrice === "" || !foodImageFile) {
      alert("Please fill in all the fields and select an image.");
    } else {

      let foodImage = '';
      async function UploadProcess() {
        const metaData = {
          contentType: foodImageFile.type
        }

        // Extract just the file name from the full path
        const fileName = foodImageFile.name;

        const storageRef = sRef(storage, "All-Foods/" + fileName);

        const UploadTask = uploadBytesResumable(storageRef, foodImageFile, metaData);

        UploadTask.on('state_changed', (snapshot) => {
         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress);
          
        },
          (error) => {
            console.log('error: image not uploaded' + error);
          },
          () => {
            getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
              foodImage = downloadURL;
              console.log("Food Image: " + foodImage);

              createID();
            });
          },
        );
      }

      function createID() {
        const uploadRef = ref(db, "PAU_all_foods/");
        const foodID = [];
        
        onValue(uploadRef, (snapshot) => {
        
          if (snapshot.val()) {
            const itemCount = Object.keys(snapshot.val()).length;
            foodID.push(itemCount);
            console.log(foodID); console.log(foodID[0]);
            AddToDatabase(foodID[0]);
            foodID.length = 0;
            console.log(foodID);
          }
           else {
            console.log('Could Not create ID')
          }
        }



        );

      }

      function AddToDatabase(foodID) {
        set(ref(db, "PAU_all_foods/" + foodName + "/"), {
          id: foodID,
          food: foodName,
          img: foodImage,
          mass_per_portion: foodUnitMass + 'g',
          price: foodPrice
        })
          .then(() => {
            console.log("Upload Successful");
          })
          .catch((error) => {
            console.log("Upload Error: " + error);
          })
      }

      UploadProcess();
      foodModal.css("display", "none");
      console.clear();
    
     $(".food-form").reset();
    }
  });
});


