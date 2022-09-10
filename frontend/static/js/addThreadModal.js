// <button id="add-thread-btn">チャンネル追加</button>が押されたら発火

const modal = document.getElementById("modal");
const buttonClose = document.getElementsByClassName("modalClose")[0];
const addThreadBtn = document.getElementById("add-thread-btn");
const searchFriedBtn = document.getElementById("search-btn");

const addThread = () => {
  return;
};

// <button id="add-thread-btn">チャンネル追加</button>ボタンがクリックされた時
addThreadBtn.addEventListener("click", modalOpen);
function modalOpen() {
  modal.style.display = "block";
}

// モーダル内のバツ印がクリックされた時
buttonClose.addEventListener("click", modalClose);
function modalClose() {
  modal.style.display = "none";
}

// モーダルコンテンツ以外がクリックされた時
addEventListener("click", outsideClose);
function outsideClose(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

// フレンド登録ボタンが押された時
searchFriedBtn.addEventListener("click", searchFriend);
function searchFriend() {
  console.log("search");
  // バックエンドにフレンドを探しに行く処理
}
