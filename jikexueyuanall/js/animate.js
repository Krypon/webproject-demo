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

    // 课程列表部分

    // 修改className



    $(".sort-list-on").click(function() {
        $(".lesson-list .lesson").unbind();
        $(".lesson-list").addClass("lesson-list2");
        $(".lesson-list").removeClass("lesson-list");

        $(".lesson").hover(function() {
            // 改变高度，使用动画
            $(this).find(".lesson-infor").stop().animate({
                height: '90px'
            }, 500);

            // 显示收藏的图标
            $(this).find(".collection-icon").stop().css("display", "block");
            // 显示播放图标
            $(this).find(".player-icon").stop().css("display", "block");
        }, function() {
            // 改变高度 隐藏元素
            $(this).find(".lesson-infor").stop().animate({
                height: '90px'
            }, 500);
            $(this).find(".collection-icon").stop().css("display", "none");
            $(this).find(".player-icon").stop().css("display", "none");

        });


    });

    $(".sort-card-on").click(function() {
        $(".lesson-list2 .lesson").unbind();
        $(".lesson-list2").addClass("lesson-list");
        $(".lesson-list2").removeClass("lesson-list2");
        // 鼠标hover改变css属性，改变div高度。
        $(".lesson-list .lesson").hover(function() {
            // 改变高度，使用动画
            $(this).find(".lesson-infor").stop().animate({
                height: '175px'
            }, 500);
            // 显示p元素的内容
            $(this).find(".lesson-infor>p").stop().css("display", "block");
            // 显示收藏的图标
            $(this).find(".collection-icon").stop().css("display", "block");
            // 显示播放图标
            $(this).find(".player-icon").stop().css("display", "block");
        }, function() {
            // 改变高度 隐藏元素
            $(this).find(".lesson-infor").stop().animate({
                height: '90px'
            }, 500);
            $(this).find(".lesson-infor>p").stop().css("display", "none");
            $(this).find(".collection-icon").stop().css("display", "none");
            $(this).find(".player-icon").stop().css("display", "none");

        });
    });



    // 绑定事件
    // $(function() {
    //     $(".sort-list-on").on("click", lessonList);
    //     $(".sort-card-on").on("click", lessonCard);
    // });

    // function lessonCard() {
    //     $(".lesson-list2").addClass("lesson-list");
    //      $(".lesson-list2").removeClass("lesson-list2");
    //     $(".lesson").hover(function() {
    //         // 改变高度，使用动画
    //         $(this).find(".lesson-infor").animate({
    //             height: '175px'
    //         }, 500);
    //         // 显示p元素的内容
    //         $(this).find(".lesson-infor>p").css("display", "block");
    //         // 显示收藏的图标
    //         $(this).find(".collection-icon").css("display", "block");
    //         // 显示播放图标
    //         $(this).find(".player-icon").css("display", "block");
    //     }, function() {
    //         // 改变高度 隐藏元素
    //         $(this).find(".lesson-infor").animate({
    //             height: '90px'
    //         }, 500);
    //         $(this).find(".lesson-infor>p").css("display", "none");
    //         $(this).find(".collection-icon").css("display", "none");
    //         $(this).find(".player-icon").css("display", "none");

    //     });
    // }

    // function lessonList(){
    //  $(".lesson").off("hover");
    //  $(".lesson-list").addClass("lesson-list2");
    //  $(".lesson-list").removeClass("lesson-list");

    // }

});
