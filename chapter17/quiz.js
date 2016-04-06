/**
点击start Quiz时，先从服务器获取questions数据，每次获取一条，
获取成功后点击submit,检验回答是否正确，ajaxCallback值设置为
获取下一个题目的方法。
*/

//global variable qn is the current question number
var qn=0;
//load the questions from the xml file
function getQuestions() {
	obj=document.getElementById('question');
	obj.firstChild.nodeValue="(please wait)";
	ajaxCallback = nextQuestion;
	ajaxRequest("questions.xml");
}

//display the next question
function nextQuestion(){
	questions = ajaxreq.responseXML.getElementsByTagName("q");
	obj=document.getElementById("question");
	if(qn < questions.length){
		var q=questions[qn].firstChild.nodeValue;
		obj.firstChild.nodeValue=q;
	}else{
		obj.firstChild.nodeValue="no more question."
	}
}

//check the user's answer
function checkAnswer(){
	//从服务器中xml文件中获取到的answers
	answers = ajaxreq.responseXML.getElementsByTagName("a");
	a=answers[qn].firstChild.nodeValue;
	answerfield = document.getElementById("answer");
	if (a == answerfield.value) {
		alert("Correct!");
	}
	else{
		alert("Incorrect,the correct answer is :"+a);
	}
	qn += 1;
	answerfield.value="";
	nextQuestion();
}

start=document.getElementById("startq");
start.onclick=getQuestions;
sub=document.getElementById("submit");
sub.onclick=checkAnswer;