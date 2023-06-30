// detailページ内
// Ctl ＋ Enter が押された時にフォームを送信する

document.addEventListener("keydown", keydownEvent);

function keydownEvent(e) {
  const newMessageBody = document.newMessageForm.message;
  // uidとチャンネルidが同じ時には
  // 「updateChannelModalにモーダル、updateChannelModalStyleにモーダルのdisplay属性の状態」を格納
  // 違う場合は
  // 「updateChannelModalにnull、updateChannelModalStyleに"none"」を格納
  const updateChannelModal =
    document.getElementById("update-channel-modal") || null;
  let updateChannelModalStyle = "none";

  if (updateChannelModal) {
    updateChannelModalStyle = getComputedStyle(
      updateChannelModal,
      null
    ).getPropertyValue("display");
  }

  if (e.code === "Enter") {
    if (updateChannelModalStyle !== "none") {
      e.preventDefault();
    }
  }

  if (
    ((e.ctrlKey && !e.metaKey) || (!e.ctrlKey && e.metaKey)) &&
    e.keyCode == 13
  ) {
    // Ctrl/Command + Enterが同時押しされた時の処理
    if (e.code === "Enter") {
      // updateモーダルが存在していないページ or updateモーダルはあるが表示されていない時
      if (!updateChannelModal || updateChannelModalStyle === "none") {
        // if (updateChannelModalStyle === "none") {
        if (newMessageBody.value) {
          document.newMessageForm.submit();
        }
      } else {
        // updateモーダルが表示されている場合はそっちの送信を優先する
        sendUpdateForm();
      }
    }
  }
}
