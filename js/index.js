window.onload = function () {
  ///////   function for burger menu ////////
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

  // Get the modal-cont-form
  let modalCntForm = document.querySelector(".modal-cont-form");

  // Get the button that opens the modal-cont-form
  let submitBtn = document.querySelector(".btn-submit");

  // Get the button that closes the modal-cont-form
  let closeBtn = document.querySelector(".btn-modal-cont-form");

  // When the user clicks the button, open the modal-cont-form
  submitBtn.onclick = function () {
    modalCntForm.style.display = "flex";
    // document.getElementsByName("form-trial-lesson").reset;
  };

  // When the user clicks on buttonClose, close the modal
  closeBtn.onclick = function () {
    modalCntForm.style.display = "none";
    document.forms["contact-form"].reset();
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modalCntForm) {
      modalCntForm.style.display = "none";
    }
  };
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
