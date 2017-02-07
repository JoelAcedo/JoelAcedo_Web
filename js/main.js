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
          $("#show-more-btn").find("i").toggleClass("rotate-arrow");
          $("#show-more").toggleClass("show-more-open");
          //$("#skills").toggleClass("bottom-shadow");
          //$("#experience").toggleClass("top-shadow");
        });

        $(".filter-button").click(function() {
          $(".button-group").find(".is-selected").removeClass("is-selected");
          $(this).addClass("is-selected");
        })


        // Project detail
        $(".portafolio-item").click(function() {
          // e.preventDefault();

          if ($("#project-detail-slides").find(".flex-control-nav").length) {
            $("#project-detail-slides").flexslider('destroy');
          }

          var itemClicked = $(this)
          var projectTitle = itemClicked.find(".project-item-title").text();
          var projectSubtitle = itemClicked.find(".project-item-subtitle").text();

          var slidesHtml = '<ul class="slides">';
          var projectDescription = itemClicked.find(".project-item-description");

          var projectDescriptionText = projectDescription.html();
          var slides = projectDescription.data('images').split(',');

          for (var i = 0; i < slides.length; ++i) {
            slidesHtml = slidesHtml + '<li><img src=' + slides[i] + ' alt=""></li>';
          }

          slidesHtml = slidesHtml + '</ul>';

          if (projectDescription.attr("data-github")) {
            var githubLink = projectDescription.data('github');
            $(".view-on-github").find("a").attr("href", githubLink);
            $(".view-on-github").removeClass("visibility-hidden");
          } else {
            $(".view-on-github").find("a").attr("href", "");
            $(".view-on-github").addClass("visibility-hidden");
          }


          $("#project-title-info").text(projectTitle);
          $('#project-subtitle-info').text(projectSubtitle);
          $("#project-detail-slides").html(slidesHtml);
          $("#project-detail-description").html(projectDescriptionText)

          if (! $("#project-detail-slides").find(".flex-control-nav").length) {
            $("#project-detail-slides").flexslider(
              // {
              // after: function(slider) {
              //   currHeight = $('.flexslider').find('.slides > li').eq(slider.currentSlide).outerHeight(true);
              //   $('.flexslider').height(currHeight);
              // }
              // }
            );
          }

          // $('.bxslider').bxSlider();

          $(".project-detail").fadeIn(800);
          var $anchor = $("#portafolio").offset();
          $("html, body").animate({
              scrollTop: $anchor.top
          }, 400);
        })

        $(".close-project-detail").click(function() {
          $(".project-detail").fadeOut(800, function() {
            $("#project-detail-slides").flexslider('destroy');
          });

          var $anchor = $("#portafolio").offset();
          $("html, body").animate({
              scrollTop: $anchor.top
          }, 400);
        })


        // Contact me button
        $("#contact-me-btn").click(function() {
          var $anchor = $("#contact").offset();
          $("html, body").animate({
              scrollTop: $anchor.top
          }, 1000);
        });

        //Slider






        // $(window).scroll(function() {
        //   if ($(this).scrollTop() > $('.page-header').height()) {
        //     $('#nav-header').fadeIn(300);
        //   } else {
        //     $('#nav-header').fadeOut(300);
        //   }
        // });


        // var $grid = $(".grid").isotope({
        //   itemSelector: '.portafolio-item',
        //   layoutMode: 'masonry'
        // })
        //
        // $(".button-group").on( "click", "button", function () {
        //   var filterValue = $(this).attr("data-filter");
        //   $grid.isotope({ filter: filterValue });
        // })
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
