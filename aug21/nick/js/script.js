$(document).ready(function(){
  $('button').click(function(){
    $('img').toggle();
  });
  $('h1').fadeIn(1000);
  $('p').fadeIn(2000);
  
  $('header').click(function(){
    $(this).css("background-color", "green");
  });
  
  $('#fancy-text').click(function(){
    $(this).css({"font-style":"italic", "color":"purple", "font-size":"30px"});
    
  });
  
});
