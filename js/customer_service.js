var clientWidth = 0;
function init() {
	var $firstMuMemu = $('.mu_memu').eq(0);
	var $firstSubLi = $firstMuMemu.find('.sub_list').find('li').eq(0);
	$firstMuMemu.trigger('click');
	$firstSubLi.trigger('click');
	// handleMuMeum.call($firstMuMemu);
	// handleSubList.call($firstSubLi);
}

function handleMuMeum() {
	$this = $(this);
	if($this.hasClass('active')) {
		$this.removeClass('active');
		$this.find('.sub_list').slideUp(320);
	} else {
		$('.mu_memu.active').removeClass('active').find('.sub_list').slideUp(320);
		$this.addClass('active').find('.sub_list').slideDown(320)
	}
}

function handleSubList(e) {
	e.stopPropagation();
	var $this = $(this);
	var $rightProblemAnswer = $this.find('.right_problem_answer');
	if($rightProblemAnswer.is(':visible')) {
		if(clientWidth <= 768) {
			$this.removeClass('active');
			$rightProblemAnswer.slideUp(320);
		}
		return;
	}
	$('.sub_list').find('li').removeClass('active').find('.right_problem_answer').hide();
	$(this).addClass('active');
	$rightProblemAnswer.slideDown(320);
	
	
}

$(function() {
	clientWidth = $(window).width();
	$('#leftMenuList').delegate('.mu_memu', 'click', handleMuMeum);
	$('.mu_memu.active a').click(function(e) {
		e.stopPropagation();
		$('.mu_memu.active a').removeClass('active');
		$(this).addClass('active');
	});

	$('.sub_list').click(function(e) {
		e.stopPropagation();
	});
	$('.sub_list').delegate('li', 'click', handleSubList);

	$('.problem_list').delegate('li', 'click', function(e) {
		e.stopPropagation();
		$this = $(this);
		if($this.hasClass('active')) {
			$this.removeClass('active');
			$this.find('.answer_infs').slideUp(50);
			if(clientWidth > 768) {
				$('.hidden').slideUp(50);
			}

		} else {
			$('.problem_list li.active').removeClass('active').find('.answer_infs').slideUp(50);
			
			var $answerInfs = $this.addClass('active').find('.answer_infs');
			if(clientWidth > 768) {
				$('.hidden').slideUp(50, function() {
					$('.hidden').html($answerInfs.html()).slideDown();
				});
			}
			$answerInfs.slideDown();
			
			
		}
	});

	init();
	
})