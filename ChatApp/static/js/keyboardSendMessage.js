// detailページ内
// Ctl ＋ Enter が押された時にフォームを送信する

document.addEventListener("keydown", keydownEvent);

function keydownEvent(e) {
  const newMessageBody = document.newMessageForm.message;
  const updateChannelModal = document.getElementById("update-channel-modal");
  const updateChannelModalStyle = getComputedStyle(
    updateChannelModal,
    null
  ).getPropertyValue("display");

  if (e.code === "Enter") {
    if (updateChannelModalStyle !== "none") {
      e.preventDefault();
    }
  }

  if (e.ctrlKey) {
    // Ctrl + Enterが同時押しされた時の処理
    if (e.code === "Enter") {
      // update-channel-modalが表示されていない時
      if (updateChannelModalStyle === "none") {
        if (newMessageBody.value) {
          document.newMessageForm.submit();
        }
      } else {
        sendUpdateForm();
      }
    }
  }
}
