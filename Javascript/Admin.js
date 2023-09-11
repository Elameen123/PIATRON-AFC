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
  const snacks = $("input[name='snacks']");
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
    const snacksList = [];


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

    snacks.each(function () {
      if ($(this).prop("checked")) {
        const menuType = "Snacks";
        fetchData($(this).val(), menuType);
        snacksList.push($(this).val());
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

//   const data = [
//     {
//         "Jollof Rice": {
//             "food": "Jollof Rice",
//             "id": "1",
//             "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FjollofRice.jpg?alt=media&token=846bbe69-8d87-4e74-8f9a-ce16dc4b792b",
//             "mass_per_portion": "185g",
//             "price": "300",
//             "menuType": "Rice & Pasta Dishes"
//         }
//     },
//     {
//         "Jollof Spaghetti": {
//             "food": "Jollof Spaghetti",
//             "id": 3,
//             "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FjollofSpaghetti.jpg?alt=media&token=d019f587-2a95-487e-ae17-c3e0b8d825c6",
//             "mass_per_portion": "180g",
//             "price": "300",
//             "menuType": "Rice & Pasta Dishes"
//         }
//     }
// ];

const data = [
  {
      "Fried Rice": {
          "food": "Fried Rice",
          "id": 32,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FfriedRice.jpg?alt=media&token=2df8e544-a5f0-4393-88ba-07a2aa996996",
          "mass_per_portion": "185g",
          "price": "300",
          "menuType": "Rice & Pasta Dishes"
      }
  },
  {
      "Jollof Rice": {
          "food": "Jollof Rice",
          "id": 1,
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
  },
  {
      "Fried Plantain": {
          "food": "Fried Plantain",
          "id": 30,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FfriedPlantain.jpg?alt=media&token=6022d2a0-1ef0-46f6-b270-d4e382bebcc7",
          "mass_per_portion": "25g",
          "price": "100",
          "menuType": "Side Dishes"
      }
  },
  {
      "Yam Pottage": {
          "food": "Yam Pottage",
          "id": 10,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FyamPottage.jpg?alt=media&token=1cb10fce-f70c-43df-871f-64dd4c34de79",
          "mass_per_portion": "135g",
          "price": "250",
          "menuType": "Side Dishes"
      }
  },
  {
      "Sweet Potato": {
          "food": "Sweet Potato",
          "id": 4,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FsweetPotato.jpg?alt=media&token=681abe93-e038-45e5-bf1f-c0d46ff546a1",
          "mass_per_portion": "110g",
          "price": "150",
          "menuType": "Side Dishes"
      }
  },
  {
      "Savoury Beans": {
          "food": "Savoury Beans",
          "id": 2,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FsavouryBeans.jpg?alt=media&token=1915718a-483e-4e8d-8c43-826233de0f80",
          "mass_per_portion": "150g",
          "price": "185",
          "menuType": "Side Dishes"
      }
  },
  {
      "Yam & Egg": {
          "food": "Yam & Egg",
          "id": 10,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FyamEgg.jpg?alt=media&token=ef8109e8-f878-4275-b99f-ca72e9b8383d",
          "mass_per_portion": "150g",
          "price": "250",
          "menuType": "Side Dishes"
      }
  },
  {
      "Akara": {
          "food": "Akara",
          "id": 0,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Fakara.jpg?alt=media&token=15024891-21d2-409d-8f72-a1fbad8c541e",
          "mass_per_portion": "40g",
          "price": "150",
          "menuType": "Side Dishes"
      }
  },
  {
      "Oat Meal": {
          "food": "Oat Meal",
          "id": 32,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Foatmeal.jpg?alt=media&token=3c0a82b1-339d-4349-935e-b6b00bfcd771",
          "mass_per_portion": "70g",
          "price": "200",
          "menuType": "Side Dishes"
      }
  },
  {
      "Sausage": {
          "food": "Sausage",
          "id": 38,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Fsausage.jpg?alt=media&token=94c4a65a-9faf-43e9-8b4b-4c27662bb442",
          "mass_per_portion": "100g",
          "price": "300",
          "menuType": "Snacks"
      }
  },
  {
      "Meat Pie": {
          "food": "Meat Pie",
          "id": 32,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Fmeatpie.jpg?alt=media&token=0d58606b-8b16-4c0b-a53d-58de9231e6d5",
          "mass_per_portion": "60g",
          "price": "550",
          "menuType": "Snacks"
      }
  },
  {
      "Chicken Pie": {
          "food": "Chicken Pie",
          "id": 32,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Fchickenpie.jpg?alt=media&token=fc890037-0cd2-4326-ba1c-182606c5969a",
          "mass_per_portion": "70g",
          "price": "550",
          "menuType": "Snacks"
      }
  },
  {
      "Egg Roll": {
          "food": "Egg Roll",
          "id": 32,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Feggroll.jpg?alt=media&token=73079544-fa87-4808-9df1-f87d393be74c",
          "mass_per_portion": "60g",
          "price": "250",
          "menuType": "Snacks"
      }
  },
  {
      "Doughnut": {
          "food": "Doughnut",
          "id": 32,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Fdoughnut.jpg?alt=media&token=d7265c0c-982b-4345-82a7-a128733f14be",
          "mass_per_portion": "45g",
          "price": "150",
          "menuType": "Snacks"
      }
  },
  {
      "Eba": {
          "food": "Eba",
          "id": 32,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Feba.jpg?alt=media&token=b35e2af4-ac62-4e0a-b1e9-77021f1ba3a3",
          "mass_per_portion": "50g",
          "price": "150",
          "menuType": "Soups & Swallows"
      }
  },
  {
      "Semo": {
          "food": "Semo",
          "id": 38,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Fsemo.jpg?alt=media&token=7408b37f-24a0-46a7-8a5f-4fa0e8644cca",
          "mass_per_portion": "40g",
          "price": "150",
          "menuType": "Soups & Swallows"
      }
  },
  {
      "Egusi Soup": {
          "food": "Egusi Soup",
          "id": 32,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Fegusi.jpg?alt=media&token=1ae3242f-692e-4be4-a798-c7a2d4353fad",
          "mass_per_portion": "30g",
          "price": "200",
          "menuType": "Soups & Swallows"
      }
  },
  {
      "Oha Soup": {
          "food": "Oha Soup",
          "id": 32,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Foha.jpg?alt=media&token=3afeb84d-2a3b-46fd-9d18-e602b577c543",
          "mass_per_portion": "60g",
          "price": "200",
          "menuType": "Soups & Swallows"
      }
  },
  {
      "Okro Soup": {
          "food": "Okro Soup",
          "id": 32,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Fokro.jpg?alt=media&token=604384d7-5887-4f2a-8630-4ddeb00679e6",
          "mass_per_portion": "50g",
          "price": "200",
          "menuType": "Soups & Swallows"
      }
  },
  {
      "Nsala Soup": {
          "food": "Nsala Soup",
          "id": 32,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Fnsala.jpg?alt=media&token=b5c46fc0-3d7c-43db-8240-56e9b30f65a8",
          "mass_per_portion": "50g",
          "price": "200",
          "menuType": "Soups & Swallows"
      }
  },
  {
      "Chicken Casserole": {
          "food": "Chicken Casserole",
          "id": 32,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FchickenCasserole.jpg?alt=media&token=334f7f55-4786-4364-95c4-4f29a8fe6b3f",
          "mass_per_portion": "120g",
          "price": "900",
          "menuType": "Proteins"
      }
  },
  {
      "Hotdog": {
          "food": "Hotdog",
          "id": 32,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Fhotdog.jpg?alt=media&token=6ace6a52-a760-4e00-9fa7-d82c613bd964",
          "mass_per_portion": "30g",
          "price": "150",
          "menuType": "Proteins"
      }
  },
  {
      "Boiled Egg": {
          "food": "Boiled Egg",
          "id": 10,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FboiledEgg.jpg?alt=media&token=96c391f9-392f-4fca-bc0e-049d59583d92",
          "mass_per_portion": "30g",
          "price": "100",
          "menuType": "Proteins"
      }
  },
  {
      "Fried Beef": {
          "food": "Fried Beef",
          "id": 10,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FfriedBeef.jpg?alt=media&token=c809e956-f24a-45a8-a951-09f08071819a",
          "mass_per_portion": "40g",
          "price": "200",
          "menuType": "Proteins"
      }
  },
  {
      "Fried Fish": {
          "food": "Fried Fish",
          "id": 32,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FfriedFish.jpg?alt=media&token=ed1a4990-c927-490e-a31f-007e1801b3a7",
          "mass_per_portion": "40g",
          "price": "300",
          "menuType": "Proteins"
      }
  },
  {
      "Bottled Water": {
          "food": "Bottled Water",
          "id": 9,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FbottledWater.jpg?alt=media&token=58101c2a-53f7-4052-93bf-3e8b2d39482e",
          "mass_per_portion": "75g",
          "price": "100",
          "menuType": "Drinks"
      }
  },
  {
      "Freshyo": {
          "food": "Freshyo",
          "id": 32,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Ffreshyo.jpg?alt=media&token=0684761e-b1e0-4aea-aa7c-bcd32d8472a5",
          "mass_per_portion": "70g",
          "price": "400",
          "menuType": "Drinks"
      }
  },
  {
      "Viju Choco": {
          "food": "Viju Choco",
          "id": 38,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2FvijuChoco.jpg?alt=media&token=ca2b647b-211b-4d05-93ca-8577ef8360fc",
          "mass_per_portion": "75g",
          "price": "500",
          "menuType": "Drinks"
      }
  },
  {
      "Zobo": {
          "food": "Zobo",
          "id": 37,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Fzobo.jpg?alt=media&token=db3a59b8-9bd2-48d5-a640-1c2e690bfecf",
          "mass_per_portion": "50g",
          "price": "300",
          "menuType": "Drinks"
      }
  },
  {
      "Pineapple Juice": {
          "food": "Pineapple Juice",
          "id": 31,
          "img": "https://firebasestorage.googleapis.com/v0/b/piatron-a9a6d.appspot.com/o/All-Foods%2Fpineapple.jpg?alt=media&token=b25299ef-ad34-4182-bc95-e29ec471881c",
          "mass_per_portion": "50g",
          "price": "300",
          "menuType": "Drinks"
      }
  }
]

for (const item of menuList) {
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
    console.log('Menu Group uploaded to the database');
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
    
      $("input[type='text'], input[type='file'], input[type='number']").val('');
    }
  });
});

const salesDate = new Date();
const currentDate = `${salesDate.getFullYear()}${(salesDate.getMonth() + 1).toString().padStart(2, '0')}${salesDate.getDate().toString().padStart(2, '0')}`;

const readSalesReport = () => {
  const salesList = document.getElementById('salesData');
  onValue( ref(db, "PAU-sales-report/" + currentDate + "/"), (snapshot) => {
    const salesData  = [];

    console.log(snapshot.val());

    if (snapshot.val()) {
      snapshot.forEach((item) => {
        salesData.push(item.val());
      });
    }
    console.log(salesData);

    salesData.reverse();

    const income = document.getElementById('income');
    const order = document.getElementById('order');
    const Quantity = document.getElementById('totalQuantity');

    let totalIncome = 0;
    let totalOrder = 0;
    let totalQuantity = 0;

    salesData.forEach((sales) => {
      totalIncome = totalIncome + parseInt(sales.price * sales.quantity);
      totalOrder++;
      totalQuantity = totalQuantity + sales.quantity;
      const salesRow = document.createElement('tr');

      salesRow.innerHTML = `
          <td>${sales.date}</td>
          <td>${sales.name}</td>
          <td>${sales.quantity}</td>
          <td>${sales.timestamp}</td>
          <td>&#8358;${sales.price * sales.quantity}.00</td>
          <td>${sales.location}</td>
          <td>Moderate</td>
          <td><button type="button">
            Edit
          </button></td>
      `;

      salesList.appendChild(salesRow);

    });

    income.innerHTML = '&#8358;' + totalIncome.toFixed(2);
    order.innerHTML = totalOrder;
    Quantity.innerHTML = totalQuantity;


  })
}

readSalesReport();





