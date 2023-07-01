// チャンネル一覧ページでレスポンスが返ってきた後、
// 送られてきたチャンネル一覧の配列をもとにページネーションの追加/チャンネルリストの表示を行う処理。

const deleteChannelModal = document.getElementById("delete-channel-modal");

// paginationでチャンネル一覧を追加した後、「チャンネル登録ボタン」を追加
// ボタンを追加した後に「loadAddChannelButton関数（add-channel.js内）」を呼び出したい。
// なのでここのpagination関数はasyncにしている。
const pagination = async () => {
  let page = 1; // 今何ページ目にいるか
  const STEP = 6; // ステップ数（1ページに表示する項目数）

  // 全ページ数を計算
  // 「チャンネルの総数/(割る)ステップ数」の余りの有無で場合分け
  // 余りがある場合は１ページ余分に追加する
  const TOTAL =
    channels.length % STEP == 0
      ? channels.length / STEP
      : Math.floor(channels.length / STEP) + 1;

  // ページネーションで表示される数字部分(ページ数)の要素を作成
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
      page = Number(targetPageNum);
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
        // ゴミ箱ボタンが押された時にdeleteモーダルを表示させる
        deleteButton.addEventListener("click", () => {
          deleteChannelModal.style.display = "flex";
          const confirmationButtonLink = document.getElementById(
            "delete-confirmation-link"
          );
          // aタグにhrefを追加
          const channelURL = `/delete/${channel.id}`;
          confirmationButtonLink.setAttribute("href", channelURL);
        });
      }

      // もしチャンネルに説明文が登録されていたら吹き出しを作成（hover時に表示される）
      if (channel.abstract) {
        const channelDescriptionTooltip = document.createElement("div");
        channelDescriptionTooltip.style.display = "innerBlock";
        channelDescriptionTooltip.classList.add("channel-description-tooltip");
        channelDescriptionTooltip.appendChild(li);
        const tooltipBody = document.createElement("div");
        tooltipBody.classList.add("tooltip-body");
        tooltipBody.innerHTML = channel.abstract;
        channelDescriptionTooltip.appendChild(tooltipBody);
        ul.appendChild(channelDescriptionTooltip);
      } else {
        // チャンネルに説明文が登録されていない場合はツールチップなしでulにliを追加する
        ul.appendChild(li);
      }
    });
    // チャンネル追加ボタンを付け加える
    const addChannelButton = document.createElement("ion-icon");
    addChannelButton.id = "add-channel-button";
    addChannelButton.name = "add-circle-outline";
    addChannelButton.style = "color: #122543";
    ul.appendChild(addChannelButton);
  };
  // pagination内で現在選択されているページの番号に色を付ける
  const colorPaginationNum = () => {
    // ページネーションの数字部分の全要素から"colored"クラスを一旦取り除く
    const paginationArr = [...document.querySelectorAll(".pagination li")];
    paginationArr.forEach((page) => {
      page.classList.remove("colored");
    });
    // 選択されているページにclass="colored"を追加（文字色が変わる）
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

// 画面がロードされる時の処理
window.onload = () => {
  // pagination関数（asyncが完了したらチャンネル追加ボタンを読み込む）
  pagination().then(loadAddChannelButton);
};
