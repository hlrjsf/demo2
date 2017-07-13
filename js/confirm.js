var URConfirm = {
	btnText: {
		okText: '确认',
		cancelText: '取消'
	},
	confirm: function(fn, args, msg, okText, cancelText, isGold) {
		this.btnText.okText = okText || this.btnText.okText;
		this.btnText.cancelText = cancelText || this.btnText.cancelText;
		args = args = [];

		var confirmBox = $(
			'<div class="confirm_hover">\
				<div class="confirm_box">\
					<span class="closed_btn"></span>\
					<div>' + msg + '</div>\
					<div class="btn_box">\
						<a href="javascript:void(0)" class="alert_btn btn_ok">' + this.btnText.okText + '</a>\
						<a href="javascript:void(0)" class="alert_btn btn_cancel">' + this.btnText.cancelText +'</a>\
					</div>\
				</div>\
			</div>');
		$('body').append(confirmBox);

		if(isGold) {
			$('.btn_cancel').css('background', '#94742b');
		}

		this.bindEvent(fn, args);
	},
	bindEvent: function(fn, args) {
		$('.confirm_hover .btn_ok').click(function() {
			fn.apply(null, args);
			$('.confirm_hover').hide();
			return;
		});
		$('.confirm_hover .btn_cancel').click(function() {
			$('.confirm_hover').hide();
			return;
		});

		$('.confirm_hover .closed_btn').click(function() {
			$('.confirm_hover').hide();
			return;
		});
	}
}