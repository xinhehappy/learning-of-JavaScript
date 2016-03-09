total=0;
for(i=1;i<=5000;i++)
{
	num=Math.random();
	total += num;
	if(i%1000==0)
	{
		document.write("Generated "+i+" numbers <br>");
	}

}
average = total/5000;
average = Math.round(average * 1000)/1000;//平均值舍为小数点后三位
document.write("<H2>Average of 5000 numbers:"+average+"</H2>");