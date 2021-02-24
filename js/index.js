window.onload = function () {
  document
    .querySelector("#header-burger")
    .addEventListener("click", showBurgerMenu);

  function showBurgerMenu() {
    let headerBurger = document.getElementById("header-burger");
    let headerMenu = document.getElementById("headerMenu");

    headerBurger.classList.toggle("active");
    headerMenu.classList.toggle("active");
  }
  window.addEventListener("scroll", closeBurgerMenu);

  function closeBurgerMenu() {
    let headerBurger = document.getElementById("header-burger");
    let headerMenu = document.getElementById("headerMenu");

    headerBurger.classList.toggle("active", false);
    headerMenu.classList.toggle("active", false);
  }
};

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
