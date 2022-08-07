var body = document.getElementById('body')

var timer = Math.floor(Math.random()*10000);

var count = 0;

var kotak = document.getElementById("kotak");

function hasil() {
	var tulisanMain = document.getElementById('tulisanMain');
	console.log(tulisanMain)
	
	if (tulisanMain !== null) {
		var hasil = document.createElement('p');
		hasil.setAttribute('id', 'hasil');
		var hasilText = document.createTextNode('Your reaction time is ' + count*2 + 'ms');
		hasil.appendChild(hasilText);
		kotak.removeChild(tulisanMain);
	    kotak.appendChild(hasil);
		kotak.setAttribute('id', 'kotak');
	} else {
		kotak.setAttribute('onClick', restart());
	}	
}

function restart() {
	var kotak2 = document.createElement('div');
	kotak2.setAttribute('id', 'kotak');
	
	body.removeChild(kotak);
	body.appendChild(kotak2);
	
	var rest= document.createElement('p');
	var restText = document.createTextNode('Refresh Page to Start Again');
	rest.appendChild(restText);
	rest.setAttribute('id', 'rest');
	kotak2.appendChild(rest);
}

function trigger() {
	'use strict';
	var textMulai = document.createTextNode("Click again after the box turned blue!");
	
	//kotak.setAttribute('id', 'mulai-permainan');
	//kotak.setAttribute('onClick', 'main()');
	
	var tulisan = document.getElementById("tulisan");
	
	var tulisanMain = document.createElement('p');
	
	kotak.removeChild(tulisan);
	tulisanMain.setAttribute('id', 'tulisanMain');
	
	var mainText = document.createTextNode('Click here again as soon as the box turned blue!');
	
	tulisanMain.appendChild(mainText);
	kotak.appendChild(tulisanMain);
	
	console.log(timer);
	
	setTimeout(function() {
		setInterval(function() {
			count++;
		},1);
		kotak.setAttribute('id', 'kotak-baru');
		kotak.setAttribute('onClick', 'hasil()');}, timer);
}

