//carousel-1
$(document).ready(function () {
  $(".arriwals-carousel").owlCarousel({
    margin: 30,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });
  $(".my-next-button").click(function () {
    $(".arriwals-carousel").trigger("next.owl.carousel");
  });

  $(".my-previous-button").click(function () {
    $(".arriwals-carousel").trigger("prev.owl.carousel");
  });

  // product slider

  const nexticon = '<i class="fas fa-chevron-right"></i>';
  const previcon = '<i class="fas fa-chevron-left"></i>';

  $(".products-slider").owlCarousel({
    loop: false,
    items: 4,
    margin: 30,
    nav: true,
    navText: [previcon, nexticon],
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: false,
      },
      858: {
        items: 2,
        nav: false,
        loop: false,
        stagePadding: 0
      },
      1100: {
        items: 4,
        nav: false,
        loop: false,
      },
      
    },
  });
});

//carousel-2
$(function () {});

$(document).ready(function () {
  $(".gallery-2").fancybox({
    transitionIn: "elastic",
    transitionEffect: "fade",
    transitionOut: "elastic",
    speedIn: 600,
    speedOut: 200,
    overlayShow: true,
    opacity: true,
    cyclic: true,
  });

  $.fancybox.defaults.buttons = ["zoom", "slideShow", "close"];
});

//Newletter

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dotsEach: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: false,
      },
      600: {
        items: 2,
        nav: false,
        loop: false,
      },
      768: {
        items: 3,
        nav: false,
        loop: false,
      },
      1100: {
        items: 4,
        nav: false,
        loop: false,
      },
    },
  });
});

//login
function validation() {
  let email = document.getElementById("email").value;

  if (email == "") {
    document.getElementById("mail").innerHTML =
      "No account found with that email.";
    document.getElementById("email").style.borderColor = "red";
    return false;
  }
}
//contact us

function validationSecond() {

  let email = document.getElementById("email").value;
  let textarea = document.getElementById("textarea").value;

  if (email == "") {
    document.getElementById("mail").innerHTML =
      "No account found with that email.";
    document.getElementById("email").style.borderColor = "red";
  }

  if (textarea == "") {
    document.getElementById("textArea").innerHTML =
      "No account found with that email.";
    document.getElementById("textarea").style.borderColor = "red";
  }
  return false;
}

//faq start
$(document).ready(function () {
  $("#heading-1").on("click", function () {
    $(".toggle-1").toggleClass("plus");
    $(".card-1").toggle();
    if ($(".card-2").css("display", "block")) {
      $(".card-2").css("display", "none");
    }
  });

  $("#heading-2").on("click", function () {
    $(".toggle-2").toggleClass("plus");
    $(".card-2").toggle();
    if ($(".card-1").css("display", "block")) {
      $(".card-1").css("display", "none");
    }
  });

  $("#heading-3").click(function () {
    $(".toggle-3").toggleClass("plus");
    $(".card-3").toggle();
  });

  $("#heading-4").click(function () {
    $(".toggle-4").toggleClass("plus");
    $(".card-4").toggle();
  });

  $("#heading-5").click(function () {
    $(".toggle-5").toggleClass("plus");
    $(".card-5").toggle();
  });

  $("#heading-6").click(function () {
    $(".toggle-6").toggleClass("plus");
    $(".card-6").toggle();
  });

  $("#heading-7").click(function () {
    $(".toggle-7").toggleClass("plus");
    $(".card-7").toggle();
  });

  $("#heading-8").click(function () {
    $(".toggle-8").toggleClass("plus");
    $(".card-8").toggle();
  });

  $("#heading-9").click(function () {
    $(".toggle-9").toggleClass("plus");
    $(".card-9").toggle();
  });

  $("#heading-10").click(function () {
    $(".toggle-10").toggleClass("plus");
    $(".card-10").toggle();
  });

  $("#heading-11").click(function () {
    $(".toggle-11").toggleClass("plus");
    $(".card-12").toggle();
  });

  $("#heading-12").click(function () {
    $(".toggle-12").toggleClass("plus");
    $(".card-13").toggle();
  });

  $("#heading-13").click(function () {
    $(".toggle-13").toggleClass("plus");
    $(".card-14").toggle();
  });

  $("#heading-14").click(function () {
    $(".toggle-14").toggleClass("plus");
    $(".card-15").toggle();
  });

  $("#heading-15").click(function () {
    $(".toggle-15").toggleClass("plus");
    $(".card-16").toggle();
  });

  $("#heading-16").click(function () {
    $(".toggle-16").toggleClass("plus");
    $(".card-17").toggle();
  });

  $(".sidebar-button").click(function () {
    $("#page-sidebar").css({
      width: "350px",
      height: "100vh",
      "margin-top": "-200px",
      "margin-bottom": "200px",
      "z-index": "110",
    });
    $(".faqSection").css({
      "background-color": "black",
      opacity: "0.6",
      width: "100vw",
      height: "200vh",
      position: "absolute",
      "z-index": "109",
    });
  });

  $(".close-button").click(function () {
    $("#page-sidebar").css("width", "0");
    $(".faqSection").css({ display: "none" });
  });
});

// Blog

$(document).ready(function () {
  $("#widget-img-2").hide();
  $("#widget-img-4").hide();
  $(".border-grey").css({ border: "1px solid black" });
  $(".border-lightcoral").css({ border: "1px solid black" });

  $(".border-beige").click(function (event) {
    event.preventDefault();
    $("#widget-img-1").hide();
    $("#widget-img-2").show();
    $(".border-beige").css({ border: "1px solid black" });
    $(".border-grey").css("border", "");
  });

  $(".border-grey").click(function (event) {
    event.preventDefault();
    $("#widget-img-2").hide();
    $("#widget-img-1").show();
    $(".border-grey").css({ border: "1px solid black" });
    $(".border-beige").css("border", "");
  });

  $(".border-white").click(function (event) {
    event.preventDefault();
    $("#widget-img-3").hide();
    $("#widget-img-4").show();
    $(".border-white").css({ border: "1px solid black" });
    $(".border-lightcoral").css("border", "");
    $(".border-beige-second").css("border", "");
  });

  $(".border-lightcoral").click(function (event) {
    event.preventDefault();
    $("#widget-img-4").hide();
    $("#widget-img-3").show();
    $(".border-lightcoral").css({ border: "1px solid black" });
    $(".border-white").css("border", "");
    $(".border-beige-second").css("border", "");
  });
  $(".border-beige-second").click(function (event) {
    event.preventDefault();

    $(".border-beige-second").css({ border: "1px solid black" });
    $(".border-lightcoral").css("border", "");
    $(".border-white").css("border", "");
  });
});

// Product

$(document).ready(function () {
  (function ($) {
    let defaults = {
      duration: 120,
      on: "mouseover",
    };

    $.zoom = function (target, source, img, magnify) {
      ($target = $(target)),
        (position = $target.css("position")),
        ($source = $(source));

      target.style.position = /(absolute|fixed)/.test(position)
        ? position
        : "relative";
      target.style.overflow = "hidden";
      img.style.width = img.style.height = "";

      $(img)
        .addClass("zoom-img")
        .css({
          position: "absolute",
          opacity: 0,
        })
        .appendTo(target);

      return {
        init: function () {
          targetWidth = $target.outerWidth();
          targetHeight = $target.outerHeight();

          if (source === target) {
            sourceWidth = targetWidth;
            sourceHeight = targetHeight;
          } else {
            sourceWidth = $source.outerWidth();
            sourceHeight = $source.outerHeight();
          }

          xRatio = (img.width - targetWidth) / sourceWidth;
          yRatio = (img.height - targetHeight) / sourceHeight;

          offset = $source.offset();
        },
        move: function (e) {
          let left = e.pageX - offset.left,
            top = e.pageY - offset.top;

          img.style.left = left * -xRatio + "px";
          img.style.top = top * -yRatio + "px";
        },
      };
    };

    $.fn.zoom = function (options) {
      return this.each(function () {
        let settings = $.extend({}, defaults, options || {}),
          target = (settings.target && $(settings.target)[0]) || this,
          source = this,
          $source = $(source),
          img = document.createElement("img"),
          $img = $(img),
          mousemove = "mousemove.zoom",
          touched = false;

        if (!settings.url) {
          let srcElement = source.querySelector("img");
          if (srcElement) {
            settings.url = srcElement.src;
          }
        }
        img.onload = function () {
          let zoom = $.zoom(target, source, img, settings.magnify);
          function start(e) {
            zoom.init();
            zoom.move(e);
            $img
              .stop()
              .fadeTo(
                $.support.opacity ? settings.duration : 0,
                1,
                $.isFunction(settings.onZoomIn)
                  ? settings.onZoomIn.call(img)
                  : false
              );
          }
          function stop() {
            $img
              .stop()
              .fadeTo(
                settings.duration,
                0,
                $.isFunction(settings.onZoomOut)
                  ? settings.onZoomOut.call(img)
                  : false
              );
          }
          if (settings.on === "hover") {
            $source.on("mousedown.zoom", function (e) {});
          } else if (settings.on === "mouseover") {
            zoom.init();

            $source
              .on("mouseenter.zoom", start)
              .on("mouseleave.zoom", stop)
              .on(mousemove, zoom.move);
          }

          if ($.isFunction(settings.callback)) {
            settings.callback.call(img);
          }
        };

        img.setAttribute("role", "presentation");
        img.alt = "";
        img.src = settings.url;
      });
    };

    $.fn.zoom.defaults = defaults;
  })(window.jQuery);
  $("#single-wrapper-image").zoom();
  $("#single-wrapper-image-second").zoom();

  $("#single-wrapper-image-second").hide();
  $(".first-thumbnails").css({ border: "1px solid black" });

  $(".second-thumbnails").click(function (event) {
    event.preventDefault();
    $("#single-wrapper-image").hide();
    $("#single-wrapper-image-second").show();
    $(".second-thumbnails").css({ border: "1px solid black" });
    $(".first-thumbnails").css("border", "");
  });

  $(".first-thumbnails").click(function (event) {
    event.preventDefault();
    $("#single-wrapper-image-second").hide();
    $("#single-wrapper-image").show();
    $(".first-thumbnails").css({ border: "1px solid black" });
    $(".second-thumbnails").css("border", "");
  });
});

$(document).ready(function () {
  $("#qty").on("change keyup", function () {
    let qty = parseInt($(this).val()),
      priceForOne = parseInt($("#priceForOne").val());
    let totalPrice = (priceForOne * qty).toFixed(2);
    $("#total").text("$" + totalPrice);
  });

  $(".star").click(function () {
    let number = parseInt($(this).data("no"));
    let sum = 5 - number;
    for (let index = 0; index <= number; index++) {
      $(".star" + index)
        .addClass("bi-star-fill")
        .removeClass("bi-star");
    }

    for (let index = number + 1; index <= 5; index++) {
      $(".star" + index)
        .addClass("bi-star")
        .removeClass("bi-star-fill");
    }
  });

  $("#term").click(function () {
    if ($(this).is(":checked")) {
      $(".payment-button").prop("disabled", false);
      $(".payment-button").attr("title", "Buy it now");
    } else {
      $(".payment-button").prop("disabled", true);
      $(".payment-button").attr(
        "title",
        "Please first agree terms & conditions"
      );
    }
  });

  $("#product-detail-content").on("submit", function () {
    let productName = $("#prd-name").text(),
      qty = parseInt($("#qty").val()),
      term = 0;
    let productID = $(".product-wrapper").data("id"),
      priceForOne = parseInt($("#priceForOne").val());
    let totalPrice = (priceForOne * qty).toFixed(2);
    let productFullID = "pro" + productID;
    if ($("#term").is(":checked")) {
      term = 1;
    }

    if ($("#" + productFullID).length) {
      $("#" + productFullID + " span").text(
        "$" + totalPrice + "(" + qty + ") qty"
      );
    } else {
      $(".shop-list").append(
        '<li id="' +
          productFullID +
          '"><a href="#" class="dropdown-item">' +
          productName +
          ' <span class="badge bg-danger">$' +
          totalPrice +
          "(" +
          qty +
          ") qty</span></a></li>"
      );
    }
    $("#prodqty").text($(".shop-list .dropdown-item").length);
    return false;
  });
});
$(document).ready(function () {
  $("[data-fancybox]").fancybox({
    youtube: {
      controls: 0,
      showinfo: 0,
    },
    vimeo: {
      color: "f00",
    },
  });

  $(".fancybox").fancybox({
    width: 1000,
    height: 550,
    autoSize: false,
  });
});
