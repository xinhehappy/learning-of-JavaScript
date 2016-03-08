now = new Date();
hour = now.getHours();
mins = now.getMinutes();
secs = now.getSeconds();
document.write("<h2>");
document.write(hour + ":" + mins +":"+secs);
document.write("</h2>");

if(hour<10)
{
	document.write("goodmorning");
}
else if(hour<18)
{
	document.write("goodafternoon");
}
else if(hour<24)
{
	document.write("goodeverning");
}