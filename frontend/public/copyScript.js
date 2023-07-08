"use strict"
// for mini cart 


let cart = $("#cart");
let openCart = $("#open-cart");
let closeCart = $("#close-cart");
cart.on("click", function () {
    openCart.css("display", "block");
});
closeCart.on("click", function () {
    openCart.css("display", "none");
});
// alert message close 
$('#alert-close').on('click', () => {
    $('#alert-message').css('display', 'none');
});
// onscroll header hide start 
$(window).on('scroll', function () {
    var subheader = $('#on-scroll-hide');
    var header = $('header');
    if ($(window).scrollTop() == 0) {
        subheader.removeClass('md:hidden');
        header.removeClass('shadow-xll');
    } else {
        subheader.addClass('md:hidden');
        header.addClass('shadow-xll');
    }
});

// onscroll header hide end 
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        $("#sticky-footer").css("bottom", "0");
    } else {
        $("#sticky-footer").css("bottom", "-120px");
    }
    prevScrollpos = currentScrollPos;
}
// sticky footer JS functionality end 

// this is for lighthouse issue -- touch screen 
//document.addEventListener("DOMContentLoaded", function () {
//    var lazyloadImages;
//
//    if ("IntersectionObserver" in window) {
//        lazyloadImages = document.querySelectorAll(".lazy");
//        var imageObserver = new IntersectionObserver(function (entries, observer) {
//            entries.forEach(function (entry) {
//                if (entry.isIntersecting) {
//                    var image = entry.target;
//                    image.classList.remove("lazy");
//                    imageObserver.unobserve(image);
//                }
//            });
//        });
//
//        lazyloadImages.forEach(function (image) {
//            imageObserver.observe(image);
//        });
//    } else {
//        var lazyloadThrottleTimeout;
//        lazyloadImages = document.querySelectorAll(".lazy");
//
//        function lazyload() {
//            if (lazyloadThrottleTimeout) {
//                clearTimeout(lazyloadThrottleTimeout);
//            }
//
//            lazyloadThrottleTimeout = setTimeout(function () {
//                var scrollTop = window.pageYOffset;
//                lazyloadImages.forEach(function (img) {
//                    if (img.offsetTop < (window.innerHeight + scrollTop)) {
//                        img.src = img.dataset.src;
//                        img.classList.remove('lazy');
//                    }
//                });
//                if (lazyloadImages.length == 0) {
//                    document.removeEventListener("scroll", lazyload);
//                    window.removeEventListener("resize", lazyload);
//                    window.removeEventListener("orientationChange", lazyload);
//                }
//            }, 20);
//        }
//
//        document.addEventListener("scroll", lazyload);
//        window.addEventListener("resize", lazyload);
//        window.addEventListener("orientationChange", lazyload);
//    }
//})

// slick carousel modules start from here 
$(".dropdown").hover(
        function () {
            $(".dropdown-content").slideDown("slow");
        },
        function () {
            $(".dropdown-content").slideUp("slow");
        }
);
// murquee like slider start 
$(document).ready(function () {
    $('.navigation').hover(function () {
        $(this).find('.ullp').stop().fadeIn(300);
    }, function () {
        $(this).find('.ullp').stop().fadeOut(300);
    });

    $('#clear-icon').click(function () {
        $('#search-input').val('');
        var search_list = $('#search-input').next().next('ul.search-bar-listing');
        search_list.html("");
        search_list.css({'display': 'none'});
        return false;
    });
    $('.slick.marquee').slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false
    });

    $('.better-way-living').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3.2,
        infinite: false,
        centerMode: false,
        centerPadding: '0px',
        prevArrow: '<span class="prev-arrow"><i class="icn-arrow"></i></span>',
        nextArrow: '<span class="next-arrow"><i class="icn-arrow"></i></span>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    // centerMode: false,
                    // centerPadding: '40px',
                    slidesToShow: 2,
                    arrows: false,
                    infinite: false,
                    centerMode: false
                }
            },
            {
                breakpoint: 525,
                settings: {
                    // centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    arrows: false,
                    infinite: true,
                    centerMode: true
                }
            },
        ]
    });

    $('.looks-in-reality-slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        infinite: false,
        prevArrow: '<span class="prev-arrow"><i class="icn-left-arrow-red"></i></span>',
        nextArrow: '<span class="next-arrow"><i class="icn-right-arrow-red"></i></span>',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.5,
                    dots: false,
                    arrows: false,
                }
            }
        ]
    });


    $('.home-appliances').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        infinite: false,
        centerMode: false,
        centerPadding: '0px',
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    arrows: false,
                    infinite: false,
                    centerMode: false
                }
            },
            {
                breakpoint: 525,
                settings: {
                    dots: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    arrows: false,
                    infinite: true,
                    centerMode: true
                }
            }
        ]
    });

    $('.recently-viewed-products').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        infinite: true,
        centerMode: false,
        centerPadding: '0px',
        prevArrow: '<span class="absolute top-[-54px] w-10 h-10 cursor-pointer rounded-full bg-opal-alpha right-[52px] flex bg-link-icon transform rotate-180"></span>',
        nextArrow: '<span class="absolute top-[-54px] w-10 h-10 cursor-pointer rounded-full bg-opal-alpha right-0 flex bg-link-icon"></span>',
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    infinite: false,
                    centerMode: false
                }
            },
            {
                breakpoint: 1150,
                settings: {
                    centerPadding: false,
                    slidesToShow: 3,
                    arrows: true,
                    infinite: true,
                    centerMode: false
                }
            },
        ]
    });

    $('.home-furniture-carousel').slick({
        dots: false,
        arrows: false,
        slidesToShow: 5.3,
        infinite: false,
        centerMode: false,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '0',
                    slidesToShow: 3,
                    arrows: false,
                    infinite: false,
                    centerMode: false
                }
            },
        ]
    });

    $('.office-furniture-carousel').slick({
        dots: false,
        arrows: false,
        slidesToShow: 5.3,
        infinite: false,
        centerMode: false,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '0',
                    slidesToShow: 3,
                    arrows: false,
                    infinite: false,
                    centerMode: false
                }
            },
        ]
    });

    $('.appliances-carousel').slick({
        dots: false,
        arrows: false,
        slidesToShow: 5.3,
        infinite: false,
        centerMode: false,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '0',
                    slidesToShow: 3,
                    arrows: false,
                    infinite: false,
                    centerMode: false
                }
            },
        ]
    });

    $('.combos-carousel').slick({
        dots: false,
        arrows: false,
        slidesToShow: 5.3,
        infinite: false,
        centerMode: false,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '0',
                    slidesToShow: 3,
                    arrows: false,
                    infinite: false,
                    centerMode: false
                }
            },
        ]
    });

    $('.sticky-footer-slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        infinite: true,
        centerMode: false,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 4.5,
                    arrows: false,
                    infinite: false,
                    centerMode: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 5,
                    arrows: false,
                    infinite: false,
                    centerMode: false
                }
            },
        ]
    });

    $('.filter-slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3.3,
        infinite: false,
        centerMode: false,
        centerPadding: '20px',
        prevArrow: false,
        nextArrow: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    slidesToShow: 4,
                    arrows: false,
                    infinite: false,
                    centerMode: false
                }
            },
            {
                breakpoint: 525,
                settings: {
                    dots: false,
                    centerPadding: '0px',
                    slidesToShow: 4,
                    arrows: false,
                    infinite: false,
                    centerMode: false
                }
            },
        ]
    });

    /*--- Accordion ---*/
    $('.accordion-tab.current .accordion-content').slideDown();
    $('.accordion-tab.current').addClass('active');
    $(".accordion-title").click(function () {
        $(".accordion-content").not($(this).siblings()).slideUp();
        $(".accordion-tab").not($(this).parent()).removeClass('active');
        $(document.body).trigger("sticky_kit:recalc");
        if ($('.accordion-tab').hasClass("active")) {
            $(this).siblings(".accordion-content").slideUp();
        } else {
            $(this).siblings(".accordion-content").slideDown();
        }
        $(this).parent('.accordion-tab').toggleClass('active');
    });

    /*---tabbing ---*/
    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });


// hamberger nav bar start 
    $(".menu-icon").on('click', function () {
        $('.burger-navbar').addClass('active');
        $('.overly-city-selection').addClass('active');
        $(this).addClass('active');
        $('body').addClass('overflow-hidden');
    });
    $("header .close").on('click', function () {
        $('.burger-navbar').removeClass('active');
        $('.overly-city-selection').removeClass('active');
        $(this).removeClass('active');
        $('body').removeClass('overflow-hidden');
    });
// hamberger nav bar end 

// city selection sidebar start 
    $(".choose-your-city").on('click', function () {
        $('.city-selection').addClass('active');
        $('.overly-city-selection').addClass('active');
        $(this).addClass('active');
        $('body').addClass('overflow-hidden');
    });
    $("header .close").on('click', function () {
        $('.city-selection').removeClass('active');
        $('.overly-city-selection').removeClass('active');
        $(this).removeClass('active');
        $('body').removeClass('overflow-hidden');
    });
// city selection sidebar end 

// footer expand and collape
    $('#show-more-content').hide();

    $('#show-more').click(function () {
        $('#show-more-content').show(300);
        $('#show-less').show();
        $('#show-more').hide();
    });

    $('#show-less').click(function () {
        $('#show-more-content').hide(150);
        $('#show-more').show();
        $(this).hide();
    });
    // footer expand and collape end
    // ===== Scroll to Top ==== 
    $('#totop').hide();
    $('#totop').on("click", function () {      // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0                       // Scroll to top of body
        }, 500);
        return false;
    });

    // footer filter for category page 
    $(".select-m-filter").on('click', function () {
        $('.mobile-bottom-filter').addClass('active');
        $('.overly-city-selection').addClass('active');
        $(this).addClass('active');
        $('body').addClass('overflow-hidden');
    });
    $("header .close").on('click', function () {
        $('.mobile-bottom-filter').removeClass('active');
        $('.overly-city-selection').removeClass('active');
        $(this).removeClass('active');
        $('body').removeClass('overflow-hidden');
    });
    // footer filter for category page end
});

$(window).on("scroll", function () {
    if ($(this).scrollTop() >= 500) {        // If page is scrolled more than 50px
        $('#totop').fadeIn(200);    // Fade in the arrow
        $('#totop').addClass('top-visible');
    } else {
        $('#totop').fadeOut(200);   // Else fade out the arrow
        $('#totop').removeClass('top-visible');
    }
});

function destroyCarousel() {
    if ($('.home-appliances').hasClass('slick-initialized')) {
        $('.home-appliances').slick('unslick');
    }
}

function applySlider() {
    $('.home-appliances').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        infinite: false,
        centerMode: false,
        centerPadding: '0px',
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    arrows: false,
                    infinite: false,
                    centerMode: false
                }
            },
            {
                breakpoint: 525,
                settings: {
                    dots: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    arrows: false,
                    infinite: true,
                    centerMode: true
                }
            }
        ]
    });
}

var hiderTimeObj;
function toast(html, css, timeout)
{
    if (hiderTimeObj)
    {
        clearTimeout(hiderTimeObj);
    }
    $('#toastText').html(html);
    $('#toast').removeClass("bg-success");
    $('#toast').removeClass("bg-danger");
    $('#toast').addClass(css);
    $('#toast').addClass("active");
    if (timeout != '0')
    {
        hiderTimeObj = setTimeout(function () {
            hideToast()
        }, timeout);
    }
}

function hideToast()
{
    $('#toast').removeClass("active");
}

function addtowhishlist(product_id)
{
    var user_id = $('#user_id').val();
    if (user_id != '')
    {
        $.ajax({
            method: 'POST',
            url: baseURL + 'site/product/add_to_whislist',
            data: {"user_id": $('#user_id').val(), "product_id": product_id},
            success: function (response) {
                if (response.status == 200) {
                    if (p_ev) {
                        fbq('track', 'AddToWishlist');
                    }
                    toast('Added to Wishlist', 'bg-success', 4000);
                    $('#wishlisted_' + product_id).addClass('fav-filled');
                } else {
                    toast('Item removed from Wishlist', 'bg-danger', 4000);
                    $('#wishlisted_' + product_id).removeClass('fav-filled');
                }
                var wishCount = '<span class="material-symbols-outlined inline-block align-middle hover:text-pearl-alpha cursor-pointer">favorite</span><span id="whishlist_count_header" class="md:w-5 md:h-5 w-3.5 h-3.5 rounded-full bg-pearl-alpha absolute md:-top-1.5 -top-1 left-4 text-white text-[8px] md:text-xs font-normal text-center leading-4 md:leading-5">' + response.data + '</span>'
                $('#user_wish_list').html(wishCount);
                if (response.data == 0 || response.data == '0') {
                    $('#user_wish_list').html('<span class="material-symbols-outlined inline-block align-middle hover:text-pearl-alpha cursor-pointer">favorite</span>');
                }
            }
        });
    } else {
        window.location.href = baseURL + "user_sign_up";
    }
}

function getGoogleReview()
{
    var gmbPaginationValue = $('#gmbPaginationValue').val();
    if (gmbPaginationValue == '')
    {
        gmbPaginationValue = 0;
    }
    $.ajax({
        method: 'POST',
        url: baseURL + 'ajxapi/getOffsetGoogleReview',
        dataType: 'json',
        data: {"page_no": gmbPaginationValue},
        success: function (response) {
            var reviewHTML = '';
            if (response.status == 200 && response.message.length > 0) {
                $.each(response.message, function (key, val) {
                    reviewHTML = '';
                    $.each(val, function (i, item) {
                        var d1 = new Date();
                        var d2 = new Date(item.created_on);
                        var duration = time_elapsed_string(d2);
                        var reviewComment = '';
                        if (item.comment != "NA") {
                            var reviewComment = `<p class="text-xs leading-4 font-normal text-ruby-beta mb-4">${item.comment}</p>`;
                        }
                        reviewHTML += `<div class="border border-ruby-gamma rounded-lg p-4 text-center mb-5">
                                            <div class="mb-2">
                                                <span class="rounded-full bg-no-repeat bg-contain inline-block w-10 h-10 mb-1" style="background-image: url(https://d3juy0zp6vqec8.cloudfront.net/images/google_review/${item.user_image});"></span>
                                                <h4 class="text-lg md:text-base leading-6 font-semibold text-ruby-alpha">${item.user_name}</h4>
                                            </div>
                                            <div>
                                                <span class="bg-no-repeat bg-contain inline-block h-[22px] w-[100px] mb-2" style="background-image: url(https://d3juy0zp6vqec8.cloudfront.net/images/icons/5-rating.svg);"></span>`;
                        reviewHTML += reviewComment;
                        reviewHTML += `<div class="flex justify-center items-center">
                                                <span class="bg-no-repeat bg-contain w-4 h-4 mr-4.5" style="background-image: url(https://d3juy0zp6vqec8.cloudfront.net/images/google-icon.webp)"></span>
                                                 <p class="text-xs leading-4 font-normal text-ruby-beta">${duration}</p>
                                            </div>
                                        </div>
                                    </div>`;
                    });
                    $("#box-column-" + key).append(reviewHTML);
                });
                $("#gmbPaginationValue").val(response.page_no);
            }
        }
    });
}

function time_elapsed_string(datetime, full = false) {
    var now = new Date();
    var ago = new Date(datetime);
    var diff = Math.floor((now - ago) / 1000);

    var intervals = {
        y: 'year',
        m: 'month',
        w: 'week',
        d: 'day',
        h: 'hour',
        i: 'minute',
        s: 'second'
    };

    var result = [];

    if (diff >= 31536000) {
        var years = Math.floor(diff / 31536000);
        diff -= years * 31536000;
        result.push(years + ' year' + (years > 1 ? 's' : ''));
    }
    if (diff >= 2592000) {
        var months = Math.floor(diff / 2592000);
        diff -= months * 2592000;
        result.push(months + ' month' + (months > 1 ? 's' : ''));
    }
    if (diff >= 604800) {
        var weeks = Math.floor(diff / 604800);
        diff -= weeks * 604800;
        result.push(weeks + ' week' + (weeks > 1 ? 's' : ''));
    }
    if (diff >= 86400) {
        var days = Math.floor(diff / 86400);
        diff -= days * 86400;
        result.push(days + ' day' + (days > 1 ? 's' : ''));
    }
    if (diff >= 3600) {
        var hours = Math.floor(diff / 3600);
        diff -= hours * 3600;
        result.push(hours + ' hour' + (hours > 1 ? 's' : ''));
    }
    if (diff >= 60) {
        var minutes = Math.floor(diff / 60);
        diff -= minutes * 60;
        result.push(minutes + ' minute' + (minutes > 1 ? 's' : ''));
    }
    if (diff > 0) {
        result.push(diff + ' second' + (diff > 1 ? 's' : ''));
    }

    if (!full) {
        result = result.slice(0, 1);
    }

    return result.length ? result.join(', ') + ' ago' : 'just now';
}

function openChat() {
    $("#mobile-chat-container").click();
}

$(document).ready(function () {
    function AddReadMore() {
        //This limit you can set after how much characters you want to show Read More.
        var carLmt = 375;
        // Text to show when text is collapsed
        var readMoreTxt = "... Read more";
        // Text to show when text is expanded
        var readLessTxt = " Read less";


        //Traverse all selectors with this class and manupulate HTML part to show Read More
        $(".add-read-more").each(function () {
            if ($(this).find(".first-section").length)
                return;

            var allstr = $(this).text();
            if (allstr.length > carLmt) {
                var firstSet = allstr.substring(0, carLmt);
                var secdHalf = allstr.substring(carLmt, allstr.length);
                var strtoadd = firstSet + "<span class='second-section'>" + secdHalf + "</span><span class='read-more'  title='Click to Show More'>" + readMoreTxt + "</span><span class='read-less' title='Click to Show Less'>" + readLessTxt + "</span>";
                $(this).html(strtoadd);
            }
        });

        //Read More and Read Less Click Event binding
        $(document).on("click", ".read-more,.read-less", function () {
            $(this).closest(".add-read-more").toggleClass("show-less-content show-more-content");
        });
    }

    AddReadMore();
});
// bill-breakup-modal start 
$(".view-breakup-btn").on('click', function () {
    $('.bill-breakup-modal').addClass('active');
    $('.overly-city-selection').addClass('active');
    $(this).addClass('active');
    $('body').addClass('overflow-hidden');
});
$(".cityshieldclose").on('click', function () {
    $('.bill-breakup-modal').removeClass('active');
    $('.overly-city-selection').removeClass('active');
    $(this).removeClass('active');
    $('body').removeClass('overflow-hidden');
});
// bill-breakup-modal end
// city selection sidebar start 
$(".city-shield-learn-more-cta").on('click', function () {
    id = $(this).attr('id');
    $('.city-shield-learn-more').addClass('active');
    $('.overly-city-selection').addClass('active');
    $(this).addClass('active');
    $('body').addClass('overflow-hidden');
});
$(".close").on('click', function () {
    $('.city-shield-learn-more').removeClass('active');
    $('.overly-city-selection').removeClass('active');
    $(this).removeClass('active');
    $('body').removeClass('overflow-hidden');
});
// city selection sidebar end 

$(".learn-more-btn").on('click', function () {
    if ($(this).prop('checked') == false) {
        $('.city-shield-modal').addClass('active');
        $('.overly-city-selection').addClass('active');
        $(this).addClass('active');
        $('body').addClass('overflow-hidden');
    }
});
$(".close").on('click', function () {
    $('.city-shield-modal').removeClass('active');
    $('.overly-city-selection').removeClass('active');
    $(this).removeClass('active');
    $('body').removeClass('overflow-hidden');
});

$(document).ready(function () {
    $(".select-selected").click(function () {
        $(this).parent().toggleClass("open");
    });

    $(".select-item").click(function () {
        var value = $(this).text();
        $(this).parent().siblings(".select-selected").text(value);
        $(this).parent().siblings("select").val(value);
        $(this).parent().removeClass("open");
    });

    $(document).click(function (event) {
        if (!$(event.target).closest(".custom-select").length) {
            $(".custom-select").removeClass("open");
        }
    });

    // Close the dropdown when an option is selected
    $(".select-item").click(function () {
        $(this).parent().siblings(".select-selected").trigger("click");
    });
});
