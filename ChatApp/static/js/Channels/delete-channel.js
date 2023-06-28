const deletePageButtonClose = document.getElementById("delete-page-close-btn");
const deleteChannelConfirmBtn = document.getElementById(
  "delete-channel-confirmation-btn"
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
