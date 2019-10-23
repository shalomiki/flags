let russia = document.getElementById('btn1');
let france = document.getElementById('btn2');
let usa = document.getElementById('btn3');

russia.onclick = function() {
	let x = setTimeout (function() {
		alert('Здравствуйте!');
	}, 1000);
};

france.onclick = function() {
	let x = setTimeout (function() {
		alert('Bon jour!');
	}, 1000);
};

usa.onclick = function() {
	let x = setTimeout (function() {
		alert('Hello!');
	}, 1000);
};



