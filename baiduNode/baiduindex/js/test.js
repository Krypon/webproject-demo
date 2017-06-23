$(document).ready(function(){
	//遍历li标签
	$("#content-nav li").each(function(index){
		var liNode=$(this);
		$(this).mouseover(function(){
			//定时器
			timoutid=setTimeout(function(){
				$("div.content-page").removeClass("content-page");
				$("#content-nav li.content-list").removeClass("content-list");
				$("div").eq(index).addClass("content-page");
				liNode.addClass("content-list");
			},300);
		}).mouseout(function(){
			clearTimeout(timoutid);
		});
	});
	
	
	//添加加载页面
	$("#realcontent").load("test2.html");
	//遍历
	$("#content-nav2 li").each(function(index){
		$(this).click(function(){
			$("#content-nav2 li.content-list").removeClass("content-list");
			$(this).addClass("content-list");
			
			if(index==0){
				$("#realcontent").load("test2.html");
			}else if(index==1){
				$("#realcontent").load("index.html");
			}else if(index==2){
				$("#realcontent").load("test2.html");
			}else if(index==3){
				$("#realcontent").load("test2.html");
			}else if(index==4){
				$("#realcontent").load("test2.html");
			}
		});
	});
});
