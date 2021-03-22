
$(document).ready(function(){

  //carousel-1
  $(".owl-one").owlCarousel({
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
    $(".owl-one").trigger("next.owl.carousel");
  });

  $(".my-previous-button").click(function () {
    $(".owl-one").trigger("prev.owl.carousel");
  });


//carousel-2
  $(".owl-two").owlCarousel({
    loop: false,
    margin: 35,
    nav: false,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1500:{
          items:4,
      }
  }
  });

  $(".my-next-button").click(function () {
    $(".owl-two").trigger("prev.owl.carousel");
    $(".my-next-button").css("color", "grey");
    $(".my-previous-button").css("color", "black");
  });

  $(".my-previous-button").click(function () {
    $(".owl-two").trigger("next.owl.carousel");
    $(".my-previous-button").css("color", "grey");
    $(".my-next-button").css("color", "black");
  });


  for(let i =0 ;i < 6; i++){
    $(`#fav-${i}`).mouseover(function(){
      $(`.fav-comment-${i}`).css("visibility", "visible");
    });
    $(`#fav-${i}`).mouseout(function(){
      $(`.fav-comment-${i}`).css("visibility", "hidden");
    });

  }
  
  for(let i =0 ;i < 6; i++){
    $(`#rev-${i}`).mouseover(function(){
      $(`.rev-comment-${i}`).css("visibility", "visible");
    });
    $(`#rev-${i}`).mouseout(function(){
      $(`.rev-comment-${i}`).css("visibility", "hidden");
    });
  }

  for(let i = 0; i < 6; i++){
    $(`.owl-item-${i}`).mouseover(function(){
      $(`#rev-${i}`).css("visibility", "visible");
      $(`.stars-${i}`).css("visibility", "visible");
      $(`.card_btn-${i}`).css("visibility", "visible").stop(true, false).animate({top: '278px'}, "2");   
      if ($(window).width() < 1570) {      
          $(`.card_btn-${i}`).css("visibility", "visible").stop(true, false).animate({top: '250px'}, "2");
        }  
    });

      $(`.owl-item-${i}`).mouseout(function(){
      $(`#rev-${i}`).css("visibility", "hidden");
      $(`.stars-${i}`).css({"visibility": "hidden", "position" : "relative"});
      $(`.card_btn-${i}`).stop(true, false).animate({top: '300px'}, "2", function() {
        $(this).next().show();
        $(this).css("visibility", "hidden");
    });

    if ($(window).width() < 1570) {      
      $(`.card_btn-${i}`).stop(true, false).animate({top: '278px'}, "2", function() {
        $(this).next().show();
        $(this).css("visibility", "hidden");
    });
    }  
  });

  }

  for(let i = 1; i < 6; i++){
    $(`.owl-item-${i}`).mouseover(function(){
      $(`.product-card_img-${i}`).attr('src',function(index, attr){
      return attr.replace(`card-tea-${i+(i-1)}.jpg`,`card-tea-${i*2}.jpg`);});   
    });
    $(`.owl-item-${i}`).mouseout(function(){
      $(`.product-card_img-${i}`).attr('src',function(index, attr){
      return attr.replace(`card-tea-${i*2}.jpg`,`card-tea-${i+(i-1)}.jpg`);});
      });
  }

  $("[data-fancybox]").fancybox({
    youtube: {
      controls: 0,
      showinfo: 0,
    },
    vimeo: {
      color: "f00",
    },
  });

  $(".fancybox").fancybox({ width: 1000, height: 550, autoSize: false });


// footer carousel
  $('.owl-three').owlCarousel({
      loop:true,
      responsiveClass:true,
      dotsEach: true,
      responsive:{
          0:{
              items:1,
              nav:false,
              loop: false
          },
          600:{
              items:2,
              nav:false,
              loop: false
          },
          768:{
              items:3,
              nav:false,
              loop: false
          },
          1100:{
              items:4,
              nav:false,
              loop:false,
              margin: 30
          }
      }
  })

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




  // Product details page JS
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
  })
  (window.jQuery);
  $("#single-wrapper-image").zoom();
  $("#single-wrapper-image-second").zoom();

  $("#single-wrapper-image-second").hide();
  $(".first-thumbnails").css({ border: "1px solid black" });

  $(".second-thumbnails").click(function (event) {
    event.preventDefault();
    $("#single-wrapper-image-second").show();
    $("#single-wrapper-image").hide();
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


      // login
      function validation() {
        let email = document.getElementById("email").value;
      
        if (email == "") {
          document.getElementById("mail").innerHTML =
            "No account found with that email.";
          document.getElementById("email").style.borderColor = "red";
          return false;
        }
      }


      // FAQ

      $("#heading-1").on('click', function(){
        $(".plus-minus-toggle_1").toggleClass('plus');
        $(".mark_1").toggle();
        if($(".mark_2").css('display', 'block')){
          $(".mark_2").css('display', 'none')
        }
      });
  
      $("#heading-2").on('click', function(){
        $(".plus-minus-toggle_2").toggleClass('plus');
        $(".mark_2").toggle();
        if ($(".mark_1").css('display', 'block')){
          $(".mark_1").css('display', 'none')
        }
      });
  
      $("#heading-3").click(function(){
        $(".plus-minus-toggle_3").toggleClass('plus');
        $(".mark_3").toggle();
        // $("#answer-3").toggle();
        
      });
  
      $("#heading-4").click(function(){
        $(".plus-minus-toggle_4").toggleClass('plus');
        $(".mark_4").toggle();
        // $("#answer-4").toggle();
      });
  
      $("#heading-5").click(function(){
        $(".plus-minus-toggle_5").toggleClass('plus');
        $(".mark_5").toggle();
      });
  
      $("#heading-6").click(function(){
        $(".plus-minus-toggle_6").toggleClass('plus');
        $(".mark_6").toggle();
      });
  
      $("#heading-7").click(function(){
        $(".plus-minus-toggle_7").toggleClass('plus');
        $(".mark_7").toggle();
      });
  
      $("#heading-8").click(function(){
        $(".plus-minus-toggle_8").toggleClass('plus');
        $(".mark_8").toggle();
      });
  
      $("#heading-9").click(function(){
        $(".plus-minus-toggle_9").toggleClass('plus');
        $(".mark_9").toggle();
      });
  
      $("#heading-10").click(function(){
        $(".plus-minus-toggle_10").toggleClass('plus');
        $(".mark_10").toggle();
      });
  
      $("#heading-11").click(function(){
        $(".plus-minus-toggle_11").toggleClass('plus');
        $(".mark_11").toggle();
      });
  
      $("#heading-12").click(function(){
        $(".plus-minus-toggle_12").toggleClass('plus');
        $(".mark_12").toggle();
      });
  
      $("#heading-13").click(function(){
        $(".plus-minus-toggle_13").toggleClass('plus');
        $(".mark_13").toggle();
      });
  
      $("#heading-14").click(function(){
        $(".plus-minus-toggle_14").toggleClass('plus');
        $(".mark_14").toggle();
      });
  
      $("#heading-15").click(function(){
        $(".plus-minus-toggle_15").toggleClass('plus');
        $(".mark_15").toggle();
      });
  
      $("#heading-16").click(function(){
        $(".plus-minus-toggle_16").toggleClass('plus');
        $(".mark_16").toggle();
      });
  
      $(".openbtn").click(function(){
        $("#mySidepanel").css({"width" : "350px", "height" : "100vh", "margin-top" : "-200px", "margin-bottom" : "200px","z-index": "110"})
        $(".faqSection").css({"background-color": "black",  "opacity": "0.6", "width" : "100vw", "height" : "200vh", "position" : "absolute", "z-index": "109" })
      });
  
      $(".closebtn").click(function(){
        $("#mySidepanel").css("width" , "0");
        $(".faqSection").css({"display": "none"})
      });



      //map and contact us
      function validation() {
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
      }


      // blog

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
