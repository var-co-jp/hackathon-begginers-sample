// detailページ内
// Ctrl/Command ＋ Enter が押された時にフォームを送信する

document.addEventListener("keydown", keydownEvent);

function keydownEvent(e) {
  if (e.ctrlKey || e.metaKey || e.code === "Enter") {
    const newMessageBody = document.newMessageForm.message;

    // updateChannelModalStyleに"none"を格納
    let updateChannelModalStyle = "none";

    // uidとチャンネルidが同じ時には
    // updateChannelModalStyleにモーダルのdisplay属性の状態」を格納
    if (updateChannelModal) {
      updateChannelModalStyle =
        getComputedStyle(updateChannelModal).getPropertyValue("display");
    }

    if (e.code === "Enter") {
      if (updateChannelModalStyle !== "none") {
        e.preventDefault();
      }
    }

    // Ctrl/Command + Enterが同時押しされた時の処理
    if (
      ((e.ctrlKey && !e.metaKey) || (!e.ctrlKey && e.metaKey)) &&
      e.code === "Enter"
    ) {
      // updateモーダルが存在していないページ or updateモーダルはあるが表示されていない時
      if (updateChannelModalStyle === "none") {
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
