window.onload = function(){
	var rightDiv = document.getElementById("right");
	var mainDiv = document.getElementById("main");
	//鼠标移动事件
	window.onmousemove = function(e){
		var x = e.clientX;//鼠标x坐标
		var addWidth = "";//鼠标移动后选取框增加的宽度
		var widthBefore = mainDiv.offsetWidth -2;//选取框变化前的宽度
		addWidth = x - getPosition(mainDiv).left - widthBefore;//鼠标移动后增加的宽度
		mainDiv.style.width = addWidth + widthBefore + "px";//选取框变化后
	}
}

//获取元素相对于屏幕左边的距离，利用offsetLeft
function getPosition(node){
		var left = node.offsetLeft;
		var top = node.offsetTop;
		var parent = node.offsetParent;
	while (parent !=unll) {
		left += parent.offsetLeft;
		top += parent.offsetTop;
		parent =parent.offsetParent;
	}
	return {"left":left,"top":top};
}

