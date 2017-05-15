window.onload = function() {
	var options = document.getElementById("selection");
	options.addEventListener('change', function(){
		chrome.tabs.executeScript({
			code: 'var nodes = document.getElementsByName("SINGLE_RSP"); for(var i=0; i<nodes.length; i++){nodes[i].value = '+options.value+';}'
		});
	});
}