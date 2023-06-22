const pagination = () => {
  let page = 1; // 今何ページ目にいるか
  const STEP = 5; // ステップ数（1ページに表示する項目数）

  // 全ページ数を計算
  // チャンネルの総数/ステップ数の余りの有無で場合分け
  // 余りがある場合は１ページ余分に追加する
  const TOTAL =
    channels.length % STEP == 0
      ? channels.length / STEP
      : Math.floor(channels.length / STEP) + 1;

  // ページネーションで表示される数字部分の要素を作成
  const paginationUl = document.querySelector(".pagination");
  let pageCount = 0;
  while (pageCount < TOTAL) {
    let pageNumber = document.createElement("li");
    pageNumber.dataset.pageNum = pageCount + 1;
    pageNumber.innerText = pageCount + 1;
    paginationUl.appendChild(pageNumber);
    // ページネーションの数字部分が押された時にもページが変わるように処理
    pageNumber.addEventListener("click", (e) => {
      const targetPageNum = e.target.dataset.pageNum;
      console.log(targetPageNum);
      page = targetPageNum;
      show(page, STEP);
      colorPaginationNum();
    });
    pageCount++;
  }

  // 各チャンネルのタイトル(と削除ボタン)の要素を作成し、ページを表示する
  const show = (page, STEP) => {
    const ul = document.querySelector(".channel-box");
    // 一度チャンネルリストを空にする
    ul.innerHTML = "";

    const firstChannelInPage = (page - 1) * STEP + 1;
    const lastChannelInPage = page * STEP;

    // 各チャンネル要素の作成
    channels.forEach((channel, i) => {
      if (i < firstChannelInPage - 1 || i > lastChannelInPage - 1) return;
      const a = document.createElement("a");
      const li = document.createElement("li");
      const channelURL = `/detail/${channel.id}`;
      a.innerText = channel.name;
      a.setAttribute("href", channelURL);
      li.appendChild(a);

      // もしチャンネル作成者uidと自分のuidが同じだった場合は削除ボタンを追加
      if (uid === channel.uid) {
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML =
          '<ion-icon name="trash-bin-outline" style="color: #f57978"></ion-icon>';
        deleteButton.classList.add("delete-button");
        li.appendChild(deleteButton);
        deleteButton.addEventListener("click", () => {
          modalOpen("delete");
          const confirmationButtonLink = document.getElementById(
            "delete-confirm-link"
          );
          // aタグにhrefを追加
          const channelURL = `/delete/${channel.id}`;
          confirmationButtonLink.setAttribute("href", channelURL);
        });
      }
      ul.appendChild(li);
    });
  };
  // pagination内で現在選択されているページの番号に色を付ける
  const colorPaginationNum = () => {
    // ページネーションの数字部分の全要素から"colored"クラスを一旦取り除く
    const paginationArr = [...document.querySelectorAll(".pagination li")];
    paginationArr.forEach((page) => {
      page.classList.remove("colored");
    });
    // 選択されているページに　class="colored"を追加（文字色が変わる）
    paginationArr[page - 1].classList.add("colored");
  };

  // 最初に1ページ目を表示
  show(page, STEP);
  colorPaginationNum();

  // 前ページ遷移
  document.getElementById("prev").addEventListener("click", () => {
    if (page <= 1) return;
    page = page - 1;
    show(page, STEP);
    colorPaginationNum();
  });

  // 次ページ遷移
  document.getElementById("next").addEventListener("click", () => {
    if (page >= channels.length / STEP) return;
    page = page + 1;
    show(page, STEP);
    colorPaginationNum();
  });
};

window.onload = () => {
  pagination();
};
