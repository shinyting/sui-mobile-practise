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
		$.get("../tpl/save-note.json", function (res) {
			$.toast(res.msg, 2000, "toaststyle");
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