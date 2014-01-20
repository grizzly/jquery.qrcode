jQuery QR-Code-Plugin
=====================

## Example usage

```js

	$(document).ready(function() {
		$('#test').qrcode({
			'url' : 'http://jquery.com',
			'width' : 300,
			'height' : 300,
			'qrsize' : 100
		});
	});

```

This code will add a QR-Code to the div '#test'.

## Settings

+ `url` _String_ - users will be redirected to this URL when scanning the QR-Code
+ `width` _Integer_ - image width in pixel
+ `height` _Integer_ - image height in pixel
+ `qrsize` _Integer_ - quality of the QR-Code in pixel

## Demo

Will be added shortly.

License
=======

http://opensource.org/licenses/MIT
