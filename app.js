var main = function() {
  $('.article').click(function() {
    $('.article').removeClass('current');
    $('.description').hide();

    $(this).addClass('current');
    $(this).children('.description').show();
  });

  $(document).keypress(function(event) {
    if(event.which === 108) {
      $('.description').hide();

      $('.current').children('.description').show();
    }

    else if(event.which === 104) {
      $('.description').hide();
    }

    else if(event.which === 106) {
      var currentArticle = $('.current');
      var nextArticle = currentArticle.next();

      if (nextArticle.hasClass('article')) {
        currentArticle.removeClass('current');
        nextArticle.addClass('current');
      }
    }

    else if(event.which === 107) {
      var currentArticle = $('.current');
      var nextArticle = currentArticle.prev();

      if (nextArticle.hasClass('article')) {
        currentArticle.removeClass('current');
        nextArticle.addClass('current');
      }
    }
  });
}

$(document).ready(main);
