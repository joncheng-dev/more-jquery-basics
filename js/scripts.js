$(document).ready(function () {
  $(".vocab").click(function () {
    $(this).hide();
    $(this).siblings(".define").show();
  });

  $(".define").click(function () {
    $(this).hide();
    $(this).siblings(".vocab").show();
  });
});
