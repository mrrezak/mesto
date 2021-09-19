let root = document.querySelector(".root");
let popupOp = root.querySelector(".profile__open");
let popup = root.querySelector(".popup");
let formElement = root.querySelector(".form");
let nameInput = formElement.querySelector("#title");
let jobInput = formElement.querySelector("#subtitle");
let myLike = root.querySelector(".grid__like");

let profN = root.querySelector(".profile__name");
let jobN = root.querySelector(".profile__major");

root.addEventListener("click", closePopup);
root.addEventListener("click", active);

popupOp.addEventListener("click", function () {
  setPopupInputValue();
  openPopup(popup);
});

function openPopup(modal) {
  console.log(modal);
  modal.classList.add("popup_visible");
}

function active(modal) {
  const doLike = modal.target;
  console.log(doLike);

  if (
    doLike.classList.contains("grid__like") &&
    doLike.classList.contains("grid__like_active") != true
  ) {
    doLike.classList.add("grid__like_active");
  } else {
    doLike.classList.remove("grid__like_active");
  }
}

function closePopup(evt) {
  const closeBtn = evt.target;

  if (
    closeBtn.classList.contains("popup__close-image") ||
    closeBtn.classList.contains("form__button")
  ) {
    closeBtn.closest(".popup").classList.remove("popup_visible");
  }
}

function setPopupInputValue() {
  nameInput.value = profN.textContent;
  jobInput.value = jobN.textContent;
}

function setNodeTextValue() {
  profN.textContent = nameInput.value;
  jobN.textContent = jobInput.value;
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  setNodeTextValue();
}

formElement.addEventListener("submit", formSubmitHandler);
