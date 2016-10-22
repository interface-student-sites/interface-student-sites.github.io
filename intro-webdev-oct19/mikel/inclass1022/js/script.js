$(document).ready(function () {
  $('img').click(function () {
    $(this).hide();
  });
  $('header').click(function () {
    $(this).css("background-color", "red");
  });
});

/*
$(document).ready(function () {
  $('button').click(function () {
    $('img').hide();
  });
});
*/
