$(window).on('resize', function () {
});

$(document).ready(function () {

    $(window).trigger('resize');

    $('#main-nav').responsiveNav();
	
		$('#sticky-util ul li.patient-login a').html('<span class="icon"><i class="fas fa-lock"></i></span> <span class="text-wrap">Patient<br>Login</span>');

    //$(".home header h1:contains('Welcome to')").html(function (_, html) {
        //return html.replace(/(Welcome to)/g, '<span>Welcome to</span>');
   // });
	
	$('.home header h1').html('<span>Insoft &amp; Hurst</span> Orthodontics');
	
	// HP Video appender
		var mainVideo = $('#bgvid');
		if ($(window).width() < 768) {
			mainVideo.append("<source type='video/mp4' src='assets/video/welcome-small.mp4' />");
		} else {
			mainVideo.append("<source type='video/mp4' src='assets/video/welcome.mp4' />");
		}
	
    if (Modernizr.touch) {
        $('#callouts .callout').click(function () {
            $(this).toggleClass('callout-open');
        });
    }

    // Tap to Text
    (function() {
        var VISIBLE_CLASS = 'is-showing-options',
        fab_btn = document.getElementById('fab_btn'),
        fab_ctn = document.getElementById('fab_ctn'),
        showOpts = function(e) {
            var processClick = function(evt) {
                if (e !== evt) {
                    fab_ctn.classList.remove(VISIBLE_CLASS);
                    fab_ctn.IS_SHOWING = false;
                    document.removeEventListener('click', processClick);
                }
            };
            if (!fab_ctn.IS_SHOWING) {
                fab_ctn.IS_SHOWING = true;
                fab_ctn.classList.add(VISIBLE_CLASS);
                document.addEventListener('click', processClick);
            }
        };
        fab_btn.addEventListener('click', showOpts);
    }.call(this));

    // Add captions for before and after slides based on alt text
    //$('.before-and-after.slideshow div img:first-child').each(function() {
    // $(this).parent().append('<p class="caption">' + $(this).attr('alt') + '</p>');
    // });

    // Add captions for office tour slides based on alt text
    //$('.office-tour.slideshow div img:first-child').each(function() {
    // $(this).parent().append('<p class="caption">' + $(this).attr('alt') + '</p>');
    // });

//animate callouts
    $('.shift').hover(function () { //, #sidebar a
        $(this).animate({bottom: '3px'}, {queue: false, duration: 100});
    }, function () {
        $(this).animate({bottom: '0'}, {queue: false, duration: 400});
    });

    $('.linkHover').hover(function () {
        $(this).animate({opacity: '.65'}, 400);
    }, function () {
        $(this).animate({opacity: '1'}, 400);
    });

//Back to top hide and animate
    if ($('#bd').height() > $(window).height()) {
        $('#back-to-top').removeClass('hide');
        $('.back-to-top').removeClass('hide');
    }
    /* $('.back-to-top').removeClass('hide'); */
    $('#back-to-top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 'slow');
        return false;
    });
    $('a.back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 'slow');
        return false;
    });

    /* obfuscate email */
    var $emailLinks = $('a.email');

    if ($emailLinks.length < 1) {
    } // skip this function if no objects found
    // Insert empty <a> tag with the following attributes:
    // * class="email"
    // * rel="example|domain.com" where pipe char '|' replaces '@'
    // * title="Email Us", this is the text shown after the email link is created by js
    $emailLinks.addClass('addicon').emailProt();

    // Open external links in new windows
    var domainName = window.location.hostname;
    $('a[href^="http://"], a[href^="https://"]')
        .not('a[href$=".doc"], a[href$=".pdf"], a[href*="' + domainName + '"]')
        .addClass('external').attr('target', '_blank');


}); // end doc ready
