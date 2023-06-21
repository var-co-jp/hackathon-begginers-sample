const list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

list.forEach((item) => {
  item.addEventListener("click", activeLink);
});

// バーガーメニュー用（モバイルサイズ用）
// メニューを開く
const openBurgerBtn = document.getElementById("burger-icon");
const closeBurgerBtn = document.getElementById("burger-close-icon");
const menu = document.getElementById("mobile-header");

openBurgerBtn.addEventListener("click", openMenu);
function openMenu() {
  openBurgerBtn.style.display = "none";
  closeBurgerBtn.style.display = "block";
  menu.style.display = "block";
}

// メニューを閉じる
closeBurgerBtn.addEventListener("click", closeMenu);
function closeMenu() {
  closeBurgerBtn.style.display = "none";
  openBurgerBtn.style.display = "block";
  menu.style.display = "none";
}
