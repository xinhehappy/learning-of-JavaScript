var numnames=0;
var names=new Array();
function SortNames()
{
	//点击add按钮就会触发onclick事件，每次都向数组中添加一元素。
	thename=document.theform.newname.value;
	uppername=thename.toUpperCase();//转换成大写
	names[numnames]=uppername;
	numnames++;
	names.sort();//数组可直接调用sort（）方法对数组中元素进行排序，按照字母表中顺序排列。
	document.theform.newname.value="";
	document.theform.sorted.value=names.join("\n");
}