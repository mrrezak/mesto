let popupOpen = document.querySelector(".profile__open");
let popup = document.querySelector(".popup");
let formElement = document.querySelector(".form");
let nameInput = formElement.querySelector("#title");
let closeButton = document.querySelector(".popup__close");
let jobInput = formElement.querySelector("#subtitle");

let profileName = document.querySelector(".profile__name");
let jobName = document.querySelector(".profile__major");

function openPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = jobName.textContent;
  popup.classList.add("popup_visible");
}

function closePopup() {
  popup.classList.remove("popup_visible");
}

function closePopupButtonClick(evt) {
  closePopup(popup);
}

function setNodeTextValue() {
  profileName.textContent = nameInput.value;
  jobName.textContent = jobInput.value;
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  setNodeTextValue();
  closePopup(popup);
}

formElement.addEventListener("submit", formSubmitHandler);
closeButton.addEventListener("click", closePopupButtonClick);
popupOpen.addEventListener("click", openPopup);
