$(document).ready(function () {
  // Toggle mobile menu visibility
  $("#mobile-btn").on("click", function () {
    $("#mobile-menu").toggleClass("active");
    $("#mobile-btn").find("i").toggleClass("fa-bars fa-xmark"); // Change icon
  });

  // Smooth scroll for navigation links (both desktop and mobile)
  $('a[href^="#"]').on("click", function (event) {
    event.preventDefault(); // Prevent default anchor click behavior

    var target = $(this).attr("href"); // Get the target section ID

    // Check if the target exists
    if ($(target).length) {
      // Scroll to the target section
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        800 // Scroll duration in milliseconds
      );
    }

    // If it's a mobile menu item, close the menu after clicking
    if ($(this).closest("#mobile-menu").length) {
      $("#mobile-menu").removeClass("active");
      $("#mobile-btn").find("i").removeClass("fa-xmark").addClass("fa-bars");
    }
  });

  // Highlight active navigation item on scroll
  $(window).on("scroll", function () {
    var scrollPos = $(document).scrollTop();

    $("section").each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("id")); // Get the section being scrolled
      if (
        currLink.position().top <= scrollPos + 100 && // +100 for offset
        currLink.position().top + currLink.height() > scrollPos + 100
      ) {
        $("#nav-list li").removeClass("active");
        $("#mobile-nav-list li").removeClass("active");
        $('a[href="#' + currLink.attr("id") + '"]')
          .parent("li")
          .addClass("active");
      } else {
        $('a[href="#' + currLink.attr("id") + '"]')
          .parent("li")
          .removeClass("active");
      }
    });
  });
});