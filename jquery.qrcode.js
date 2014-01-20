(function($) {
	$.fn.qrcode = function(options) {
		var api_url = 'http://qrcdn.com/';
		var settings = $.extend({
			'url' : '',
			'width' : '100',
			'height' : '100',
			'qrsize' : 5
		}, options);
		return this.each(function() {
			$(this).append('<img id="qrcode" width="' + settings['width'] + '" height="' + settings['height'] + '" src="' + api_url + '?type=PNG&size=' + settings['qrsize'] + '&url=' + settings['url'] + '" />');
		});
	};
})(jQuery);
