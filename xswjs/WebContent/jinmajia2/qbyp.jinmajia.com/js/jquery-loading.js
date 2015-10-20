/**
 * @部分参数说明 v1.2
 */
(function($){
    $.fn.extend({
        /**
         * options:配置项
         * nothingToDo:为true则保持现在的状态,仅仅改变大小,文字.
         */
        toggleLoading: function(options,nothingToDo,cb){
        	var crust = this.children(".x-loading-wanghe");
        	function callback(){}
        	if(crust.length>0){
        		if(typeof cb=='function'){
        			callback = cb;
        		}
        		dynamicSize.call(this,crust,options);
        		if(nothingToDo==undefined||!nothingToDo){
	        		if(options&&options.close){//关闭
	        			crust.fadeOut(500,callback);
	        		}else if(options&&options.show){//显示
	        			crust.fadeIn(500,callback);
	        		}else if(crust.is(":visible")){
	        			crust.fadeOut(500,callback);
	        		}else{
		        		crust.fadeIn(500,callback);
	        		}
        		}
        		return this;
        	}
        	function dynamicSize(ct,options){
        		var w = this.outerWidth(),
            	    h = this.outerHeight();
        		    ct.css({
        		    	'width':w+'px',
            			'height':h+'px'
                	}).children(".x-loading-msgCrust").css("top",(h-30)/2+'px');
                	
                	if(options&&options.msg){
                		var img = ct.find(".x-loading-img");
                		ct.find(".x-loading-msg").html(options.msg).prepend(img);
                	}
                	
        	}
            // 扩展参数
            var op = $.extend({
                z: 9999,
                msg:'loading...',
                iconUrl:'../images/loading.gif'/*tpa=http://qbyp.jinmajia.com/images/loading.gif*/,
                width:18,
                height:18,
                borderColor:'#6bc4f5',
                opacity:0.5,
                show:true
            },options);
            if(this.css("position")=="static")
            	this.css("position","relative");
            var w = this.outerWidth(),
            	h = this.outerHeight();
							
            crust = $("<div></div>").css({//外壳
                'position': 'absolute',
                'z-index': op.z,
                'display':'none',
                'width':w+'px',
                'height':h+'px',
                'text-align':'center',
                'top': '0px',
                'left': '0px',
                'font-family':'arial',
                'font-size':'12px',
                'font-weight':'500'
            }).attr("class","x-loading-wanghe");
            
            var mask = $("<div></div>").css({//蒙版
                'position': 'absolute',
                'z-index': op.z+1,
                'width':'100%',
                'height':'100%',
                'background-color':'#333333',
                'top': '0px',
                'left': '0px',
                'opacity':op.opacity
            });
            //71abc6,89d3f8,6bc4f5
            var msgCrust = $("<span></span>").css({//消息外壳
	                'position': 'relative',
             	 	'top': (h-30)/2+'px',
	                'z-index': op.z+2,
	                'height':'24px',
	                'display':'inline-block',
	                'background-color':'#cadbe6',
	                'padding':'2px',
	                'color':'#000000',
	                'border':'1px solid '+op.borderColor,
	                'text-align':'left',
	                'opacity':0.9
	            }).attr("class","x-loading-msgCrust");
            var msg = $("<span>"+op.msg+"</span>").css({//消息主体
            		'position': 'relative',
            		'margin': '0px',
	                'z-index': op.z+3,
	                'line-height':'22px',
	                'height':'22px',
	                'display':'inline-block',
	                'background-color':'#efefef',
	                'padding-left':'25px',
	                'padding-right':'5px',
	                'border':'1px solid '+op.borderColor,
	                'text-align':'left',
	                'text-indent':'0'
            	}).attr("class","x-loading-msg");
			var msgIcon =  $("<img src="+op.iconUrl+" />").css({//图标
					'position': 'absolute',
	                'top': '3px',
	                'left':'3px',
	                'z-index': op.z+4,
	                'width':'18px',
	                'height':'18px'
            	}).attr("class","x-loading-img");	
            msg.prepend(msgIcon);
        	msgCrust.prepend(msg);
        	crust.prepend(mask);
        	crust.prepend(msgCrust);
            this.prepend(crust);
           // alert(thisjQuery.html());
            if(op.show){
             crust.fadeIn(500,callback);
            }
            //模态设置
            return this;
        }
    });
})(jQuery);