//Visibility of system status
var h1 = "Our group believes we did a good job of implementing Jakob Neilson's first usability heuristic, Visibility of System Status, in our HCI artifact. The first case of use in our prototype is a persistant indicator used to show the user whether the reading line is currently active or not. This indicator consists of the changing extension icon which is swapped when the reading line is toggled on and off, showing an image that includes the reading line and one that doesn't respectively. Other use cases include feedback indicators such as the appearance of the shift instruction menu along with the line no longer following the user's cursor when the freeze command has been executed. We think we did a good job in displaying an appropriate amount of system data/feedback without over doing it and creating unecessary distractions for the user.";

//Match between the system and the real world
var h2 = "Our group believes we did a good job of implementing Jakob Neilson's second usability heuristic, Match Between the System and the Real World, in our HCI artifact. When creating the interfaces our group recognized that users and developers do not speak the same and the technical jargon we used to communicate was not going to make sense to the users. We made sure to leave it out of our prototype and developed our system to communicate with users in a way they could easily make sense of. It was difficult to find control implementations for this specific artifact that created the affordances necessary for the user to easily work the system without direct instructions. We instead provided those instructions so no inference would be required from the user. We also understood the typical user's experience technology and interfaces from other programs so we made sure to use designs that they would find familiar, such as the basic widgets in our adjustment interface that can be used to adjust properties of the reading line. However, the best example of this heuristic in our prototype would have to be the control of our line shifting feature involving the up and down arrows to move the reading line up and down.";

//User control & freedom
var h3 = "During our heuristic evaluation of the system, our group realized we could have done a better job implementing Jakob Neilson's third usability heuristic, User Control & Freedom, in our HCI artifact. We think that we did a good job of allowing users to in a sense free themselves of the system by having a quick commmand to toggle the reading line off. However, a user would only know how to execute that command if they hover over the Improved Reading Line icon to see the tool tip which explains the user must press ctrl + alt + - to do so. We could have better implemented this heuristic by creating a shut off method that would be more obvious to users. We also realized users may be hesistant to refresh their browser if they made adjustments to the line that they didn't want to lose. An option to restore those properties could have eliminated that issue and made for a better implementation of this heuristic.";

//Consistency & standards
var h4 = "In our heuristic evaluation of the system, our group decided that we did a sufficient job in implementing Jakob Neilson's fourth usability heuristic, Consistency & Standards, in our HCI artifact. We described our application of this heuristic as sufficient because we think the best use of it in our design is the similarity it had to the previous version. For all the aspects of the design that users did not complain about, we kept it consistent in our new design because we already understood it positively contributed to the user experience. However we do think there is lots of room for improvement in regards to this heuristic because among the new design aspects we added we think this principle could have been applied better between them.";

//Error prevention
var h5 = "Our group quickly concluded that work needed to be done to better apply Jakob Neilson's fifth usability heuristic, Error Prevention, when we conducted our heuristic evaluation. We think during development of our prototype that we did a good job keeping this heuristic in mind as when adding features we tested all components thoroughly to prevent the possibility of users experiencing errors when using them. However the group noticed more errors when testing the finished prototype that users may experience - specifically regarding our use of Google Chrome local storage. We understand that to best abide by this heuristic that these errors would need to be addressed in a future redesign which is why we concluded that there was lots of room for improvement in our evaluation.";

//Recognition vs. Recall in User Interfaces
var h6 = "Recognition means recognizing the information, thing, or event as familiar in our memory. Recall on the other hand means to retrieve the related information from the memory. Our project uses the method of recognition, to help user identify and recognize the next line to be read in the text. The Reading Line helps the user recognize and highlight text and allows the user to pay attention and be able to analyze and absorb information. It also helps users that become lost in a block of text to recognize the most recent line they had read. The Reading Line helps the user recognize event, pieces of information from text as being familiar and allows for heightened focus, it also in a way helps the recall of certain information from the text to be easier as the mind is more focused on what is being read instead of the reading process itself.";

//Flexibility and Efficiency of use
var h7 = "The seventh heuristic explains the importance of speeding up the interaction for expert users and allowing efficient use of system, while also catering to inexperienced users. Our project is very flexible and efficient to use, the Reading line extension can be accessed and used by clicking the chrome extension tab, but it can also be accessed using the shortcut (Ctrl-Option-(-)) on mac. This shortcut allows for efficiency and allows experienced users to easily and quickly access the Reading line. Another feature that shows the flexibility and efficiency of the Reading line is the freezing shortcut. This shortcut allows the line to freeze at a certain part of the page, as to highlight certain text that is useful or that a user may want to revisit. Not to mention the ability to toggle size of Reading line, and availability to switch Reading line to any color. These features are examples of the high flexibility and efficiency of Reading line.";

//Aesthetic and Minimalist Design
var h8 = "The main goal of the minimalist design is to provide only what is necessary to users and to avoid overwhelming them with information. We cannot have too many objects which result in loss of salience for objects of interest. We need balance, but we also need to implement less rules of interaction, so the user does not have to learn and remember all those rules and learn every element separately. This is exemplified in the Reading line adjustment interface as it provides the user with only the information required to use the tool correctly. Our group agreed that there is a lot of room for improvement regarding this heuristic as in our prototype we did not add CSS styling to our interface to improve its aesthetic. In the future we would recommend maintaining the minimalist aspects of the interface but putting a bigger focus on the aesthetic aspects. ";

//Help Users Recognize, Diagnose and Recover from errors
var h9 = "Dealing with errors is one of the heuristics our group agrees would need to be considered with priority in a future redesign of this HCI. In our current prototype, we are still encountering errors that are not being handled in a user friendly manner. In a future iteration our group would want to create an error handling system that would display popups to the user explaining the error that occurred. Currently the errors we are experiencing with the prototype are resolved with a quick refresh of the current browser, but we don't have the error handling in place to notify the user of that solution. We think adding error handling would have a significant impact on the user experience and would make for a great example of this heuristic in use.";

//Help & Documentation
var h10 = "Help and documentation are not a replacement for a good design, but they are important to have to in the event a user needs a guide. The Reading line is very easy to use and all the interface tools are clear and specific in how they are to be used. Everything on the interface is labeled to guide the user how to change the specifications of the Reading line. The features that help user change specifications include opacity, color, width, height, and our menu includes the shortcut features for freezing the Reading line and shifting it. These labels are there as a guide to assure the user is aware of how to use the tool correctly and to allow themselves to have a positive user experience.";

function updateButton(val) {
	
	
	switch (val) {
		
		case '1':
			document.getElementById("hbtn").textContent = "1. Visibility of System Status";
			break;
		
		case '2':
			document.getElementById("hbtn").textContent = "2. Match Between the System and the Real World";
			break;
			
		case '3':
			document.getElementById("hbtn").textContent = "3. User Control & Freedom";
			break;
		
		case '4':
			document.getElementById("hbtn").textContent = "4. Consistency & Standards";
			break;
			
		case '5':
			document.getElementById("hbtn").textContent = "5. Error Prevention";
			break;
		
		case '6':
			document.getElementById("hbtn").textContent = "6. Recognition vs. Recall in User Interfaces";
			break;
			
		case '7':
			document.getElementById("hbtn").textContent = "7. Flexibility and Efficiency of use";
			break;
			
		case '8':
			document.getElementById("hbtn").textContent = "8. Aesthetic and Minimalist Design";
			break;
			
		case '9':
			document.getElementById("hbtn").textContent = "9. Help Users Recognize, Diagnose and Recover from errors";
			break;
			
		case '10':
			document.getElementById("hbtn").textContent = "10. Help & Documentation";
			break;
		
		default:
			document.getElementById("hbtn").textContent = "1. Visibility of System Status";
	}	
	
	document.getElementById("hbtn").value = val;
	
	
}


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
			
		case '4':
			replaceText(h4);
			break;
			
		case '5':
			replaceText(h5);
			break;
			
		case '6':
			replaceText(h6);
			break;
			
		case '7':
			replaceText(h7);
			break;
			
		case '8':
			replaceText(h8);
			break;
			
		case '9':
			replaceText(h9);
			break;
			
		case '10':
			replaceText(h10);
			break;
		
		default:
			replaceText("Select a heuristic!");
		
	}
	
	return;
	
}

async function replaceText(newText) {
	
	hbtn = document.getElementById('hbtn');
	
	hbtn.disabled = true;
	
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
			hbtn.disabled = false;
			clearInterval(fillInterval);
		}
		else {
			hPanel.textContent = hPanel.textContent + newText.charAt(t2);
			t2++;
		}
		
		}, 15);
	
}




