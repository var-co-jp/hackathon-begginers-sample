// モーダルを表示させる

const addChannelModal = document.getElementById("add-channel-modal");
const deleteChannelModal = document.getElementById("delete-channel-modal");

const addPageButtonClose = document.getElementById("add-page-close-btn");
const deletePageButtonClose = document.getElementById("delete-page-close-btn");

const addChannelBtn = document.getElementById("add-channel-btn");

const addChannelConfirmBtn = document.getElementById(
  "add-channel-confirmation-btn"
);
const deleteChannelConfirmBtn = document.getElementById(
  "delete-channel-confirmation-btn"
);

// モーダルを開く
// チャンネル追加ボタンが押された時の処理
addChannelBtn.addEventListener("click", () => {
  modalOpen("add");
});

function modalOpen(mode) {
  if (mode === "add") {
    addChannelModal.style.display = "flex";
  } else if (mode === "delete") {
    deleteChannelModal.style.display = "flex";
  } else if (mode === "update") {
    updateChannelModal.style.display = "flex";
  }
}

// モーダル内のバツ印がクリックされた時の処理
addPageButtonClose.addEventListener("click", () => {
  modalClose("add");
});
deletePageButtonClose.addEventListener("click", () => {
  modalClose("delete");
});

function modalClose(mode) {
  if (mode === "add") {
    addChannelModal.style.display = "none";
  } else if (mode === "delete") {
    deleteChannelModal.style.display = "none";
  } else if (mode === "update") {
    updateChannelModal.style.display = "none";
  }
}

// モーダルコンテンツ以外がクリックされた時の処理
addEventListener("click", outsideClose);
function outsideClose(e) {
  if (e.target == addChannelModal) {
    addChannelModal.style.display = "none";
  } else if (e.target == deleteChannelModal) {
    deleteChannelModal.style.display = "none";
  }
}
