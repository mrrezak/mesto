let popupOpen = document.querySelector(".profile__open");
let popup = document.querySelector(".popup");
let formElement = document.querySelector(".form");
let nameInput = formElement.querySelector("#title");
let closeButton = document.querySelector(".popup__close");
let jobInput = formElement.querySelector("#subtitle");
let myLike = document.querySelector(".grid__like");

let profileName = document.querySelector(".profile__name");
let jobName = document.querySelector(".profile__major");

//document.addEventListener("click", closePopup);
//document.addEventListener("click", active);


function openPopup(modal) {
  nameInput.value = profileName.textContent;
  jobInput.value = jobName.textContent;
  modal.classList.add("popup_visible");
}

//function active(modal) {
//  const doLike = modal.target;
//  console.log(doLike);
//
//  if (
//    doLike.classList.contains("grid__like") &&
//    doLike.classList.contains("grid__like_active") != true
//  ) {
//    doLike.classList.add("grid__like_active");
// } else {
//    doLike.classList.remove("grid__like_active");
//  }
//}

function closePopup(evt) {
  evt.classList.remove('popup_visible')
}

function closePopupButtonClick(evt) {
  const target = evt.target;
  const currentPopup = target.closest('.popup')
  closePopup(currentPopup)
}

//function setPopupInputValue() {
//  nameInput.value = profileName.textContent;
//  jobInput.value = jobName.textContent;
//}

function setNodeTextValue() {
  profileName.textContent = nameInput.value;
  jobName.textContent = jobInput.value;
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  setNodeTextValue();
  closePopup(popup)
}

formElement.addEventListener("submit", formSubmitHandler);
closeButton.addEventListener("click", closePopupButtonClick);
popupOpen.addEventListener("click", function () {
  //setPopupInputValue();
  openPopup(popup);
});
