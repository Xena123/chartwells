//------------------------------------------------------------------|
// Site Setup. Call functions & initialize plugins                  |
// inside of window.onload function                                 |
//------------------------------------------------------------------|
window.onload = function() {

  // Strict Mode On
  "use strict";

  //------------------------------------------------------------------|
  // Cut the Mustard Check                                            |
  // Check if browser supports modern js. Don't load wrapped JS if    |
  // it doesn't pass this check.                                      |
  // Ensure base non-js functionality when JS doesn't load.           |
  //------------------------------------------------------------------|
  var supports = !!document.querySelector && !!window.addEventListener;
  if ( !supports ) {
    return;
  }
  // Add class to body if js supported. Use this for styling elements requiring JS
  document.body.className += ' has-modern-js';

    // });
  $(document).ready( function () {

      var config1 = {
        "profile": {"screenName": 'ChartwellsInd'},
        "domId": 'twitter',
        "maxTweets": 4,
        "enableLinks": true,
        "showImages": true,
        "customCallback": handleTweets
      };
    

    
      function handleTweets(tweets) {
        var x = tweets.length;
        var n = 0;
        var element = document.getElementById('twitter');
        var html = '<ul>';
        while(n < x) {
          html += '<li>' + tweets[n] + '</li>';
          n++;
        }

        html += '</ul>';
        element.innerHTML = html;

        myStyles();
        

      }
    

      function myStyles() {

        $('#twitter li').each(function(i) {
          var imgSrc = $(this).find(".media img").attr("src");
          var img = $(this).find('.media img');
          var tweetText = $(this).find('.tweet').text();

          
          if (img.length > 0)  {
            $(this).replaceWith('<li class="grid-item grid-quarter-responsive"><div class="grid-item__inner block--partial block--tweet"><a href="https://twitter.com/ChartwellsInd" class="btn--overlay"></a><div class="block__background block--img" style="background-image: url('+imgSrc+')"></div><div class="block__content-partial"><a href="https://twitter.com/ChartwellsInd"><p class="tweet">'+tweetText+'</p></a></div></div></li>');
          } else {
            $(this).replaceWith('<li class="grid-item grid-quarter-responsive"><div class="grid-item__inner block--partial block--tweet"><a href="https://twitter.com/ChartwellsInd" class="btn--overlay"></a><div class="block__background block--img" style="background-image: url('+"/assets/img/logos/twitter_default.jpg"+')"></div><div class="block__content-partial"><a href="https://twitter.com/ChartwellsInd"><p class="tweet">'+tweetText+'</p></a></div></div></li>');
          }

          


        });

      }
      if ( document.getElementById( 'twitter' ) ) {
        twitterFetcher.fetch(config1);
      }
    
  // Hamburger menu for mobile view
    $( '#js-brg' ).click(function(event){
      event.preventDefault();
      if ($('body').hasClass('is-menu-expanded')) {
        $('body').removeClass('is-menu-expanded');
      } else {
        $('body').addClass('is-menu-expanded');
        $('body').removeClass('is-login-expanded');
      }
    });
    
    // Scrolling classes for navigation
    var body = $("body");
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 50) {
        body.addClass('is-scrolled');
      } else {
        body.removeClass('is-scrolled');
      }
    });
   
  });

  
};




