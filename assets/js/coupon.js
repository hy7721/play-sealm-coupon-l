$(document).ready(function() {
  // 모바일 100vh 하단 가려지는 현상 해결
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  // document.querySelector('.wrap_result', '.wrap_receipt', '.wrap_error').style.height = window.innerHeight + "px";
});

// layer-popup
function layerPopupOpen($t) {
  $('.wrap_popup' + '.' + $t)
    .stop(true, true)
    .fadeIn(300);
}
function layerPopupClose() {
  $('.wrap_popup').each(function () {
    if ($(this).css('display') != 'none') $(this).stop(true, true).fadeOut(300);
  });
}