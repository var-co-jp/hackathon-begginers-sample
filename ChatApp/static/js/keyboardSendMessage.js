// detailページ内
// Ctl ＋ Enter が押された時にフォームを送信する

document.addEventListener("keydown", keydownEvent);
const addMessageButton = document.getElementById("add-message-btn");

function keydownEvent(e) {
  const newMessageBody = document.newMessageForm.message;

  if (e.ctrlKey) {
    if (e.code === "Enter") {
      // Ctrl + Enterが同時押しされた時の処理
      if (newMessageBody.value) {
        document.newMessageForm.submit();
      }
    }
  }
}
