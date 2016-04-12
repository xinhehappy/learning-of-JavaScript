function hover(e) {
	
	if(!e) var e = window.event;
	//检测浏览器的target属性是否存在，如果不存在就使用SRCElement属性。
	whichlink=(e.target)? e.target.id : e.srcElement.id;
	if(whichlink=="order") desc="order a product";
	else if(whichlink=="email") desc="send us a email";
	else if(whichlink=="complain") desc="Insult us ,our products";

	d=document.getElementById("description");
	d.innerHTML = desc;
}
function cleardesc() {
	d=document.getElementById("description");
	d.innerHTML = "";
}

orderlink=document.getElementById("order");
orderlink.onmouseover=hover;
orderlink.onmouseout=cleardesc;

emaillink=document.getElementById("email");
emaillink.onmouseover=hover;
emaillink.onmouseout=cleardesc;

complainlink=document.getElementById("complain");
complainlink.onmouseover=hover;
complainlink.onmouseout=cleardesc;