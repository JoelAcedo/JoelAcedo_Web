(function($) {
  $(document).ready(function() {

    $("#nav-header").find("a").click(function() {
      var $href = $(this).attr('href');
      var $anchor = $("#" + $href).offset();

      // window.scrollTo($anchor.left, $anchor.top);
      $("html, body").animate({
        scrollTop: $anchor.top
      }, 1000);

      return false;
    });

    // $(window).scroll(function() {
    //   if ($(this).scrollTop() > $('.page-header').height()) {
    //     $('#nav-header').fadeIn(300);
    //   } else {
    //     $('#nav-header').fadeOut(300);
    //   }
    // });
  });
}) (jQuery);
