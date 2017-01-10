window.onload = function(){
	if(!getElementById || !getElementsByTagName) return false;
	var links = document.getElementsByTagName("a");
	for (var i=0; i<links.length; i++){
		if(links[i].getAttribute("class") == "popup"){
			links[i].onclick = function(){
				popup(this.getAttribute("href"));
				return false;
			}
		}
	}
}
function popUp(winURL){
	window.open(winURL,"popUp", "width=320,height=500");
}