const addChannelModal = document.getElementById("add-channel-modal");
const addPageButtonClose = document.getElementById("add-page-close-btn");
const addChannelBtn = document.getElementById("add-channel-btn");
const addChannelConfirmBtn = document.getElementById(
  "add-channel-confirmation-btn"
);

addChannelBtn.addEventListener("click", () => {
  addChannelModal.style.display = "flex";
});

addPageButtonClose.addEventListener("click", () => {
  addChannelModal.style.display = "none";
});

addEventListener("click", (e) => {
  if (e.target == addChannelModal) {
    addChannelModal.style.display = "none";
  }
});
