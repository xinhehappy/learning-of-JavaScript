var x=100,y=150;
function pos(dx,dy) {
	if(!document.getElementById) return;
	x += 10*dx;
	y += 10*dy;
	obj = document.getElementById('square');
	obj.style.top=y;
	obj.style.left=x;
}
function hideSquare() {
	// body...
	if(!document.getElementById) return;
	obj = document.getElementById('square');
	obj.style.display="none";

}
function showSquare() {
	// body...
	if(!document.getElementById) return;
	obj = document.getElementById('square');
	obj.style.display="block";

}