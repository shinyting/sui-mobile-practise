$(function () {
	//初始化页面，必须执行
	$.init();

	//添加阅读记录弹出层效果
	$(document).on('click', '.open-newnote', function () {
		$.popup('.popup-newnote');
	});

	//确定添加阅读记录
	$('.save-note').on('click', function () {
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
	});
}) 