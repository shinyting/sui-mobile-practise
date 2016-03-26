$(function () {
	//初始化页面，必须执行
	$.init();

	//添加阅读记录弹出层效果
	$(document).on('click', '.open-newnote', function () {
		$.popup('.popup-newnote');
	});

	function saveNote () {
		//表单校验
		var nName, nAuthor, nStyle, nSum;
		nName = $('#nName').val();
		nAuthor = $('#nAuthor').val();
		nStyle = $('#nStyle').val();
		nSum = $('#nSum').val();
		if (!nName || !nAuthor || !nStyle || !nSum) {
			$.toast("信息要填写完整哦...", 2000, "redtoast");
			return;
		}
		$.get("../tpl/save-note.json", function (res) {
			$.toast(res.msg, 2000, "greentoast");
			$.closeModal('.popup-newnote');
		});
		//使用fetch方法请求数据
		// fetch("tpl/save-note.json").then(function (res) {
		// 	return res.json()
		// }).then (function (json) {
		// 	console.log('parsed json', json)
		// }).catch(function (ex) {
		// 	console.log('parsing failed', ex)
		// });
	}

	//首页初始化
	//确定添加阅读记录
	$('.save-note').on('click', saveNote);

	//index page
	$(document).on("pageInit", "#index", function (e, pageId, $page) {
		console.log(pageId);
		//首页由SUI路由进入的情况
		//确定添加阅读记录
		$('.save-note').on('click', saveNote);
	});

	//book-detail-page
	$(document).on("pageInit", "#book-detail-page", function (e, pageId, $page) {
		console.log(pageId);
		//将book添加到阅读计划
		$('#addWish').on('click', function () {
			var starIcon = $(this).find('.icon-star');
			if ($(starIcon).hasClass('unstar')) {
				$(starIcon).removeClass('unstar');
				$.get("../tpl/save-note.json", function (res) {
					$.toast("成功添加到阅读列表", 2000, "greentoast");
				});
			}
			else {
				$(starIcon).addClass('unstar');
				$.get("../tpl/save-note.json", function (res) {
					$.toast("成功从阅读列表移除本书", 2000, "greentoast");
				});
			}
		});
	});

	//book-review-page
	$(document).on("pageInit", "#book-review-page", function (e, pageId, $page) {
		console.log(pageId);
	});
}) 