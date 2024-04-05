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
