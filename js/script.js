var link = document.querySelector(".main-nav__toggle--open");
var popup = document.querySelector(".main-nav__list");
var close = popup.querySelector(".main-nav__toggle--close");
var logomove = document.querySelector(".page-header__logo");
var headermove = document.querySelector(".page-header");
link.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("popup--show");
link.classList.add("visually-hidden");
logomove.classList.remove("page-header__logo--moved");
headermove.classList.remove("page-header--moved");
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup--show");
  link.classList.remove("visually-hidden");
  logomove.classList.add("page-header__logo--moved");
  headermove.classList.add("page-header--moved");
});
