$(function () {
	$.config = {
		// router: false
	}

	//初始化页面，必须执行
	$.init();

	//下拉刷新
	$(document).on('refresh', '.pull-to-refresh-content', function (e) {
		setTimeout(function () {
			var cardNumber = $(e.target).find('.card').length + 1;
			var cardHTML = '<div class="card">' +
                                '<div class="card-header">card'+cardNumber+'</div>' +
                                '<div class="card-content">' +
                                    '<div class="card-content-inner">' +
                                        '这里是第' + cardNumber + '个card，下拉刷新会出现第' + (cardNumber + 1) + '个card。' +
                                    '</div>' +
                                '</div>' +
                            '</div>';
            $(e.target).find('.card-container').prepend(cardHTML);
            $.pullToRefreshDone('.pull-to-refresh-content');
		}, 2000);
	});

	//弹出框
	$(document).on('click', '.alert', function () {
		$.alert('here goes alert text', function () {
			$.alert('button clicked');
		});
	});

	//弹出加载图标
	$(document).on('click', '.open-preloader', function () {
		$.showPreloader();
		setTimeout(function () {
			$.hidePreloader();
		}, 2000);
	});

	//弹出带标题的加载图标
	$(document).on('click', '.open-preloader-title', function () {
		$.showPreloader('Custom Title');
		setTimeout(function () {
			$.hidePreloader();
		}, 2000);
	});

	//打开侧边栏
	$('.panel').on('open', function () {
		console.log("the panel is opening");
	});

	// $('.showToast').on('showToast', function () {
	// 	$.toast('right');
	// });

	//显示toast
	//必须是这种写法才有效
	$(document).on('click', '.showToast', function () {
		$.toast('right right');
	});

	// 显示popup
	$(document).on('click', '.create-popup', function () {
		var popupHTML = '<div class="popup">' +
							'<div class="content-block">' +
								'<p>popup created dynamically.</p>' +
								'<p><a href="#" class="close-popup">close me</a></p>' +
							'</div>' +
						'</div>'
		$.popup(popupHTML);
	});

	console.log($('input[type="date"]').val());
	$('.label-switch').on('click', function () {
		console.log('90');
		console.log($('.label-switch').find('input')[0].checked);
	})
}) 