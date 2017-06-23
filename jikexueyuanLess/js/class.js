$(document).ready(function() {
    // 课程列表部分sort-type的导航菜单
    // 鼠标滑过sort-type-list，下滑
    $(".sort-type").mousemove(function() {
        $(this).children(".sort-type-list").stop().slideDown("300");
    });

    // 鼠标移开sort-type-list，收起
    $(".sort-type").mouseleave(function() {
        $(this).children(".sort-type-list").stop().slideUp("fast");
    });
});

// 总课程的展示方式
$(document).ready(function() {
    $(".sort-list-on").click(function() {
        $(".blist .course-wrap").unbind();
        $(".blist").addClass("hlist");
        $(".blist").removeClass("blist");

    });


    $(".sort-card-on").click(function() {
        $(".hlist .course-wrap").unbind();
        $(".hlist").addClass("blist");
        $(".hlist").removeClass("hlist");
    });


});



// 搜索框点击弹出效果
$(document).ready(function() {
	$('#show-search').on('click',function(){
		$('#searchwrap').toggleClass('searchbar-show');
	});
	$('#hide-search').on('click',function(){
		$('#searchwrap').toggleClass('searchbar-show');
	});
});
