/*
const popup = document.getElementById("supportPopup");

document.getElementById("openSupportPopup").addEventListener("click", () => {
  popup.style.display = "flex";
});

document.getElementById("closeSupportPopup").addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});*/

const popup = document.getElementById("supportPopup");

document.querySelectorAll(".open-support-popup").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    popup.style.display = "flex";
  });
});

document
  .getElementById("closeSupportPopup")
  .addEventListener("click", function () {
    popup.style.display = "none";
  });

window.addEventListener("click", function (e) {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
