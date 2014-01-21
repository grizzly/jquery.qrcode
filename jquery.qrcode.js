/*!
 * jQuery QR-Code Plugin Library v0.1.2
 * https://github.com/grizzly/jquery.qrcode
 *
 * Copyright 2011-2014 Grizzly GmbH Graz, Austria
 * http://www.grizzly.cc
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 * Last update: 2014-01-21
 */

(function($) {
	$.fn.qrcode = function(options) {
		var api_url = 'http://jquery.qrcdn.com/';
		var settings = $.extend({
			'url' : '',
			'width' : '100',
			'height' : '100',
			'qrsize' : 5
		}, options);
		return this.each(function() {
			$(this).append('<img id="qrcode" width="' + settings['width'] + '" height="' + settings['height'] + '" src="' + api_url + '?o=jquery&type=PNG&size=' + settings['qrsize'] + '&url=' + encodeURIComponent(settings['url']) + '" />');
		});
	};
})(jQuery);
