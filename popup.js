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
});
