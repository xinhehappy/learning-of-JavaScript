// ==UserScript==
//@name WhiteonBlack
//@namespace http://www.jsworkshop.com
//@description display paragraphs in white text on black
//@include *
//==UserScript==
//change the color of each paragraph
var zParagraphs = document.getElementsByTagName("p");
for(var i=0;i<zParagraphs.length;i++)
{
	zParagraphs[i].style.backgroundColor="#000000";//black
	zParagraphs[i].style.color="#ffffff";	
}