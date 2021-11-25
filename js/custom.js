;
(function($, window, document, undefined) {
    'use strict';
    var $winW = function() {
        return $(window).width();
    };
    var $winH = function() {
        return $(window).height();
    };
    var $screensize = function(element) {
        $(element).width($winW()).height($winH());
    };
    var screencheck = function(mediasize) {
        if (typeof window.matchMedia !== "undefined") {
            var screensize = window.matchMedia("(max-width:" + mediasize + "px)");
            if (screensize.matches) {
                return true;
            } else {
                return false;
            }
        } else {
            if ($winW() <= mediasize) {
                return true;
            } else {
                return false;
            }
        }
    };
    $(document).ready(function() {
        $(window).on('load', function() {
            $('.preloader').fadeOut();
            $('.animated-row').each(function() {
                var $this = $(this);
                $this.find('.animate').each(function(i) {
                    var $item = $(this);
                    var animation = $item.data('animate');
                    $item.on('inview', function(event, isInView) {
                        if (isInView) {
                            setTimeout(function() {
                                $item.addClass('animated ' + animation).removeClass('animate');
                            }, i * 50);
                        } else if (!screencheck(767)) {
                            $item.removeClass('animated ' + animation).addClass('animate');
                        }
                    });
                });
            });
			//alert('ssss');
			
        });
		
        if ($('.facts-list').length) {
            $('.facts-list').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 3,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 3,
                        margin: 30
                    }
                }
            });
        }
        if ($('.services-list').length) {
            $('.services-list').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 3,
                margin: 30,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 3,
                        margin: 30
                    }
                }
            });
        }
		
		if ($('.technologies-list').length) {
			
            $('.technologies-list').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 8,
                margin: 30,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 8,
                        margin: 0
                    },
                    768: {
                        items: 8,
                        margin: 0
                    }
                    
                }
            });
        }
        if ($('.gallery-list').length) {
            $('.gallery-list').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 3,
                autoplay: false,
                smartSpeed: 900,
                autoplayTimeout: 4000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 3,
                        margin: 30
                    }
                }
            });
        }
        if ($('.home-banner').length) {
            $('.home-banner').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 0,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    768: {
                        items: 1
                    }
                }
            });
        }
		$('.home-banner-item').height($(window).height());
		
		
		$('#nav').append(

                    '<li data-menuanchor="home" class="slide01 active"><a href="index.html#home">Home</a></li>'
                                   + '<li data-menuanchor="about-us" class="slide02"><a href="index.html#about-us">About Us</a></li>'
                                    +'<li data-menuanchor="services" class="slide03"><a href="index.html#services">Services</a></li>'
                                    +'<li data-menuanchor="expertise" class="slide04"><a href="index.html#expertise">Expertise</a></li>'
                                    +'<li data-menuanchor="technologies" class="slide05"><a href="index.html#technologies">Technologies </a></li>'
                                    +'<li data-menuanchor="case-studies" class="slide06"><a href="index.html#case-studies">Case Studies</a></li>'
                                    +'<li data-menuanchor="" class="slide07"><a href="https://www.bientechnologies.com/blog/">Blog</a></li>'
                                    +'<li data-menuanchor="contact" class="slide07"><a href="index.html#contact">Contact</a></li>'

    );
	$('#social-icons-ul').append(

                                   '<li><a href="https://www.facebook.com/bientechnologies" target="_blank" title="Facebook"><i class="fa fa-facebook" target="_blank"></i></a></li>'
									+'<li><a href="https://www.linkedin.com/company/bientechnologies" target="_blank" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>'
									+'<li><a href="https://twitter.com/BienTechnology" target="_blank" title="Linkedin"><i class="fa fa-twitter"></i></a></li>'

    );

    $('body').append(
        '<div class="footer">'
            +'<ul class="footer-link">'
            +' <li><a href="privacy-policy.html">Privacy Policy</a></li>'
            +' <li><a href="terms-conditions.html">Terms & Conditions</a></li>'
            +' <li><a href="disclaimer.html">Disclaimer</a></li>'
            +'</ul>'
            +' </div>'
    );
		
		
		
		
		
        if ($('.fullpage-default').length) {
            var myFullpage = new fullpage('.fullpage-default', {
                licenseKey: ' C7F41B00-5E824594-9A5EFB99-B556A3D5',
                anchors: ['home', 'about-us', 'services', 'expertise', 'technologies', 'case-studies', 'contact'],
                menu: '#nav',
                lazyLoad: true,
                navigation: true,
                navigationPosition: 'right',
                scrollOverflow: true,
                responsiveWidth: 768,
                responsiveHeight: 600,
                responsiveSlides: true
            });
        }
	
		
		
		
		//services-page
		
		
        $(document).on('click', '.navbar-toggle', function() {
            $('.navbar-collapse').slideToggle(300);
            return false;
        }).on('click', '.navigation-menu > li > a', function() {
            $('.navbar-collapse').slideUp(300);
        }).on('click', '.next-section', function() {
            fullpage_api.moveSectionDown();
        });
        $('.facts-row').on('inview', function(event, isInView) {
            $('.count-number').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
                setTimeout(function() {
                    $('.count-number').removeClass('count-number').addClass('counted');
                }, 1000);
            });
        });
        $('.skills-row').on('inview', function(event, isInView) {
            $(this).addClass('view');
        });
        $(document).on('click', '.menu-trigger', function() {
            $('body').toggleClass('sidemenu-open');
        }).on('click', '.side-menu .navbar-nav li a', function() {
            $('body').removeClass('sidemenu-open');
        });



        $.gdprcookie.init({
            title: "🍪 Accept cookies & privacy policy?",
            message: "There are no cookies used on this site, but if there were this message could be customized to provide more details. Click the <strong>accept</strong> button below to see the optional callback in action… <a href=#privacy>Example privacy link</a>",
            delay: 600,
            expires: 1,
            acceptBtnLabel: "Accept cookies",
        });
    
        $(document.body)
            .on("gdpr:show", function() {
                console.log("Cookie dialog is shown");
            })
            .on("gdpr:accept", function() {
                var preferences = $.gdprcookie.preference();
                console.log("Preferences saved:", preferences);
            })
            .on("gdpr:advanced", function() {
                console.log("Advanced button was pressed");
            });
    
        if ($.gdprcookie.preference("marketing") === true) {
            console.log("This should run because marketing is accepted.");
        }


    });
})(jQuery, window, document);