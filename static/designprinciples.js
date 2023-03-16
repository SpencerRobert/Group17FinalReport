document.getElementById("selectDP").addEventListener("change", updateDP);

function updateDP() {
	
	var chalkboard = document.getElementById("chalkboard");
	
	var designPrinciple = document.getElementById("selectDP");
	
	switch(designPrinciple.value) {
		
		case '1':
			chalkboard.textContent = "Affordance:\nWe used affordance here by ... testing testing testing testing  testingte stingte stingte sting";
			break;
		
		case '2':
			chalkboard.textContent = "Visibility:\nWe used visability here by ...";
			break;
			
		case '3':
			chalkboard.textContent = "Consistency:\nWe used consistency here by ...";
			break;
		
		default:
			chalkboard.textContent = "Pick a design principle!";
		
	}
	
	
	
}