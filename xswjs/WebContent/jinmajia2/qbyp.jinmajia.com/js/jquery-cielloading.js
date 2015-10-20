/**
 * @部分参数说明 v1.2
 */
(function($) {
	$
			.extend({
				/**
				 * options:配置项 nothingToDo:为true则保持现在的状态,仅仅改变大小,文字.
				 */
				processing : function(data) {
					var commands = {
						close : function() {
							var mask = $("body>div.processing-mask-0922");
							if (mask.length) {
								mask.remove();
							}
						}
					};
					if (typeof data == "string") {
						var targetMethod = commands[data];
						return targetMethod();
					}
					var mask = $("body>div.processing-mask-0922");
					if (mask && mask.length > 0) {
						return;
					}
					var opts = $.extend({
						ctx : '',
						zIndex : 9999,
						iconUrl : '../images/33.gif'/*tpa=http://qbyp.jinmajia.com/images/33.gif*/,
						pcount : 3,
						backgroundColor : '#222222',
						borderColor : '#1199FF',
						opacity : 0.5,
						text : "数据载入中，请稍候",
						interval : 300
					}, data || {});
					var body = $("body");
					var w = $(window);
					var mask = $("<div class=\"processing-mask-0922\"><div class=\"processing-border-panel\"><div class=\"processing-msg-panel\"></div></div></div>");
					var border = mask.find("div.processing-border-panel");
					var panel = mask.find("div.processing-msg-panel");
					mask.css({
						'position' : 'absolute',
						'z-index' : opts.zIndex,
						'width' : body.outerWidth() + 'px',
						'height' : body.outerHeight() + 'px',
						'background-color' : opts.backgroundColor,
						'top' : '0px',
						'left' : '0px',
						'opacity' : opts.opacity
					});
					border
							.css({
								'margin-top' : (body.scrollTop() + (w.height() - 30) / 2)
										+ 'px',
								'margin-left' : (w.width() - 200) / 2 + 'px',
								'background-color' : opts.borderColor,
								'float' : 'left'
							});
					panel.css({
						'float' : 'left',
						'background' : 'url(' + opts.ctx + opts.iconUrl
								+ ') 2px 2px no-repeat',
						'z-index' : opts.zIndex + 1,
						'height' : '32px',
						'line-height' : '32px',
						'width' : '200px',
						'background-color' : '#ddddff',
						'color' : '#000000',
						'text-align' : 'left',
						'text-indent' : '40px',
						'font-size' : '12px',
						'opacity' : 1,
						'margin' : '3px'
					});
					panel.html(opts.text);
					mask.pcount = 0;
					mask.appendTo(body);
					if (opts.interval) {
						mask.timer = setInterval(function() {
							mask.pcount++;
							if (mask.pcount > opts.pcount) {
								mask.pcount = 0;
							}
							var m = opts.text;
							for ( var i = 0; i < mask.pcount; i++) {
								m = m + '.';
							}
							mask.find("div.processing-msg-panel").html(m);
						}, opts.interval);
					}
					return this;
				}
			});
})(jQuery);
