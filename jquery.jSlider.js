/*
 * jSlider: a jQuery plugin, version: 1.0.0 (30/06/2011)
 * @requires jQuery v1.6.1 or later
 *
 * jSlider is a jQuery plugin that makes it easy to make simple image sliders.
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) Jaseem Abid ( jaseemabid[at]gmail[dot][com] )
 */

;(function($) {
	$.fn.jSlider = function(options) {
		$.fn.jSlider.defaults = { /* default values */
			interval: 2000
		};
		var opts = jQuery.extend({}, jQuery.fn.jSlider.defaults, options);
		return this.each(function() {
			var j = $(this), images = j.find('img'), len = images.length, i = 0;
			setInterval(function(){
				if (i == len) {
					i = 0;
				}
				images.parent().children().hide();
				images.eq(i).fadeIn(opts['interval'] - 100);
				i++;
			}, opts['interval']);
		});
	};
})(jQuery);








