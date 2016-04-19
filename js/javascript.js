// Sets main display
displayContent("main");
	
// Change galley image function
function changeimage(image){
	
	// fades out main image, chages the image, then fades in.
	$("#focusimage").stop().fadeOut(function(){
		document.getElementById("focusimage").src = image;
		fadeIn();
	});
	function fadeIn() {
		$("#focusimage").stop().fadeIn("fast");
	}
}

// Dynamically changes page to section based on button selection
function displayContent(elementId) {
	$(".content_section").hide(); 
	$("#" + elementId).show();
}

