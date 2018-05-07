var link = document.querySelector(".main-nav__toggle--open");
var popup = document.querySelector(".main-nav__list");
var close = popup.querySelector(".main-nav__toggle--close");
link.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("popup--show");
link.classList.add("visually-hidden");
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup--show");
  link.classList.remove("visually-hidden");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("popup--show")) {
      popup.classList.remove("popup--show");
    }
    if (link.classList.contains("visually-hidden")) {
      link.classList.remove("visually-hidden");
    }
  }
});
