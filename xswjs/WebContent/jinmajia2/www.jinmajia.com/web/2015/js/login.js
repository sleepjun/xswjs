// JavaScript Document
$(function(){
	$(window).load(function(){
	$("#showC em").each(function() {
        $(this).bind("mouseover",function(){
			 $(this).children("i").fadeIn();
		});
		$(this).bind("mouseleave",function(){
			 $(this).children("i").fadeOut();
		});
    });
	});
})