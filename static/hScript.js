var h1 = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
var h2 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
var h3 = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";



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




