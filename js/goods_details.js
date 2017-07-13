
$(document).ready(function(){
	//pc(window).width() > 768)
	/*----------------左侧图片点击展示------------------*/
	var index=0;
	var timer=null;
	var pic=$('#pic')[0].getElementsByTagName('li');
	var flashHeight = $('#flash').height();

	if($('.color_pic').find('li').length === 1) {
		$('.color_pic').find('li').addClass('active');
	}
	$('#arrow_pic').height(flashHeight);

	//单击向上箭头
	$('#arrow_up').click(function(){
		index--;
		if (index<0) {index=pic.length-1};
		changeOption(index);
	});
	//单击向下箭头
	$('#arrow_down').click(function(){
		index++;
		if (index>=pic.length) {index=0};
		changeOption(index);
	});			
	//封装函数changeOption
	function changeOption(curindex){
		for(var j=0;j<pic.length;j++){
			pic[j].style.display='none';
		}
		pic[curindex].style.display='block';
		index=curindex;
	}
	/*--------------------------------------------------------*/

	// 款式和尺码选择
	$('.color_pic ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.right_goods_infs').find('.color_choose').find('span').html('深蓝');
	});
	$('.code').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.pc_offline_sale').show();
		$('.right_goods_infs').find('.size_choose').find('span').html($(this).html());
	});

	/*--------------------------------------------------------*/
	
	//商品数量加减
	var num = document.getElementById('num_input');
	$('.add_num').click(function(){
	    num.value = parseInt(num.value) + 1;
	});
	$('.sub_num').click(function(){
		if(num.value > 1){
			num.value = parseInt(num.value) - 1;
		}
	});

	$('.add_btn').click(function(){
	    num.value = parseInt(num.value) + 1;
	});

	$('.sub_btn').click(function() {
		if(num.value > 1){
			num.value = parseInt(num.value) - 1;
		}
	});

	$('#pic').delegate('img', 'click', function() {
		$('.goods_pic img').attr('src', $(this).attr('src'));
	});
	/*--------------------------------------------------------*/

	//商品描述Tab选择列表实现
	var height = $('#tabContent').height();
	$('.tab_box .tab a').click(function(){
		var index = $(this).index();
		number = index;
		$(this).addClass('on').siblings().removeClass('on');
		$('.tab_box .tab_content li').hide();
		$('.tab_box .tab_content li:eq('+index+')').show();
		if($('#tabUl').height() > height) {
			$('.ps-scrollbar-y-rail').show();
			$('#tabContent').scrollTop(0);
		} else {
			$('.ps-scrollbar-y-rail').hide();
		}
	});
	$('.want_order').click(function() {
		$(this).toggleClass('active');
	});
	var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
	if(auto ==1){
		var number = 0;
		var maxNumber = $('.tab_box .tab a').length;
		function autotab(){
			number++;
			number == maxNumber? number = 0 : number;
			$('.tab_box .tab a:eq('+number+')').addClass('on').siblings().removeClass('on');
			$('.tab_box .tab_content ul li:eq('+number+')').show().siblings().hide();
		}
	 }
	/*--------------------------------------------------------*/

	//组合购买Tab选择列表实现
	
	$('.tab_list a').click(function(){
		var index = $(this).index();
		number = index;
		$(this).addClass('on').siblings().removeClass('on');
		$('.combinate_buy .com_content li').hide();
		$('.combinate_buy .com_content li:eq('+index+')').show();
	});
	var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
	if(auto ==1){
		var number = 0;
		var maxNumber = $('.combinate_buy .tab_list a').length;
		function autotab(){
			number++;
			number == maxNumber? number = 0 : number;
			$('.combinate_buy .tab_list a:eq('+number+')').addClass('on').siblings().removeClass('on');
			$('.combinate_buy .com_content ul li:eq('+number+')').show().siblings().hide();
		}
	  }

	// 组合购买商品选择
	var $chooseKey  = $('.com_pic').find('.choose_key');
	$chooseKey.click(function(){
		$(this).toggleClass('on');
	});
	//PC组合价位置
	var comboxHeight1 = $('#com_pic1').height();
	$('#com_price1, #com_price2').css('margin-top',comboxHeight1/2-20);
	$('#com_price1, #com_price2').css('margin-bottom',comboxHeight1/2-20);//弹窗组合价位置
	
	/*----------------------------------------------------------*/

	//商品评价页码
	var $pageNum = $('.pages_num li a');
	$pageNum.click(function(){
		$(this).addClass('on').siblings().removeClass('on');
	});

	//组合购买弹窗
	var currentWidth = $(window).width();
	var currentHeight = $(window).height();

	$('#add_to_cart2').click(function(){
		var comboxHeight4 = $('#com_pic4').height();
		var pupHeight1 = $('.com_buy_pup').outerHeight(true);
		// $('.com_buy_pup').css('margin-top',-pupHeight1/2);
		$('#mask1, #com_buy_pup').show();
		disableScroll($('body, html'));//禁止滚动
	});
	$('#add_to_cart4').click(function(){
		$('#mask1, #com_buy_pup').hide();
		ensableScroll($('body, html'));//解除限制滚动
	});


	/*--------------------------------------------------------*/

	//线下店铺查找商品弹窗
	$('.pc_offline_sale').click(function(){
		if($('.color_pic').find('.active').length > 0 && $('.size_classes').find('.active').length > 0) {
			$('.get_size').removeClass('show');
			var pupHeight1 = $('.on_shop_check').outerHeight(true);
			var adsHeight = $('.address_box').outerHeight();
			$('.right_list').css('line-height',adsHeight/2);
			$('#mask1, .on_shop_check').show();
			disableScroll($('body, html'));//禁止滚动
		} else {
			if($('.get_size').hasClass('show')) {
				return;
			}
			$('.get_size').addClass('show');

			window.setTimeout(function() {
				$('.get_size').removeClass('show');
			}, 2000);
			return;
		}
		
	});
	$('.closed_mask_btn').click(function() {
		$('#mask1').hide();
		$('#com_buy_pup').hide();
		ensableScroll($('html, body'));
	});
	$('.delect_btn').click(function(){
		$('#mask1, .on_shop_check').hide();
		if($(window).width() <= 768) {
			$('body, html').css('height', 'auto');
		}
		ensableScroll($('html, body'));//解除限制滚动
	});

	$('.add_count').click(function() {
		$('#countInput').val(+$('#countInput').val() + 1);
	});
	$('.sub_count').click(function() {
		var value = +$('#countInput').val() - 1;
		if(value < 0) {
			value = 0;
		}
		$('#countInput').val(value);
	});
	/*--------------------------------------------------------*/

	//mobile(window).width() <= 768)
	if($(window).width() <= 768) {
		//组合购买
		$('#combinate_buy1').bind('touchstart',function(){
			$('#mask1, #com_buy_pup').show();
			// window.location.href = 'combination_purchase.html';
		});
		$('.mobile_offline_sale').bind('touchstart',function(){
			if($('.color_pic').find('.active').length > 0 && $('.size_classes').find('.active').length > 0) {
				// window.location.href = 'in_shop_find.html';
				$('#mask1, .on_shop_check').show();

				$('body, html').css('height', '100%');
			} else {
				if($('.get_size').hasClass('show')) {
					return;
				}
				$('.get_size').addClass('show');
				window.setTimeout(function() {
					$('.get_size').removeClass('show');
				}, 1000);
			}
			
		});
		//商品描述
		$('.con_text').click(function() {
			var $currentSublist = $(this).find('.text_box');
			if($currentSublist.is(':visible')) {
				$currentSublist.slideUp(320);
				$(this).removeClass('active');
			} else {
				$('.con_text').find('.text_box').slideUp(320);
				$('.con_text').removeClass('active');
				$currentSublist.slideDown(320);
				$(this).addClass('active');
			}	
		});
		//查询线下有售
		$('.color_pic ul li').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
		$('.code').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.mobile_offline_sale').show();
			$('.get_size').removeClass('show');
		});
		//分享
		$('.share_iecn').bind('click',function(e){
			var curWidth = $(window).width();
			var curHeight = $(window).height();
			var shareHeight = $('.pup_mobile').height();
			$('#mask1').css('width', curWidth);
			$('#mask1').css('height', curHeight);
			$('#mask1').show();
			$('.pup_mobile').css({
					'right':'-100%'
				}).show().animate({right:'0'},'100');
			disableScroll($('body, html'));//禁止滚动
			$('.pup_mobile').css('margin-top',-shareHeight/2);
			$('.del_btn').click(function(){
				$('#mask1, .pup_mobile').hide();
				ensableScroll($('body, html'));//解除限制滚动
			});
		});
	}
}); 

$(function(){
	$('.add_to_want').click(function() {
		$(this).toggleClass('active');
	});
	$('.want_order2').click(function() {
		$(this).toggleClass('active');
	});
    $(".select_color_box").click(function(event){   
        event.stopPropagation();
        $('.list_out_box').slideUp(200);
        $(".select_size_box").removeClass('active');
        $('#size_option').slideUp(200);  
        if($('#color_option').is(':visible')) {
        	$('#color_option').slideUp(200);
        } else {
        	$('#color_option').slideDown(200);
        }
        $(this).toggleClass('active');
    });
    $(document).click(function(event){
    	$('.select_color_box').removeClass('active');
        $('#color_option').slideUp(200);  
        $(".select_size_box").removeClass('active');
        $('#size_option').slideUp(200);                                
    });
    /*赋值给文本框*/
    $("#color_option a").click(function(){
        var value=$(this).text();
        $(this).parent().siblings(".select_color_txt").text(value);
        $("#select_color_value").val(value);
     });
    /*-------------------------------------------------------------------------------*/
    $(".select_size_box").click(function(event){   
        event.stopPropagation();
        $('.list_out_box').slideUp(200);
        $('.select_color_box').removeClass('active');
        $('#color_option').slideUp(200);  
        if($("#size_option").is(':visible')) {
        	$("#size_option").slideUp(200);
        } else {
        	$("#size_option").slideDown(200);
        }
        $(this).toggleClass('active');
    });

    /*赋值给文本框*/
    $("#size_option a").click(function(){
        var value=$(this).text();
        $(this).parent().siblings(".select_size_txt").text(value);
        $("#select_size_value").val(value);
     });

    $('.shop_address_box').click(function(e) {
    	e.stopPropagation();
    	var $listOutBox = $(this).find('.list_out_box');
    	$('.list_out_box').slideUp(100);
    	if($listOutBox.is(':visible')) {
    		$listOutBox.slideUp(200);
    	} else {
    		$listOutBox.slideDown(200);
    	}
    	
    });
    $('.list_out_box').find('ul').click(function(e) {
    	e.stopPropagation();
    	return false;
    });
    $('.list_out_box').find('ul').delegate('a', 'click', function(e) {
    	e.stopPropagation();
    	$(this).parents('.shop_address_box').find('span').html($(this).html());
    	$(this).parents('.list_out_box').slideUp(200);
    });
    $('.on_shop_check').click(function() {
    	$('.list_out_box').slideUp(200);
    });
    

    if($(window).width() > 768) {
    	var hideHoverWidth = $('#hideHover').width();
    	var hideHoverHeight = $('#hideHover').height();
    	$('#mouseHover').css({
    		'width': hideHoverWidth / 2,
    		'height': hideHoverHeight / 2
    	});
    	var xDis = $('#mouseHover').width() / 2;
    	var yDis = $('#mouseHover').height() / 2;
    	$('#hideHover').mousemove(function(e) {
    		e.stopPropagation();

    		$('#mouseHover').show();
    		$('.bigger_pic_box').show();

    		var left = e.offsetX - xDis;
    		var top = e.offsetY - yDis;

    		left = left < 0 ? 0 : left;
    		top = top < 0 ? 0 : top;
    		left = left > (hideHoverWidth - 2 * xDis) ? (hideHoverWidth - 2 * xDis) : left;
    		top = top > (hideHoverHeight - 2 * yDis) ? hideHoverHeight - 2 * yDis : top;

    		$('#mouseHover').css({
    			'left': left,
    			'top': top
    		});
    		
    		$('#biggerPic').css({
    			'left': -left * 2,
    			'top': -top * 2
    		});
    	})

    	$('#hideHover').mouseleave(function() {
    		$('#mouseHover').hide();
    		$('.bigger_pic_box').hide();
    	});
    }

    var scroll = 0;
    $('.size_help').click(function() {
    	$('.size_box_hover').show();
    	scroll = $("body").scrollTop();
    	if($(window).width() > 768) {
    		disableScroll();
    	} else {
    		$('body, html').css({
    			'overflow': 'hidden',
    			'height': '100%'
    		});
    	}
    	$('.size_box').height(sizeBoxHeight);
    	$('.size_content_box').height(sizeBoxHeight - $('.size_title_box').outerHeight(true) - 1);
    });

    $('.closed_size_box').click(function() {
    	$('.size_box_hover').hide();
    	if($(window).width() > 768) {
    		ensableScroll();
    	} else {
    		$('body, html').css({
    			'overflow': 'auto',
    			'height': 'auto'
    		});
    	}

    	$("body").scrollTop(scroll)
    });

    $('.size_tab').delegate('li', 'click', function() {
    	var $this = $(this);
    	$('.size_tab').find('li').removeClass('active');
    	$this.addClass('active');
    	var src = $this.attr('data-src');
    	$('.size_content_box').find('img').attr('src', src);
    });

    var sizeBoxHeight = $(window).height()*0.9;
});

