names=new Array();
i=0;
do
{
	next=window.prompt("Enter the Next Name:","");
	if (next > "") names[i]=next;
	i=i+1;
}while(next>"");
document.write("<h2>"+names.length+" names entered.</h2>");
names.sort();
document.write("<ol>");
for(i in names)
{
	document.write("<li>"+names[i]+"<br>");
}
document.write("</ol>");