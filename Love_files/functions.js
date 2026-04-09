/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var years = Math.floor(seconds / (3600 * 24 * 365)); // 计算年份
	var remainingSeconds = seconds % (3600 * 24 * 365); // 剩余秒数
	var days = Math.floor(remainingSeconds / (3600 * 24));
	remainingSeconds = remainingSeconds % (3600 * 24);
	var hours = Math.floor(remainingSeconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	remainingSeconds = remainingSeconds % 3600;
	var minutes = Math.floor(remainingSeconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	remainingSeconds = remainingSeconds % 60;
	if (remainingSeconds < 10) {
		remainingSeconds = "0" + remainingSeconds;
	}
	var result = "第 <span class=\"digit\">" + years + "</span> 年 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + remainingSeconds + "</span> 秒"; 
	$("#clock").html(result);
}
