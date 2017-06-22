$(document).ready(function() {
	// 右边更多产品高度
	$('.pro-mainlink').height($(document).height());

/**
 * 本作业使用单例模式优化
 * 优点：由于在系统内存中只存在一个对象，因此可以 节约系统资源
 */
	var index = {
		init: function() {
			var me = this;
			me.render();
			me.bind();
		},

		render: function() {
			var me = this;
			//换肤功能
			me.showSkin = $('.change-skin-btn');
			me.hideSkin = $('.close-btn');
			me.skinbtn = $('.skin-list li');

			//标签切换
			me.tabBtn = $("#menu-list li");

			//回到顶部
			me.goTopBtn = $('#back-to-top');

			me.scrollObj = $(window);
		},

		bind: function() {
			var me = this;
			//换肤
			me.showSkin.click(function() {
				$('.skin-top').fadeIn();
			});

			me.hideSkin.click(function() {
				$('.skin-top').fadeOut();
			});

			me.skinbtn.click(function() {
				//业务逻辑取出去
				var skin = $(this).attr('class');
				me.changeSkin(skin);
			});

			//标签切换 点击事件
			me.tabBtn.click(function() {

				var btn = this;
				me.changeTab(btn);
			});

			//回到顶部
			me.goTopBtn.click(function() {
				$('body,html').animate({
					scrollTop: 0
				}, 500);
			});

			//滚动到指定位置触发
			me.scrollObj.scroll(function() {
				me.scrollEvent();

			});

		},

		// 换肤
		changeSkin: function(skin) {
			$('body').removeClass();
			switch(skin) {
				case 'skin-item1':
					$('body').addClass('skin-item1');
					$('footer').addClass('foot-white');
					break;
				case 'skin-item2':
					$('body').addClass('skin-item2');
					$('footer').addClass('foot-white');
					break;
				case 'skin-item3':
					$('body').addClass('skin-item3');
					$('footer').addClass('foot-white');
					break;
				case 'skin-item4':
					$('body').addClass('skin-item4');
					$('footer').addClass('foot-white');
					break;
				case 'skin-item5':
					$('body').addClass('skin-item5');
					$('footer').addClass('foot-white');
					break;
				default:
					break;
			}
		},

		// 标签切换
		changeTab: function(btn) {
			$("#menu-list li").removeClass("menu-c");
			$(btn).addClass("menu-c");
			$(".cont-eq").hide();
			var activeTab = $(btn).find("a").attr("href");
			$(activeTab).show();
			return false;
		},

		// 滚动事件
		scrollEvent: function() {
			var scrollValue = $(document).scrollTop();
			// 右悬浮区域按钮显示或隐藏
			var $goToTop = $('#back-to-top');

			if(scrollValue > 100) {
				$goToTop.show();
			} else {
				$goToTop.hide();
			}
		}
	}

	index.init();

});