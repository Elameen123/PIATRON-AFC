// window.onload = function() {
//   if (window.jQuery) {  
//       // jQuery is loaded  
//       alert("Yeah!");
//   } else {
//       // jQuery is not loaded
//       alert("Doesn't Work");
//   }
// }
console.log('Admin.js is bundled');

$('.sideMenu > ul > li').click(function () {

  $('.sideMenu > ul > li > ul > li').click(function () {
    // remove active from already active 
  $(this).siblings().removeClass('active'); 
  // Add active to Clicked 
  $(this).toggleClass('active');
  // If it has sub menu, open it 
  $(this).find('ul').slideToggle();
  // Close other sub menu if any is open 
  $(this).siblings().find('ul').slideUp();
  // remove active class of sub menu items 
  $(this).siblings().find('ul').find('li').removeClass('active');
  });
  
  // remove active from already active 
  $(this).siblings().removeClass('active'); 
  // Add active to Clicked 
  $(this).toggleClass('active');
  // If it has sub menu, open it 
  $(this).find('ul').slideToggle();
  // Close other sub menu if any is open 
  $(this).siblings().find('ul').slideUp();
  // remove active class of sub menu items 
  $(this).siblings().find('ul').find('li').removeClass('active');
});

// $('.sub-side-menu > li').click(function () {
//   // remove active from already active 
//   $(this).siblings().removeClass('active');
//   // $(this).siblings().find('ul').removeClass('active'); 
//   // Add active to Clicked 
//   $(this).toggleClass('active');
//   // $(this).siblings('ul').toggleClass('active');
//   // If it has sub menu, open it 
//   $(this).find('ul').slideToggle();
//   // Close other sub menu if any is open 
//   $(this).siblings().find('ul').find('li').slideToggle();
//   // Close other sub menu if any is open 
//   $(this).siblings().find('ul').slideUp();
//   // remove active class of sub menu items 
//   $(this).siblings().find('ul').find('li').removeClass('active');
// });



// $(document).ready(function(){
//   $('').click(function (){
//     // remove active from already active 
//     $(this).siblings().removeClass('active');
//     // Add active to Clicked 
//     $(this).toggleClass('active');
//     // If it has sub menu, open it 
//     $(this).find('ul').slideToggle();
//   });
// });