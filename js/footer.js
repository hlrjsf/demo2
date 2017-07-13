var slideShowOrHide = function(id, time) {
	var $obj = $(id);
	console.log("233");
	if($obj.is(':visible')) {
		$obj.slideUp(time || 200);
	} else {
		$obj.slideDown(time || 200);
	}
}
$(function() {
	$('#countryList').perfectScrollbar(null, {myHeight:16});
	$('#expressList').perfectScrollbar(null, {myHeight:16});
	$('.title').click(function() {
		var $currentSublist = $(this).parent().find('.sub_list');
		if($(window).width() < 768) {
			if($currentSublist.is(':visible')) {
				$currentSublist.slideUp(320);
				$(this).removeClass('active');
			} else {
				$('.footer_nav').find('.sub_list').slideUp(320);
				$('.title').removeClass('active');
				$currentSublist.slideDown(320);
				$(this).addClass('active');
			}
			
		}
	});

	$('#countrySelect').click(function(e) {
		e.stopPropagation();
		slideShowOrHide('#countryListBox');
	});
	$('#languageSelect').click(function(e) {
		e.stopPropagation();
		slideShowOrHide('#languageListBox');
	});
	$('#expressSelect').click(function(e) {
		e.stopPropagation();
		slideShowOrHide('#expressListBox');
	});

	$('#closedBtn').click(function() {
		$('.qr_code').slideUp(200);
	});
	$('#wechat').click(function() {
		$('.qr_code').slideDown(200);
	});

	$('#microBlog').click(function() {
		var shareUrl = window.location.href;
		var title = '【视频：梦想的声音20161202预告 红衣Hebe惊艳全场】（分享@爱奇艺）'
		var imgUrl = 'http://pic3.qiyipic.com/image/20161125/67/43/v_111362213_m_601_m1_128_128.jpg';
		window.open('http://v.t.sina.com.cn/share/share.php?title=' + title + '&url=' + shareUrl + '&pic=' + imgUrl, '_blank');
	});
})