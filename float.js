var draggingObj=null; //dragging Dialog
var diffX=0;
var diffY=0;
var temp=null;
//绑定鼠标事件
function dragging(obj) {
	temp = obj;
	obj.style.position='fixed';
	document.addEventListener("mousedown", mouseDown);
	document.addEventListener("mousemove", mouseMove);
	document.addEventListener("mouseup", mouseUp);
}
//是否点击的是指定div
function getDraggingDialog(e){
	var target=e.target;
	while (target != undefined && target != null && target.tagName.toUpperCase() != 'BODY'){ 
	if (target == temp){ 
		return true; 
	} 
		target = target.parentNode; 
	} 
	return false; 
}

function mouseDown(e) 
{
	if(getDraggingDialog(e)){
		draggingObj = temp;
	};
	
	if(draggingObj!=null){
		diffX=e.clientX-draggingObj.offsetLeft;
		diffY=e.clientY-draggingObj.offsetTop;
	}
				
}
function mouseMove(e) 
{
	if(draggingObj){
		draggingObj.style.left=(e.clientX-diffX)+'px';
		draggingObj.style.top=(e.clientY-diffY)+'px';
	}
}
function mouseUp() 
{
	draggingObj =null;
	diffX=0;
	diffY=0;
}

//js 创建浮动div
function createFloatDiv() {
	var div = document.getElementById("dlgTest");
	if(div==null||div==undefined) {
		var body = document.getElementsByTagName("body")[0];
		body.innerHTML = "<div id='dlgTest' style='top: 120px;right: 50px;height:294px; width:308px;background-color:rgba(179, 179, 179,0.9);border-radius:9px'>"+
						"<div style='margin: 12px; height:24px'>"+
							"<img src='img/logo.jpg' style='height:30px; width:30px;'></img>"+
							"<h1 style='position: relative;bottom: 43px;left: 40px;font-size: 18px;font-family: fantasy;'>悬浮div</h1></div>"+
						
						"<div style='height: 40px;width: 183px;margin: 19px auto;background-color: #fff; border-radius: 5px; text-align: center;' onclick='transform()'>"+
							"<span style='line-height: 40px;'>测试1</span></div>"+
						"<div style='height: 40px;width: 183px;margin: 19px auto;background-color: #fff; border-radius: 5px; text-align: center;' onclick='help()'>"+
							"<span style='line-height: 40px;'>测试2</span></div>"+
						"<div style='height: 40px;width: 183px;margin: 19px auto;background-color: #fff; border-radius: 5px; text-align: center;' onclick='accessorialService()'>"+
							"<span style='line-height: 40px;'>测试3</span></div>"+
						
						"<div style='height: 40px;width: 183px;margin: 19px auto;background-color: #eda751; border-radius: 5px; text-align: center;'  onclick='submit()'>"+
						   " <span style='line-height: 40px;'>提交</span> </div></div>"+body.innerHTML;
	}
	div = document.getElementById("dlgTest");		
	dragging(div);
}

function transform() {
	alert("测试1");
}

function help() {
	alert("测试2");
}

function  accessorialService() {
	alert("测试3");
}

function submit() {
	alert("提交");
}