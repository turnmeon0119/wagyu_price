// js/main.js
$(function () {
  $('.to-top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 500); // 500msかけてトップへ
  });
});
