function slideDown(parset,child){
	$(parset).hover(function(){
		$(this).find(child).stop().slideToggle();
	})
//	$(child).click(function(){
//			$(parset).html($(this).html());
//			$(child).css("display","none");
//		})
}
//微博
function weibo(parset,parse,child){
	$(parset).click(function(){
		$(parse).stop().toggle();
	})
	$(child).click(function(){
		$(parset).html($(this).html());
		$(parse).css("display","none");
	})
	
	
}






