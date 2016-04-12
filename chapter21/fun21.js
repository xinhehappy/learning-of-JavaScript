var t=false,current;
function SetupMenu() {
	if(!document.getElementsByTagName) return;
	items=document.getElementsByTagName("li");
	for(i=0;i<items.length;i++)
	{
		//找到一级菜单，如果是二级子菜单则继续循环。
		if (items[i].className != "menu") continue;
		thelink=findChild(items[i],"A");
		thelink.onmouseover=ChangeColor;
		thelink.onmouseover=ShowMenu;
		thelink.onmouseout=StartTimer;

		//检查是否有子菜单，如果有则隐藏
		if(ul=findChild(items[i],"UL"))
		{
			ul.style.display="none";
			for(j=0;j<ul.childNodes.length;j++)
			{
				ul.childNodes[j].onmouseover=ResetTimer;
				ul.childNodes[j].onmouseout=StartTimer;
			}
		}
	}
}

//本意是鼠标移到链接上就改变当前背景色，但未实现。
//可以在CSS中使用hover实现此功能！！！
function ChangeColor(e){
	if(!e) var e = window.event;
	thislink=(e.target) ? e.target : e.srcElement;
	parent=thislink.parentNode;//得到li节点
	parent.style.background="green";
}
//find the first child object of a particular type
function findChild(obj,tag){
	cn=obj.childNodes;
	for(k=0;k<cn.length;k++)
	{
		if(cn[k].nodeName==tag) return cn[k];
	}
	return false;
}

function ShowMenu(e){
	if(!e) var e = window.event;
	thislink=(e.target) ? e.target : e.srcElement;
	ResetTimer();
	//hide the previous menu if any.
	if(current) HideMenu(current);

	//we want the li not the link
	thislink=thislink.parentNode;
	current=thislink;
	//find the submenu if any
	ul=findChild(thislink,"UL");
	if(!ul) return;
	//如果有子菜单，则显示出来
	ul.style.display="block";
}
function HideMenu(thelink){
	//find the submenu if any
	ul=findChild(thelink,"UL");
	if(!ul) return;
	ul.style.display="none";
}

function ResetTimer(){
	if(t) window.clearTimeout(t);
}

function StartTimer(){
	t=window.setTimeout("HideMenu(current)",200);
}

window.onload=SetupMenu;