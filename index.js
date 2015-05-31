function morehover(element) {
	element.setAttribute('src', 'img/btn-more2.png');
}

function moreout(element) {
	element.setAttribute('src', 'img/btn-more1.png');
}

$(function() {
	// 幫 a.abgne_gotoheader 加上 click 事件
	$('a.gotoinfo').click(function() {
		// 讓捲軸用動畫的方式移動到 0 的位置
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop : 620
		}, 700);

		return false;
	});
});
$(function() {
	// 幫 a.abgne_gotoheader 加上 click 事件
	$('a.gotopaint').click(function() {
		// 讓捲軸用動畫的方式移動到 0 的位置
		// 感謝網友 sam 修正 Opera 問題
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop : 1460
		}, 700);

		return false;
	});
});
$(function() {
	// 幫 a.abgne_gotoheader 加上 click 事件
	$('a.gotocontact').click(function() {
		// 讓捲軸用動畫的方式移動到 0 的位置
		// 感謝網友 sam 修正 Opera 問題
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop : 2020
		}, 700);

		return false;
	});
}); 