# sui-mobile-practise

###sui-mobile实践

###node+express搭建服务，sui-mobile框架基本内容实践  
页面需要引入zepto及sui-mobile的css和js  
页面必须使用$.init()初始化


###注意事项
更改index.js后需要重启服务，才有效  
toggle 开关按钮 通过input的checked属性查看状态

###工具栏切换页面
使用external，刷新页面进入新的链接  
不同的工具栏对应不同的SPA链路的入口

###创建json文件测试ajax请求
$.post请求不到tpl下的json文件 
json文件的格式一定要写正确，否则会出现错误，比如：  
$.get请求的到，但不执行回调
fetch请求的到，且可以获取到解析json出错的信息  

###SUI基本组件使用方法
1, 轮播图组件swiper，使用data-xxx把相应的属性设置在轮播容器上，  
   当页面中有多个轮播图时，data-pagination=".first-pagination"来设置轮播图相对应的分页部分  
2, 轻量级提示组件toast  
   $.toast(msg, staytime, class) eg: $.toast("添加成功", 3000, "success")  
   其中样式需要在样式表中自定义  
3, popup,

###图标字体
css里定义图标字体的时候一定注意字体的路径
