//Visibility of system status
var h1 = "Our group believes we did a good job of implementing Jakob Neilson's first usability heuristic, Visibility of System Status, in our HCI artifact. The first case of use in our prototype is a persistant indicator used to show the user whether the reading line is currently active or not. This indicator consists of the changing extension icon which is swapped when the reading line is toggled on and off, showing an image that includes the reading line and one that doesn't respectively. Other use cases include feedback indicators such as the appearance of the shift instruction menu along with the line no longer following the user's cursor when the freeze command has been executed. We think we did a good job in displaying an appropriate amount of system data/feedback without over doing it and creating unecessary distractions for the user.";

//Match between the system and the real world
var h2 = "Our group believes we did a good job of implementing Jakob Neilson's second usability heuristic, Match Between the System and the Real World, in our HCI artifact. When creating the interfaces our group recognized that users and developers do not speak the same and the technical jargon we used to communicate was not going to make sense to the users. We made sure to leave it out of our prototype and developed our system to communicate with users in a way they could easily make sense of. It was difficult to find control implementations for this specific artifact that created the affordances necessary for the user to easily work the system without direct instructions. We instead provided those instructions so no inference would be required from the user. We also understood the typical user's experience technology and interfaces from other programs so we made sure to use designs that they would find familiar, such as the basic widgets in our adjustment interface that can be used to adjust properties of the reading line. However, the best example of this heuristic in our prototype would have to be the control of our line shifting feature involving the up and down arrows to move the reading line up and down.";

//User control & freedom
var h3 = "During our heuristic evaluation of the system, our group realized we could have done a better job implementing Jakob Neilson's third usability heuristic, User Control & Freedom, in our HCI artifact. We think that we did a good job of allowing users to in a sense free themselves of the system by having a quick commmand to toggle the reading line off. However, a user would only know how to execute that command if they hover over the Improved Reading Line icon to see the tool tip which explains the user must press ctrl + alt + - to do so. We could have better implemented this heuristic by creating a shut off method that would be more obvious to users. We also realized users may be hesistant to refresh their browser if they made adjustments to the line that they didn't want to lose. An option to restore those properties could have eliminated that issue and made for a better implementation of this heuristic.";


function updateHPanel(val) {
	
	
	switch(val) {
		
		case '1':
			replaceText(h1);
			break;
		
		case '2':
			replaceText(h2);
			break;
			
		case '3':
			replaceText(h3);
			break;
		
		default:
			replaceText("Select a heuristic!");
		
	}
	
	return;
	
}

async function replaceText(newText) {
	
	btn1 = document.getElementById('btn1');
	btn2 = document.getElementById('btn2');
	btn3 = document.getElementById('btn3');
	
	btn1.disabled = true;
	btn2.disabled = true;
	btn3.disabled = true;
	
	var hPanel = document.getElementById("hPanel");
	var oldLength = hPanel.textContent.length;
	
	var t1 = 0;
	
	deleteInterval = setInterval(function () {
		
		if (t1 > oldLength) {
			fillPanel(newText);
			clearInterval(deleteInterval);
		}
		else {
			var len = hPanel.textContent.length-1;
			hPanel.textContent = hPanel.textContent.slice(0, len);
			t1++;
		}
		
		}, 5);
	
}

function fillPanel(newText) {
	
	var newLength = newText.length;
	var t2 = 0;
	
	fillInterval = setInterval(function () {
		
		if (t2 > newLength) {
			btn1.disabled = false;
			btn2.disabled = false;
			btn3.disabled = false;
			clearInterval(fillInterval);
		}
		else {
			hPanel.textContent = hPanel.textContent + newText.charAt(t2);
			t2++;
		}
		
		}, 15);
	
}




