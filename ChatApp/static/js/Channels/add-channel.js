const addChannelModal = document.getElementById("add-channel-modal");
const addPageButtonClose = document.getElementById("add-page-close-btn");
const addChannelBtn = document.getElementById("add-channel-btn");
const addChannelConfirmBtn = document.getElementById(
  "add-channel-confirmation-btn"
);

// モーダル表示ボタンが押された時にモーダルを表示する
addChannelBtn.addEventListener("click", () => {
  addChannelModal.style.display = "flex";
});

// モーダル内のXボタンが押された時にモーダルを非表示にする
addPageButtonClose.addEventListener("click", () => {
  addChannelModal.style.display = "none";
});

// 画面のどこかが押された時にモーダルを非表示にする
addEventListener("click", (e) => {
  if (e.target == addChannelModal) {
    addChannelModal.style.display = "none";
  }
});

// add-channel-modalが表示されている時に Ctl + Enterで送信
// Enterで自動送信を防ぐ
document.addEventListener("keydown", keydownEvent);

function keydownEvent(e) {
  const newChannelTitle = document.addChannelForm.channelTitle.value;

  const addChannelModal = document.getElementById("add-channel-modal");
  const addChannelModalStyle = getComputedStyle(
    addChannelModal,
    null
  ).getPropertyValue("display");

  if (e.code === "Enter") {
    e.preventDefault();
  }

  if (e.ctrlKey) {
    if (e.code === "Enter") {
      if (addChannelModalStyle !== "none") {
        if (newChannelTitle !== "") {
          document.addChannelForm.submit();
        }
      }
    }
  }
}
