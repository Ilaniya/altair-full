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

  // Get the modal
  let modal = document.querySelector(".modal");

  // Get the button that opens the modal
  let openBtn = document.querySelector(".btn-submit");

  // Get the button that closes the modal
  let closeBtn = document.querySelector(".btn-modal");

  let inputName = document.querySelector(".input-name");
  let inputPhone = document.querySelector(".input-phone");

  // When the user clicks the button, open the modal
  openBtn.onclick = function () {
    modal.style.display = "block";
    inputName.value = "";
    inputPhone.value = "";
  };

  // When the user clicks on buttonClose, close the modal
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  document.getElementById("elementId").value = "";
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

  // $(".btn-modal").on("click", function () {
  //   $(".modal").removeClass("active");
  // });
  // $(".btn-submit").on("click", function () {
  //   $(".modal").addClass("active");
  // });
});
