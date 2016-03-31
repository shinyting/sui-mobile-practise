$(function () {
	//初始化页面，必须执行
	$.init();

	//添加阅读记录弹出层效果
	$(document).on('click', '.open-newnote', function () {
		$.popup('.popup-newnote');
	});

	function saveNote () {
		//表单校验
		var nName, nAuthor, nStyle, nSum, nImg, nLike, nStatus, params = {};
		nName = $('#nName').val();
		nAuthor = $('#nAuthor').val();
		nStyle = $('#nStyle').val();
		nSum = $('#nSum').val();
		nImg = $('#nImg').val();
		nLike = $('#nLike')[0].checked;
		nStatus = $('.status-group span.choosen').html();
		if (!nName || !nAuthor || !nStyle || !nSum || !nImg) {
			$.toast("信息要填写完整哦...", 2000, "redtoast");
			return;
		}
		params.bookName = nName;
		params.bookAuthor = nAuthor;
		params.bookType = nStyle;
		params.bookComment = nSum;
		params.bookimg = "images/pic/" + nImg;
		params.bookLike = nLike;
		params.bookStatus = nStatus;
		$.post("http://192.168.1.232:3000/bookList", params, function (res) {
			if (res) {
				$.toast("添加成功", 2000, "greentoast");
				$.closeModal(".popup-newnote");
			}
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

	function setStatus () {
		$(this).addClass("choosen");
		$(this).siblings().removeClass("choosen");
	}

	//首页初始化
	//确定添加阅读记录
	$('.save-note').on('click', saveNote);
	//添加阅读记录弹层设置阅读状态效果
	$('.status-group span').on('click', setStatus);

	//index page
	$(document).on("pageInit", "#index", function (e, pageId, $page) {
		console.log(pageId);
		//首页由SUI路由进入的情况
		//确定添加阅读记录
		$('.save-note').on('click', saveNote);
		//添加阅读记录弹层设置阅读状态效果
		$('.status-group span').on('click', setStatus);
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
					$.toast("成功添加到收藏列表", 2000, "greentoast");
				});
			}
			else {
				$(starIcon).addClass('unstar');
				$.get("../tpl/save-note.json", function (res) {
					$.toast("成功从收藏列表移除本书", 2000, "greentoast");
				});
			}
		});
	});

	//book-review-page
	$(document).on("pageInit", "#book-review-page", function (e, pageId, $page) {
		console.log(pageId);
	});

	// timeline mine page
	function myPageHandler () {
		$('.go-comment').on('click', function () {
			$.router.load("/bookReview");
		});
		$('.add-favorite').on('click', function () {
			var params = {}, bookId, bookName, bookAuthor, ebox, curElement;
			curElement = $(this);
			if ($(curElement).hasClass("mini-btn-green-fill")) {
				return;
			}
			ebox = $(this).parents(".item-content");
			bookId = $(ebox).attr("data-id");
			bookName = $(ebox).find('.item-title').html();
			bookAuthor = $(ebox).find('.item-subtitle').html();
			params.bookId = bookId;
			params.bookName = bookName;
			params.bookAuthor = bookAuthor;
			$.post("http://192.168.1.232:3000/collect", params, function (res) {
				$.toast("成功加入收藏阁", 2000, "greentoast");
				$(curElement).html("已入收藏阁");
				$(curElement).addClass("mini-btn-green-fill");
			});
		});
	}
	myPageHandler();
	$(document).on("pageInit", "#mine", function (e, pageId, $page) {
		console.log(pageId);
		myPageHandler();
	});
}) 