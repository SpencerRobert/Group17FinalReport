//Affordance
var p1 = "We wanted to make good use of the affordance principle in our design due to the purpose of our program, to make reading text on webpages easier for users. We didn't want to take up space with big buttons and labels, specifically for our shifting feature. Keeping this principle in mind we instead decided on a key press command, shift + up arrow to shift up and shift + down arrow to shift down. Given the name of the shift key in combination of the up or down arrow creates an obvious affordance that the resulting action will be an upwards or downwards shift."

//Visibility
var p2 = "We tried our best to make use of the design principle of visibility in our program, but with our artifact being a Google Chrome extension, we found ourselves rather limited in what we could do. However a good example of this principle in our program would be the reading line adjustment GUI. In this interface we went with a flat menu design that kept widgets spaced out and organized simply, which lead to good visbility for the user.";

//Consistency
var p3 = "Our group knew it would be important to abide by the design principle of consistency in our redesign as we did not want to create any confusion for the users. A good example of this principle in our redesign would be the use of commands with the shift key. Users will require a lesser amount of reflective cognition to remember the keys because one of them is consistent for all the commands we implemented. "

//Constraints
var p4 = "Using the design principle of constraint in our redesign was very important because giving users the ability to modify the reading line meant we had to be sure they did so correctly. Our best example of constraint in our redesign would be the widgets in the reading line adjustment GUI. The sliders, colorpicker and numeric input field all had constraints on them to limit the domain of options to ones containing only valid values the users would intend to enter. ";

//Chunking
var p5 = "An example of where we used the design principle of chunking in our redesign can be seen in the reading line adjustment GUI and the shifting feature instruction menu. In the adjustment GUI, we chunked all reading line modification related widgets in there and for the shift intstruction panel we chunked information regarding the shift feature there.";

//Mapping
var p6 = "The design principle of mapping, similar to affordance, was an import part of our redesign. It helped make the rules of the system obvious to users. Our best example of this principle would be the mapping between shift + up arrow and shift + down arrow keys to shift the reading line up and down respectively.";

//Progressive disclosure
var p7 = "In the second practice studio for the course, our group learned the importance of progressive disclosure and looked to implement it in our redesign. The best example is seen when the user installs the extension they are not required to adjust the reading line or any other settings. They can immediately use the original reading line in its simplest form before moving on to more advanced options.";

//Transfer
var p8 = "Our group decided to take on this redesign specifically to address issues brought up by users of the previous extension. We knew this would make it important to keep the design principle of transfer in mind to create positive transfers for the users, specifically those coming from the old product. We kept the same cursor driven scrolling design for the reaidng line to do this. We also used widgets commonly found in user interfaces."

//Garbage in - garbage out
var p9 = "We knew our adjustment interface would require user input, so after learning about the garbage in - garbage out principle in lecture we knew it would be important to follow in our redesign. A good example of this principle in our design would be the widgets in our adjustment menu as we chose their types and constraints to assure no garbage input could be recieved from the user."

//Control
var p10 = "Our group agreed this was one of the most important design principles we made use of in our redesign. The previous design failed to make use of this principle as it didn't allow for any modification of the reading line. We made full use of this principle by creating a feature that gave users the control and ability to adjust the reading line and how it can be used.";

//Feedback
var p11 = "When considering user actions in our redesign our group knew it would be important to provide adequate feedback to the user. An example of good feedback in our redesign would be the instant effect of changes to the reading line. When the user interacts with the adjustment GUI, they can immediately see the effects of their actions on the reading line. ";

//Causality
var p12 = "Causality was an important design principle we used in our redesign because we wanted to make sure users could feel confident using and learning how to use our system. A good example of causality in our redesign would be in the use of all the widgets in the reading line adjustment menu. They were designed to take immediate affect and for none to be modified simultaneously, allowing for users to gaurentee the effects of their actions.";

//Simplicity
var p13 = "Given our artifact's one dimensional purpose, we knew it would be in the user's best interest to use this design principle and keep things very simple. A great example of simplicity in our redesign would be the reading line adjustment GUI layout which contains all available options in one visible space with widgets that are all labeled accordingly.";

//Hierarchy
var p14 = "An example of the hierarchy design principle used in our redesign is seen in the reading line adjustment GUI. In there we ordered the adjustment widgets top-down based on the amount our group found we used them in testing.";

//Efficiency
var p15 = "Our group found the design principle of efficiency made for an enjoyable experience using our artifact after the redesign. A great example of this principle in our artifact is the process of toggling the reading line on for default use, as this process only requires one step which is to make one key press.";

//Proximity
var p16 = "An example of the proximity design principle used in our redesign is seen in the reading line adjustment interface. In there we grouped the size related adjustment fields (height and width) together and the color related fields (color and opacity) to show each pair influences the same aspect of the reading line.";

//Accessibility
var p17 = "Our group wishes that we had further considered this principle during our redesign, as we did not implement any examples of traditional accessibility design. In a sense however, we followed this principle by making use of key combinations for commands that weren't already common macros which some users might not be able to use. ";

//Flexibility
var p18 = "Similar to control, we made great use of the design principle of flexibility by implementing a feature in our redesign that allowed users to make modifications to the reading line. This changed the previous artifact having one line option to a flexible version with millions of size/color combinations available to users.";

//Contrast
var p19 = "An example of the contrast design principle used in our redesign is seen between the user's webpage and the adjustment interface. We chose to create a seperate html page instead of injecting one into the webpage so it would contrast from the webpage rather than blend in.";

//Forgiveness
var p20 = "Each of us group members being frequent users of software artifacts, we understood that users tend to make mistakes and that if not handled well they could make the user feel less confident interacting with your system. We designed with the principle of forgiveness in mind and a good example of that in our redesign would be the shift amount input in the ajustment interface. If the user enters invalid input we have a script in place to switch the input to the next closest valid input.";

document.getElementById("selectDP").addEventListener("change", updateDP);

function updateDP() {
	
	var chalkboard = document.getElementById("chalkboard");
	
	var designPrinciple = document.getElementById("selectDP");
	
	switch(designPrinciple.value) {
		
		case '1':
			chalkboard.textContent = p1;
			break;
		
		case '2':
			chalkboard.textContent = p2;
			break;
			
		case '3':
			chalkboard.textContent = p3;
			break;
			
		case '4':
			chalkboard.textContent = p4;
			break;
		
		case '5':
			chalkboard.textContent = p5;
			break;
			
		case '6':
			chalkboard.textContent = p6;
			break;
			
		case '7':
			chalkboard.textContent = p7;
			break;
		
		case '8':
			chalkboard.textContent = p8;
			break;
			
		case '9':
			chalkboard.textContent = p9;
			break;
			
		case '10':
			chalkboard.textContent = p10;
			break;
			
		case '11':
			chalkboard.textContent = p11;
			break;
			
		case '12':
			chalkboard.textContent = p12;
			break;
			
		case '13':
			chalkboard.textContent = p13;
			break;
		
		case '14':
			chalkboard.textContent = p14;
			break;
			
		case '15':
			chalkboard.textContent = p15;
			break;
			
		case '16':
			chalkboard.textContent = p16;
			break;
			
		case '17':
			chalkboard.textContent = p17;
			break;
			
		case '18':
			chalkboard.textContent = p18;
			break;
			
		case '19':
			chalkboard.textContent = p19;
			break;
			
		case '20':
			chalkboard.textContent = p20;
			break;
		
		default:
			chalkboard.textContent = "Pick a design principle!";
		
	}
	
	
	
}