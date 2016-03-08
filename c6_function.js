function Card(name,address,work,home) {
	this.name=name;
	this.address=address;
	this.work=work;
	this.home=home;
	//this表示当前对象——由函数创建的那个对象
}
function PrintCard()
{
	line1="Name"+this.name+"<br>\n";
	line2="Address"+this.address+"<br>\n";
	line3="work"+this.work+"<br>\n";
	line4="Home"+this.home+"<br>\n";
	document.write(line1+line2+line3+line4);
}