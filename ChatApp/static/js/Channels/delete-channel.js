// チャンネルを削除する時の処理

const deletePageButtonClose = document.getElementById(
  "delete-page-close-button"
);
const deleteChannelConfirmButton = document.getElementById(
  "delete-channel-confirmation-button"
);

// モーダル内のXボタンが押された時にモーダルを非表示にする
deletePageButtonClose.addEventListener("click", () => {
  deleteChannelModal.style.display = "none";
});

// 画面のどこかが押された時にモーダルを非表示にする
addEventListener("click", (e) => {
  if (e.target == deleteChannelModal) {
    deleteChannelModal.style.display = "none";
  }
});
