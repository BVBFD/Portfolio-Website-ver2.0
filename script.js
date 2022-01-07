let portfolioBtn = document.querySelectorAll(".portfolio .chooseBox .btn");
let frontEndContainer = document.querySelector(
  ".portfolio .frontEnd-container"
);
let backEndContainer = document.querySelector(".portfolio .backEnd-container");

portfolioBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (event.target.dataset.field === "frontEnd-container") {
      frontEndContainer.classList.add("active");
      backEndContainer.classList.remove("active");
    } else {
      frontEndContainer.classList.remove("active");
      backEndContainer.classList.add("active");
    }
  });
});
