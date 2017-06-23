$(document).ready(function() {

	// 右边更多产品高度
	$('.pro-mainlink').height($(document).height());

	// 鼠标hover设置事件
	// $(".set_a").hover(function (){  
 //            $(".set-list").show();  
 //        },function (){  
 //            $(".set-list").hide();  
 //        });  

	//	$(".cont-eq").hide();
	//	$("#menu-list li:first").addClass("menu-c").show();
	//	$(".cont-eq:first").show();
//标签切换 点击事件
	$("#menu-list li").each(function(index) {
		//添加点击事件
		$("#menu-list li").click(function() {
			$("#menu-list li").removeClass("menu-c");
			$(this).addClass("menu-c");
			$(".cont-eq").hide();
			var activeTab = $(this).find("a").attr("href");
			$(activeTab).fadeIn();
			return false;
		});
	});

//回到顶部
	$(function() {
		//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失  
		$(function() {
			$(window).scroll(function() {
				if($(window).scrollTop() > 100) {
					$("#back-to-top").fadeIn(1500);
				} else {
					$("#back-to-top").fadeOut(1500);
				}
			});
			//当点击跳转链接后，回到页面顶部位置  
			$("#back-to-top").click(function() {
				$('body,html').animate({
					scrollTop: 0
				}, 1000);
				return false;
			});
		});
	});
	
//滚动加载页面
function addContent(){
//	$(".content-wrap").animate({
//		height:"100%"
//	},1000);
	$(".content-wrap").CSS("overflow","none");
}
	
//监听滚动条
	$(window).scroll(function(){
		//获取网页总高度htmlHeight
		var htmlHeight=document.body.scrollHeight || document.documentElement.scrollHeight;
		//clientHeight是网页在浏览器中的可视高度
		var clientHeight=document.body.clientHeight || document.documentElement.clientHeight;
		//scrollTop是浏览器滚动条top的位置
		var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
		//通过判断滚动条top的位置与可视网页之和与整个网页的高度是否相等来决定是否加载内容
		if(scrollTop+clientHeight==htmlHeight){
			addContent();
		}
	});
	
});