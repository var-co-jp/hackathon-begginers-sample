const chatHeader = document.getElementById("chat-header");

const updateButton = document.getElementById("channel-update");

const updateChannel = () => {
  if (uid !== channel.uid) {
    return;
  } else {
    console.log("same");
    modalOpen("update");
    const confirmationButtonLink = document.getElementById(
      "update-confirm-link"
    ); // aタグ
    const url = `/update-channel`;
    confirmationButtonLink.setAttribute("href", url);
  }
};
updateButton.addEventListener("click", updateChannel);
