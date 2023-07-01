// チャンネルを登録する時の処理

const addChannelModal = document.getElementById("add-channel-modal");
const addPageButtonClose = document.getElementById("add-page-close-button");
const addChannelConfirmButton = document.getElementById(
  "add-channel-confirmation-button"
);

// pagination.jsでチャンネル一覧が表示されるのを待ってから読みこまれる
// (チャンネル一覧を表示する処理が終わるまでaddChannnelButtonは存在しないためundefinedになる)
const loadAddChannelButton = () => {
  const addChannelButton = document.getElementById("add-channel-button");

  // モーダル表示ボタンが押された時にモーダルを表示する
  addChannelButton.addEventListener("click", () => {
    addChannelModal.style.display = "flex";
  });
};

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

// add-channel-modalが表示されている時に Ctrl/Command + Enterで送信
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

  if (
    ((e.ctrlKey && !e.metaKey) || (!e.ctrlKey && e.metaKey)) &&
    e.keyCode == 13
  ) {
    if (e.code === "Enter") {
      if (addChannelModalStyle !== "none") {
        if (newChannelTitle !== "") {
          document.addChannelForm.submit();
        }
      }
    }
  }
}
