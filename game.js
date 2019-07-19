let view = {
	//this method takes a string message and displays it
	// in the message display area
	displayMessage: function(msg) {
		let messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},
	displayMiss: function(location) {
		let cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	},
	displayHit: function(location) {
		let cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	}
};

let ship1 = { locations: ["10", "20", "30"], hits: ["", "", ""] };
let ship2 = { locations: ["32", "33", "34"], hits: ["", "", ""] };
let ship3 = { locations: ["63", "64", "65"], hits: ["", "", "hit"] };