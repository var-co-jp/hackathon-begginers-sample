const updateButton = document.getElementById("channel-update");
const updateChannelModal = document.getElementById("update-channel-modal");
const updatePageButtonClose = document.getElementById("update-page-close-btn");

const updateChannel = () => {
  if (uid !== channel.uid) {
    return;
  } else {
    modalOpen("update");
  }
};
updateButton.addEventListener("click", updateChannel);

updatePageButtonClose.addEventListener("click", () => {
  modalClose("update");
});
