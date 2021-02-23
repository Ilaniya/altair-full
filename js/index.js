// //дожидаемся полной загрузки страницы
// window.onload = function () {
//   document.addEventListener("click", showBurgerMenu);

//   function showBurgerMenu() {
//     document.getElementById("header-burger").classList.toggle("active");
//     document.getElementById("headerMenu").classList.toggle("active");
//   }
// };

$(function () {
  // Scroll Event
  $(window).on("scroll", function () {
    let scrolled = $(window).scrollTop();
    if (scrolled > 1000) $(".arrow-bottom").addClass("active-arrow-up");
    if (scrolled < 1000) $(".arrow-bottom").removeClass("active-arrow-up");
  });
  // Click Event
  $(".arrow-bottom").on("click", function () {
    $("html, body").animate({ scrollTop: "0" }, 300, "swing");
  });
});
