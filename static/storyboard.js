document.getElementById("selectStory").addEventListener("change", updateStory);

function updateStory() {
	
	var sb1 = document.getElementById("sb1");
	var sb2 = document.getElementById("sb2");
	var sb3 = document.getElementById("sb3");
	
	var storyToShow = document.getElementById("selectStory").value;
	
	if (storyToShow == "sb1") {
		
		sb1.style.display = "block";
		sb2.style.display = "none";
		sb3.style.display = "none";
		
	}
	else if (storyToShow == "sb2") {
		
		sb2.style.display = "block";
		sb1.style.display = "none";
		sb3.style.display = "none";
		
	}
	else if (storyToShow == "sb3") {
		
		sb3.style.display = "block";
		sb2.style.display = "none";
		sb1.style.display = "none";
		
	}
	
}