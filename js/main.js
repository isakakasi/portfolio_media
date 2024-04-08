$("#icon").click(function () {
  $(this).toggleClass("icon-active"); //ボタン自身に activeクラスを付与し
  $(".l-header__fade").toggleClass("fade-active");
  $(".l-header__nav").toggleClass("nav-active");
  //   $(".c-hamburger__nav").toggleClass("c-hamburger__listOpen");
});
$(".hamburger-listItem").click(function () {
  $("#icon").toggleClass("active"); //ボタンの activeクラスを除去し
  //   $(".c-hamburger__listItem").toggleClass("c-hamburger__listOpen");
});

let targets = document.querySelectorAll(".c-feature-card__img"); //アニメーションさせたい要素
window.addEventListener("scroll", function () {
  let scroll = window.scrollY; //スクロール量を取得
  let windowHeight = window.innerHeight; //画面の高さを取得
  for (let target of targets) {
    //ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
    let targetPos = target.getBoundingClientRect().top + scroll; //ターゲット要素の位置を取得
    if (scroll > targetPos - windowHeight) {
      //スクロール量 > ターゲット要素の位置
      target.classList.add("fadeIn"); //クラスを加える
    }
  }
});
