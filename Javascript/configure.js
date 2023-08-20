// alert("Script is working properly")
console.log("Script is working properly");
  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("add-menu-group");

const menuname = document.getElementById("menuName");

const form  = document.querySelector("form");

const nameError  = document.getElementById("nameError");

const menuList = ['Rice & Pasta Dishes', 'Side Dishes', 'Soups & Swallows', 'Proteins', 'Drinks']

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-menu-group")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

form.addEventListener('submit',  function(e){

  // Form Validation for the Menu Group Name 
  const errors = [];

  if (menuname.value.length < 4){
    errors.push ("Menu Group Name must be at least 4 characters")
  }

  if (menuname.value.length === 0 || menuname.value.trim() === ""){
    errors.push("Menu Group Name required")
  }

  if (errors.length > 0) {
    e.preventDefault();
    nameError.toggleAttribute('hidden')
    nameError.innerHTML = errors.join(', ');
  }

  //Form Validation for Checkboxes
var rice = document.getElementsByName('rice');
var side = document.getElementsByName('side');
var swallow = document.getElementsByName('swallow');
var protein = document.getElementsByName('protein');
var drinks = document.getElementsByName('drinks');

console.log(rice);

    const menuListData = [];

  var riceList = [];

  var sideList = [];

  var swallowList = [];

  var proteinList = [];

  var drinksList = [];

  for (var i = 0; i < rice.length; i++) {
    if (rice[i].checked === true) {
      riceList.push(rice[i].value);
    }
  }

  for (var i = 0; i < side.length; i++) {
    if (side[i].checked === true) {
      sideList.push(side[i].value);
    }
  }

  for (var i = 0; i < swallow.length; i++) {
    if (swallow[i].checked === true) {
      swallowList.push(swallow[i].value);
    }
  }

  for (var i = 0; i < protein.length; i++) {
    if (protein[i].checked === true) {
      proteinList.push(protein[i].value);
    }
  }

  for (var i = 0; i < drinks.length; i++) {
    if (drinks[i].checked === true) {
      drinksList.push(drinks[i].value);
    }
  }

  console.log(riceList);

  menuListData.push(riceList);
  menuListData.push(sideList);
  menuListData.push(swallowList);
  menuListData.push(proteinList);
  menuListData.push(drinksList);

  console.log(menuListData);

  const groupList = [];

  for (j = 0; j < menuList.length; j++) {
    lists = {name:menuList[j], data:menuListData[j]}

    groupList.push(lists);
  }

  const newMenuGroup = {name: menuname.value,
  item: groupList}

  console.log(newMenuGroup);

  // Storing all formed New Menu Group Objects 
  Groups = [];
  Groups.push(newMenuGroup);

  window.sessionStorage.setItem('Groups', JSON.stringify(Groups));

  // Clearing all Arrays
  sideList.length = 0;
  riceList.length = 0;
  proteinList.length = 0;
  drinksList.length = 0;
  swallowList.length = 0;
  menuListData.length = 0;
  groupList.length = 0;

  // Clearing all Objects
  newMenuGroup = {};
  lists = {};

});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
