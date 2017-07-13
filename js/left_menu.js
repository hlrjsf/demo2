	//每0.1秒监听一次浏览器窗口的变化
	$(function(){
		setTimeout(onWidthChange,100);
	});
	function setMaskHeight(){
		var docHeight = document.body.clientHeight; //获取页面高度
		$('.mask').css('height',docHeight);
	}
	// 左侧菜单面板交互
	function onWidthChange(){ 
	    if( $(window).width() <= 768 ) {
	        // 点击菜单按钮，菜单面板从上滑出显示
	 		$('.menu_btn').click(function() {
	 			setMaskHeight();
				$('#mask').show(); 
			    $('.left_menu').show();
			    $('.search_box').hide();
			    $('.menu_btn').removeClass('menu_btn').addClass('back_btn');		
			    // $('html,body').addClass('ovfhiden'); //使网页不可滚动
			});

			// 点击返回按钮，菜单面板向上滑回隐藏
			$('.back_btn').click(function() {
			    $('.left_menu').hide();
			    $('#mask').hide();
			    $('.back_btn').removeClass('back_btn').addClass('menu_btn');
			    // $('html,body').removeClass('ovfhiden'); //使网页恢复滚动
			});

			// 点击搜索
			$('.search_icon01').click(function() {
				setMaskHeight()
				$('#mask').show(); 
				$('.left_menu').hide();
			    $('.search_box').show();
			    $('.search_input').focus();
			    $('.back_btn').removeClass('back_btn').addClass('menu_btn');
			});
			// 点击结束搜索
			$('.search_up').click(function(){
				$('.search_box').hide();
				$('#mask').hide();
			});
	    }
	    else{
	    	$('.left_menu').hide();
			$('#mask').hide();
		    // $('.search_box').hide();
		    $('.back_btn').removeClass('back_btn').addClass('menu_btn');
	    }
	    setTimeout(onWidthChange,100);
	}
	
	

