var URConfirm = {
	btnText: {
		okText: '确认',
		cancelText: '取消'
	},
	confirm: function(fn, args, msg, okText, cancelText) {
		this.btnText.okText = okText || this.btnText.okText;
		this.btnText.cancelText = cancelText || this.btnText.cancelText;
		args = args || [];

		var confirmBox = $('<div class="confirm_hover">\
				<div class="confirm_box">\
					<p>' + msg + '</p>\
					<a class="btn btn_ok">' + this.btnText.okText + '</a>\
					<a class="btn btn_cancel">' + this.btnText.cancelText + '</a>\
				</div>\
			</div>');

		$('body').append(confirmBox);

		this.bindEvent(fn, args);
	},
	bindEvent: function(fn, args) {
		$('.btn_ok').bind('click', function() {
			fn.apply(null, args);
			$('.confirm_hover').remove();
		});
		$('.btn_cancel').bind('click', function() {
			$('.confirm_hover').remove();
		});
	}
}

var Alert = {
	msg: function(text) {
		var confirmBox = $('<div class="confirm_hover">\
				<div class="confirm_box">\
					<p>' + text + '</p>\
					<a class="btn btn_ok">确定</a>\
				</div>\
			</div>');
		$('body').append(confirmBox);
	},
	bindEvent: function() {
		$('.btn_ok').bind('click', function() {
			$('.confirm_hover').remove();
		});
	}
}

var Loading = {
	show: function(id, time) {
		$(id).show();
		if(time) {
			setTimeout(function() {
				$(id).hide();
			}, time);
		}
	},
	hide: function(id) {
		$(id).hide();
	}
}