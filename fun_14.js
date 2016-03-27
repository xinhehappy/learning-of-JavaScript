// function changeTitle() {
// 	//使用JavaScript修改页面中的文本
// 	if(!document.getElementById) return;
// 	var newTitle=document.form1.newTitle.value;
// 	var head1=document.getElementById('h1');
// 	head1.firstChild.nodeValue=newTitle;
// }
// function showHide() {
// 	// body...
// 	if (!document.getElementById) return;
// 	var head1=document.getElementById('h1');
// 	var head2=document.getElementById('h2');


// 	var showhead1=document.form1.head1.checked;
// 	var showhead2=document.form1.head2.checked;

// 	head1.style.visibility=(showhead1) ? "visible":"hidden";
// 	head2.style.visibility=(showhead2) ? "visible":"hidden";
// }


// toggle触发器，parameter：e点击的事件
function Toggle(e) {
	//不在旧的浏览器中显示
	if(!document.getElementById) return;
	//获取事件对象
	if (!e) var e=window.event;
	//获取哪个链接主题被点击(Products/Support/contact)
	whichlink = (e.target) ? e.target.id : e.srcElement.id;
	//获取菜单对象
	obj=document.getElementById(whichlink+"menu");

	//is the menu visible?出现错误，判断语句应该是==两个等于号！！！
	visible=(obj.style.display=="block");

	//get the key object(the link itself)
	key=document.getElementById(whichlink);
	keyname=key.firstChild.nodeValue.substring[3];
	if(visible)
	{
		obj.style.display="none";
		key.firstChild.nodeValue="[+]" + keyname;
	}
	else
	{
		obj.style.display="block";
		key.firstChild.nodeValue="[-]" +keyname;
	}

}
document.getElementById("products").onclick=Toggle;
document.getElementById("support").onclick=Toggle;
document.getElementById("contact").onclick=Toggle;