function changehead() {
	i=document.form1.heading.selectedIndex;//获取选中选项的index
	headcolor=document.form1.heading.option[i].value;
	document.getElementById('h1').style.color=headcolor;	
}
function changebody() {
	i=document.form1.body.selectedIndex;
	bodycolor=document.form1.body.option[i].value;
	document.getElementById('p1').style.color=bodycolor;
}