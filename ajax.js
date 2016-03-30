var ajaxreq = false, ajaxCallback;
function ajaxRequest(filename) {
	
	try{
		ajaxreq=new XMLHttpRequest();
	}catch(error){
		//ie5 or ie6
		try{
			ajaxreq=new ActiveXObject("Microsoft.XMLHTTP");
		}catch(error){
			return false;
		}
	}

	//打开ajax请求
	ajaxreq.open("GET",filename);
	//请求状态属性改变是，调用响应程序
	ajaxreq.onreadystatechange=ajaxResponse;
	//发送请求，如果使用的post方法，那么send方法的参数就是需要发送的数据
	//如果是get方法，send方法的参数使用null就可以了。
	ajaxreq.send(null);


}
function ajaxResponse(){
	//发送的请求的状态是否已经结束readyState=4表示结束
	if (ajaxreq.readyState !=4) return;
	//当一个ajax请求成功后，status属性将被设置为200.
	if (ajaxreq.status ==200) {
		//请求成功
		if (ajaxCallback) {
			ajaxCallback();
		}
	}
	else
	{
		alert("Request failed:"+ajaxreq.statusText);
	}

	return true;
}