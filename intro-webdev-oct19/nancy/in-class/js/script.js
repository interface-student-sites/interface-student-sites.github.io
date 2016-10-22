$(document).ready(function () {
  $('img').click(function() { 
    $(this).hide();
  }); 

  $('header').click(function(){
    $(this).css("background-color", "red"); 
  });
  
});
