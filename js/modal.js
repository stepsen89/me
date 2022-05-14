const modals = document.querySelectorAll(".project-modal");
const modalButtons = document.querySelectorAll(".project-button");
const modalClose = document.querySelectorAll(".close");

let modal = function (modalClick) {
  modals[modalClick].classList.add("active-modal");
};

modalButtons.forEach((button, i) => {
  button.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((closeIcon) => {
  closeIcon.addEventListener("click", () => {
    modals.forEach((modal) => {
      modal.classList.remove("active-modal");
    });
  });
});
