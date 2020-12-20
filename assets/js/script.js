$(document).ready(function () {
  // COPY MAIL-------------------------------------
  $('a[href^=mailto]').click(function () {
    return false;
  });
  let mailto = $('.mailto-link');
  let messageCopy = 'Кликните, чтобы скопировать';
  let messageSuccess = 'Email успешно скопирован';

  mailto.append('<span class="mailto-message"></span>');
  $('.mailto-message').append(messageCopy);

  $('a[href^=mailto]').click(function () {

    let href = $(this).attr('href');
    href = href.split(':');
    mail = href[1];
    copyToClipboard(mail);
    $('.mailto-message').empty()
    $('.mailto-message').append(messageSuccess);
    setTimeout(function(){
      $('.mailto-message').empty();
      $('.mailto-message').append(messageCopy);
    },1000);

  })

  function copyToClipboard(text) {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
  }

  // FIXED TOP AFTER SCROLL MAIN -----------------------------
  let mainHeight = $('#main'),
  header = $('#header');
  
  $(window).on('scroll load resize', function(){
    mainHeight = $('#main').innerHeight();
    scrollPosition = $(this).scrollTop();

    if (scrollPosition >= mainHeight){
      header.addClass('fixed-top');
      header.addClass('bg-nav');
    }else {
      header.removeClass('fixed-top');
      header.removeClass('bg-nav');
    }
  });

  // LICENSE TRANSFORM -----------------------------


});