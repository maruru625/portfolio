$(function(){
  $('.scroll-btn').click(function(){
    let id = $(this).attr('href');
    let position = $(id).offset().top;
    position -= 95;
    $('html, body').animate({
      'scrollTop':position
    },500);
    $('#phone-nav').removeClass('active');
    $('#phone-nav').slideUp();
  });
  $('#nav-btn').click(function(){
    if($('#phone-nav').hasClass('active')){
      $('#phone-nav').removeClass('active');
      $('#phone-nav').slideUp();
    }else{
      $('#phone-nav').addClass('active');
      $('#phone-nav').slideDown();

    };
  });
  $('.q').click(function(){
    let $answer = $(this).find('.answer');
    if($answer.hasClass('open')){
      $answer.slideUp();
      $answer.removeClass('open');
    }else{
      $answer.slideDown();
      $answer.addClass('open');
    };
  });

});
