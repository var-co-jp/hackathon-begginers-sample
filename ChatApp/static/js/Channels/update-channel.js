const updateButton = document.getElementById("channel-update");
const updateChannelModal = document.getElementById("update-channel-modal");
const updatePageButtonClose = document.getElementById("update-page-close-btn");

const updateChannel = () => {
  if (uid !== channel.uid) {
    return;
  } else {
    updateChannelModal.style.display = "flex";
  }
};

updateButton.addEventListener("click", updateChannel);

updatePageButtonClose.addEventListener("click", () => {
  updateChannelModal.style.display = "none";
});

addEventListener("click", (e) => {
  if (e.target == updateChannelModal) {
    updateChannelModal.style.display = "none";
  }
});
