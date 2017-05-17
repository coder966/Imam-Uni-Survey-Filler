window.onload = function() {
	var options = document.getElementById("selection");
	options.addEventListener('change', function(){
		chrome.tabs.executeScript({
			code: 'var nodes = document.getElementsByName("SINGLE_RSP"); for(var i=0; i<nodes.length; i++){nodes[i].value = '+options.value+';}'
		});
	});

	// handle submitting
	var submit = document.getElementById("submit");
	submit.addEventListener("click", function(){
		chrome.tabs.executeScript({
			code: 'document.getElementsByName("submit_btn")[1].click();'
		});
	})
}