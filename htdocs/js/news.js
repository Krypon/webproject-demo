$(document).ready(function() {
    refreshNews('精选');

    // 选择需要加载的内容
    $('nav a').click(function(e){
        e.preventDefault();
        var type=$(this).text();
        refreshNews(type);
    });

});

function refreshNews(type) {
    // js动态添加新闻信息
    var $lists = $('article ul');

    // 添加新闻前先删除新闻列表
    $lists.empty();

    // 添加ajax
    $.ajax({
        url: '../server/getnews.php',
        type: 'get',
        datatype: 'json',
        data:{newstype:type},
        success: function(data) {

            data.forEach(function(item,index,array){
                 // 添加工厂函数
                var $list = $('<li></li>').addClass('news-list').prependTo($lists);
                var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
                var $img = $('<img>').attr('src', item.newsimg).width('100%').appendTo($newsImg);
                var $newsContent = $('<div></div>').addClass('newscontent').appendTo($list);
                var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newsContent);
                var $p = $('<p></p>').appendTo($newsContent);
                var $newsTime = $('<span></span>').addClass('newstime').html(item.newstime).appendTo($p);
                var $newsSrc = $('<span></span>').addClass('newssrc').html(item.newssrc).appendTo($p);

            });
        
        }
    });


}
