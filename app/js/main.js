$(function(){

    /*  dropdown menu hover*/

     $('ul.nav__list > li').hover(function() {
            $(this).find('.dropdownList').stop(true, true).delay(200).fadeIn();
        }, function() {
            $(this).find('.dropdownList').stop(true, true).delay(200).fadeOut();
    });

    /*----- overlay showing -------*/

     if ($('.service__overlay').length != 0) {
        var overlay = $('.service__overlay');
        var tile = $('.service');
        var title = $('.service__title');
        tile.hover(function(){

            $(this).find(overlay).stop().fadeIn('400').css({'display': 'flex', 'flex-direction': 'column'});
            $(this).find(title).stop().fadeOut('400');
        }, function(){

            $(this).find(title).stop().fadeIn('400');
            $(this).find(overlay).stop().fadeOut('400');
        });
    }

    /*---- mobile menu init ----*/

    /*$("#mobile-menu").mmenu({
               "slidingSubmenus": false,
               "extensions": [
                  "pagedim-black"
               ],
               "offCanvas": {
                  "position": "left"
               },

              "navbar": {
                  "title": ""
              }
          }); */
});
