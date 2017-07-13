var clientWidth = 0;
function init() {
	var $firstMuMemu = $('.mu_memu').eq(0);
	$firstMuMemu.trigger('click');
}

function handleMuMeum() {
	$this = $(this);
	$questionText = $this.find('.question_text');
	if($this.hasClass('active')) {
		$this.removeClass('active');
		$questionText.slideUp();
		if(clientWidth > 768) {
			$('.hidden').slideUp();
		}
	} else {
		$('.mu_memu.active').removeClass('active').find('.question_text').slideUp();
		if(clientWidth > 768) {
			$('.hidden').slideUp();
		}
		
		$this.addClass('active');
		if(clientWidth > 768) {
			$('.hidden').html($questionText.html()).slideDown();
			setTimeout(function() {
				$questionText.slideDown();
			}, 300);
		} else {
			$questionText.slideDown();
		}
		
	}
}

$(function() {
	clientWidth = $(window).width();
	$('#leftMenuList').delegate('.mu_memu', 'click', handleMuMeum);
	$('.mu_memu.active a').click(function(e) {
		e.stopPropagation();
		$('.mu_memu.active a').removeClass('active');
		$(this).addClass('active');
	});

	$('.question_text').click(function(e) {
		e.stopPropagation();
	});

	init();
})