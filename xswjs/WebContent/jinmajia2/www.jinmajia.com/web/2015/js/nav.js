// JavaScript Document
/*头部导航当前样式*/
function navNow(num){	
			var menu=".topv15 .nav a:eq("+num+")";
			//alert(num);
			$(menu).addClass("hover");
}