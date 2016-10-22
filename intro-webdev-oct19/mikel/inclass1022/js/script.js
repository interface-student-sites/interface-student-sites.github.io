$(document).ready(function () {
  $('img').click(function () {
    $(this).hide();
  });
  $(header).click(function () {
    $('header').css("background-color", "red");
  });
});

/*
$(document).ready(function () {
  $('button').click(function () {
    $('img').hide();
  });
});
*/
