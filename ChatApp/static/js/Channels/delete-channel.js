const deletePageButtonClose = document.getElementById("delete-page-close-btn");
const deleteChannelConfirmBtn = document.getElementById(
  "delete-channel-confirmation-btn"
);

deletePageButtonClose.addEventListener("click", () => {
  deleteChannelModal.style.display = "none";
});

addEventListener("click", (e) => {
  if (e.target == deleteChannelModal) {
    deleteChannelModal.style.display = "none";
  }
});
