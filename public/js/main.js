$(function () {
	$.config = {
		// router: false
	}
	$.init();
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

	$(document).on('click', '.alert', function () {
		$.alert('here goes alert text', function () {
			$.alert('button clicked');
		});
	});

	$(document).on('click', '.open-preloader', function () {
		$.showPreloader();
		setTimeout(function () {
			$.hidePreloader();
		}, 2000);
	});
	$(document).on('click', '.open-preloader-title', function () {
		$.showPreloader('Custom Title');
		setTimeout(function () {
			$.hidePreloader();
		}, 2000);
	});
}) 