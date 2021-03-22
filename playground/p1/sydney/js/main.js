(function ($) {
    $(window).on("load", function () {
      $.instagramFeed({
        username: "Instagram",
        container: "#instagram-cont",
        display_profile: true,
        display_biography: true,
        display_gallery: true,
        items: 10,
        items_per_row: 5,
        margin: 0
      });
    });
  })(jQuery);
  