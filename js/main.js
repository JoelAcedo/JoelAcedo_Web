(function($) {
    $(document).ready(function() {

        $("#nav-header").find("a").click(function() {

            var $href = $(this).attr('href');
            var $anchor = $($href).offset();


            if ($(".btn-nav-header").hasClass("rotate")) {
              $anchor.top = $anchor.top - $("#nav-header").find("ul").height();
              changeNavButtonState(".btn-nav-header");
            }

            // window.scrollTo($anchor.left, $anchor.top);
            $("html, body").animate({
                scrollTop: $anchor.top
            }, 1000);


            return false;
        });

        $(".btn-nav-header").click(function() {
          changeNavButtonState(".btn-nav-header");

          return false;
        });

        $("#show-more-btn").find("button").click(function() {
          $("#show-more").toggleClass("show-more-open");
          $("#skills").toggleClass("bottom-shadow");
          $("#experience").toggleClass("top-shadow");
        });

        // $(window).scroll(function() {
        //   if ($(this).scrollTop() > $('.page-header').height()) {
        //     $('#nav-header').fadeIn(300);
        //   } else {
        //     $('#nav-header').fadeOut(300);
        //   }
        // });
    });
})(jQuery);

function changeNavButtonState(button) {
  /*if ($(".btn-nav-header").hasClass("rotate")) {
    //$("#nav-header").find("ul").slideUp(400);
  } else {
    //$("#nav-header").find("ul").slideDown(400);
  }*/
  $(".btn-nav-header").toggleClass("rotate");
  $("#nav-header").find("ul").toggleClass("nav-open");
}
