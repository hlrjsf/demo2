(function (doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function () {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth || clientWidth < 768) return;
			docEl.style.fontSize = (12 + 6 * (clientWidth - 768) / 1152) + 'px';
		};
		if (!doc.addEventListener) return;
		win.addEventListener(resizeEvt, recalc, false);
		doc.addEventListener('DOMContentLoaded', recalc, false);
	})(document, window);


// 函数节流
var debounce = function(idle, action) {
    var last;
    return function() {
        var ctx = this,
            args = arguments
        clearTimeout(last)
        last = setTimeout(function() {
            action.apply(ctx, args)
        }, idle)
    }
}
// 重发验证码函数
var handle = function(selecter, fun, time) {
	--time;
	selecter.html(time + '秒后重发');
	if(time > 0) {
		setTimeout(function() {
			handle(selecter, fun, time)
		}, 1000);
	} else {
		fun();
	}
}

var disableScroll = function($bodyHtml) {
	$bodyHtml = $bodyHtml || $('body, html');
	canScroll = false;
	$bodyHtml.bind('touchmove', function(e) {
		if(!canScroll) {
			e.preventDefault();
		}
	});
	if($(window).width() > 768) {
		$bodyHtml.css({
			"overflow":"hidden",
			// 'height': '100%'
		});
	}
	
}
var ensableScroll = function($bodyHtml) {
	$bodyHtml = $bodyHtml || $('body, html');
	canScroll = true;
	if($(window).width() > 768) {
		$bodyHtml.css({
			"overflow":"auto",
			"height": 'auto'
		});
	}
}

/*-------------------------------------------------------------------------------------------------------------*/
$(function() {
	var $bodyHtml = $('body, html');
	var containerHeight = $('.left_main_nav_list').height();
	var $body = $('body');
	var $leftMainNavOutBox = $('#leftMainNavOutBox');
	var $toTop = $('#toTop');
	$window = $(window);
	var clientHeight = $(window).height();
	var clientWidth = $(window).width();
	var maintWidth = $('.header').width();
	var brandBoxHeight = $('.brand_box').height(true);

	$('.main_sub_nav_hover').css('top', $('.header').outerHeight());

	if(clientWidth <= 768) {
		$('.search_outer_box').width(maintWidth - 80);
		$leftMainNavOutBox.height(clientHeight - brandBoxHeight);
	}
	
	$('body').click(function() {
		$('#mainSearchBox').removeClass('show');
		$('#countryListBox').slideUp(100);
		$('#languageListBox').slideUp(100);
	});
	$('#showSearchBtn').click(function(e) {
		e.stopPropagation();
		$('#mainSearchBox').addClass('show');
	});

	$('#searchInput').click(function(e) {
		e.stopPropagation();
	});

	$('#searchClear').click(function(e) {
		e.stopPropagation();
		$('#searchInput').val('');
	});

	var $items = $('#leftMainNavBox').find('.arr_icon');
	var itemLength = $items.length;

	$items.click(function() {
		var $currentSublist = $(this).parent().find('.sub_list');
		var contentHeight = $('#leftMainNavBox').find('.content').height();
		var currentSublistHeight = $currentSublist.outerHeight(true);
		var scrollTop = contentHeight - containerHeight - currentSublistHeight;
		
		if($currentSublist.is(':visible')) {
			$('.left_main_nav_list').animate({scrollTop: scrollTop}, 100);
			$currentSublist.slideUp(320, function() {
				if($('#leftMainNavBox').find('.content').height() < containerHeight) {
					$('.ps-scrollbar-y-rail').hide();
				}
			});
			$(this).parent().removeClass('active');
		} else {
			$currentSublist.slideDown(320, function() {
				if($('#leftMainNavBox').find('.content').height() > containerHeight) {
					$('.ps-scrollbar-y-rail').show();
				}
			});

			$(this).parent().addClass('active');
		}
	});

	$('#leftMainNavBox').find('.sub_list').find('li').click(function() {
		$leftMainNavOutBox.removeClass('show');
		ensableScroll($bodyHtml);
	});

	$('#navList').perfectScrollbar(null, {myHeight:32});

	$('#more').click(function() {
		disableScroll($bodyHtml);

		$leftMainNavOutBox.addClass('show');
	});

	$('#leftMainNavBox').click(function(e) {
		e.stopPropagation();
	});
	$leftMainNavOutBox.click(function() {
		$(this).removeClass('show');
		ensableScroll($bodyHtml);
	});
	$('#hideNav').click(function() {
		$leftMainNavOutBox.removeClass('show');
		ensableScroll($bodyHtml);
	});
	var $mainSubNavHover = $('.main_sub_nav_hover');
	$('.nav_list').delegate('li', 'mouseenter', function() {
		
		var scrollTop = $('body, html').scrollTop() || document.body.scrollTop;
		$('.main_sub_nav_hover').css('top', $(".main_nav").position().top - scrollTop + 2);
		$(this).find('.main_sub_nav_hover').show();
		disableScroll($bodyHtml);
	});
	$('.nav_list').delegate('li', 'mouseleave', function() {
		$(this).find('.main_sub_nav_hover').hide();
		ensableScroll($bodyHtml);
	});
	$('.main_sub_nav_box').click(function(e) {
		e.stopPropagation();
	});
	$('.main_sub_nav_box').mouseleave(function() {
		$mainSubNavHover.hide();
		ensableScroll($bodyHtml);
	});
	$('.main_sub_nav_box').delegate('a', 'click', function() {
		$mainSubNavHover.hide();
		ensableScroll($bodyHtml);
	});

	$('.home_login_box').delegate('a', 'click', function() {
		$leftMainNavOutBox.removeClass('show');
		ensableScroll($bodyHtml);
	});
	$('.collection_store_box').delegate('a', 'click', function() {
		$leftMainNavOutBox.removeClass('show');
		ensableScroll($bodyHtml);
	});

    $window.scroll(debounce(320, function() {
        // 在ie下 document.body.scrollTop始终为 0
        // console.log(document.body.scrollTop);
        
        // var scrollTop = document.body.scrollTop == 0 ? document.body.scrollTop : $bodyHtml.scrollTop();
        var scrollTop = document.body.scrollTop || $bodyHtml.scrollTop();
        
        if (scrollTop == 0) {
            $toTop.hide();
        } else {
            $toTop.show();
        }
    }));

    $toTop.click(function() {
        $bodyHtml.animate({
            scrollTop: 0
        }, 320);
        $toTop.hide();
    });

    $('#lang').click(function() {
    	if($(this).html() == 'English') {
    		$(this).html('中文');
    	} else {
    		$(this).html('English');
    	}
    });

    $('#mobileLang').click(function() {
    	if($(this).html() == 'English') {
    		$(this).html('中文');
    	} else {
    		$(this).html('English');
    	}
    });
	
})