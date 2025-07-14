"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// To open modal window
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// To close modal window
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Event listener to open modal window
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

// Event listener to close modal window
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Event listener to close modal window with Escape key
document.addEventListener("keydown", function (e) {
  if (
    e.code === "Escape" &&
    !modal.classList.contains("hidden") &&
    !overlay.classList.contains("hidden")
  ) {
    closeModal();
  }
});
