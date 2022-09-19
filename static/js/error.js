const errorPage = document.querySelector(".error");

// マウスを動かすと目を動かす
const mouseMove = (e) => {
  const eyes = document.querySelectorAll(".eye");
  eyes.forEach((eye) => {
    const x = eye.offsetLeft + eye.offsetWidth / 2;
    const y = eye.offsetTop + eye.offsetHeight / 2;
    const rad = Math.atan2(e.pageX - x, e.pageY - y);
    const rot = rad * (180 / Math.PI) * -1 + 180;
    eye.csswebkitTransform = "rotate(" + rot + "deg)";
    eye.mozTransform = "rotate(" + rot + "deg)";
    eye.msTransform = "rotate(" + rot + "deg)";
    eye.style.transform = "rotate(" + rot + "deg)";
  });
};

errorPage.addEventListener("mousemove", (e) => mouseMove(e));
