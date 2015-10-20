function show(s) {
	var Oa = document.getElementById('new-tag').getElementsByTagName('a');
	var Op = document.getElementById('nav-tab').getElementsByTagName('p');
	var i = 1;
	var cnt = Math.min(Oa.length, Op.length);
	for (i; i < cnt; i++) {
		Oa[i].className = s == i ? "sel" : "";
		Op[i].className = s == i ? "dis" : "";
	}
}
$(function() {
	$(".tab-xx:gt(0)").hide();
	var tag = $(".cp-xx a");
	var tab = $(".tab-xx");
	tag.click(function() {
		$(this).addClass("sel").siblings().removeClass();
		var Index = tag.index(this);
		tab.eq(Index).show().siblings().hide();
	});
});
$(function() {
	var Sp0 = $("#species a");
	var Sp1 = $("#year a");
	var Sp2 = $("#srules a");
	var Xz0 = $("#species .xz");
	var Xz1 = $("#year .xz");
	var Xz2 = $("#srules .xz");
	Sp0.click(function() {
		var Index = Sp0.index(this);
		$(this).addClass("sp-zl-red").siblings().removeClass();
		Xz0.hide();
		Xz0.eq(Index).show();
	});
	Sp1.click(function() {
		var Index = Sp1.index(this);
		$(this).addClass("sp-zl-red").siblings().removeClass();
		Xz1.hide();
		Xz1.eq(Index).show();
	});
	Sp2.click(function() {
		var Index = Sp2.index(this);
		$(this).addClass("sp-zl-red").siblings().removeClass();
		Xz2.hide();
		Xz2.eq(Index).show();
	});
});