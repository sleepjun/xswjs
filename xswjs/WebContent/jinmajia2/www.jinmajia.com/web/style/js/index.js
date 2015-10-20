$(function(){
	$(".navtop .innav li:last").css("background","none");
		$(".navtop .innav li").each(function(){
			$(this).bind("mouseover",function(){
				var emp=".navtop .snav li:eq("+$(this).index()+")";
				$(emp).addClass("now").siblings().removeClass("now");
			});
		});
		$(".navtoptag dd:eq(1) a").click(function(){
  			window.open('http://fang.jinmajia.com/');			
  		});
		$("dl#toolsbar dd").each(function(){	
		$(this).bind("mouseover",function(){
			var num=$(this).index();
			var myclass="b"+ $(this).index();
			$("#toolsbar").removeClass().addClass(myclass);
			$("dl#toolsbar dd a").removeClass("now");
			$(this).children("a").addClass("now");
			$("#toolsbarshow dd").removeClass("now");
			$("#toolsbarshow dd:eq("+num+")").addClass("now");
			});
	});
	$("dl#menuList dd").each(function() {
        $(this).bind("mouseover",function(){
			var dnum=$(this).index();
			$("dl#menuList dd a").removeClass("hovers");
			$(this).children("a").addClass("hovers");
			$("#menuShow dd").removeClass("show");
			$("#menuShow dd:eq("+dnum+")").addClass("show");
			});
    });
	$("dl#zxxm dd").each(function() {
        $(this).bind("click",function(){
			var dnum=$(this).index();
			$("dl#zxxm dd a").removeClass("now");
			$(this).children("a").addClass("now");
			$("#zxxmlist dd").hide();
			$("#zxxmlist dd:eq("+dnum+")").show();
			});
    });
	
	$("#ch tr:odd").addClass("jgt");
});

function handNav(num,mNum){
	$(".navtop .snav li").removeClass("now");
			var menu=".navtop .innav li:eq("+num+") a";
			var menuLi=".navtop .snav li:eq("+num+")";
			var menuLiA=".navtop .snav li:eq("+num+") a:eq("+mNum+")";
			$(menu).addClass("now");
			$(menuLi).addClass("now");
			$(menuLiA).addClass("now");
}

function gozx(obj){
	var txt = obj.innerHTML;
	if(txt=="公告"){
		window.open("http://www.jinmajia.com/f/notice/noticelist.jsp");
	}
	if(txt=="资讯"){
		window.open("http://www.jinmajia.com/cqzx/index.shtml?type=8");
	}
	if(txt=="动态"){
		window.open("http://www.jinmajia.com/article/dongtai/");
	}
}

function menunow(num){	
			var menu=".navtop .innav li:eq("+num+") a";
			$(menu).addClass("now");
}
openKF = function(kfid){
		var kfURL = "http://gate.looyu.com/WebModule/chat/p.do?c=26700&f=54012&n="+kfid;
		var para = "height=460,width=690,directories=no,location=no,menubar=no,resizeable=no,status=no,toolbar=no,top=100,left=200" ;
		window.open(kfURL,"在线客服",para,false);
	}

	//参数说明：moveTips(对象ID,距顶部像素,距左边像素,样式类型(left/mid/right)，函数延时(单位为毫秒));   
	//moveTips('wxlist','360','0','right',"0");