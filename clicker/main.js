var data = {cookies: 0, increment: 1, autoclickers: {}};

var autoclickers = [{name: "Bacteria-I", increment: 182475528479, cost: 10}, {name: "Bacteria-II", increment: 10, cost: 250}, {name: "Bacteria-III", increment: 10000, cost: 1000}]
var autoclickerconvert = {}

/*function myfunction() {
	data.cookies += 100;
	/*const element = document.querySelector(".autoclicker-content")
	for (let x in autoclickers) {
		var clickerdiv = document.createElement("div");
		var clickerimg = document.createElement("img").src = `images/${autoclickers.x.name}.png`;
		var clickertext = document.createElement("h1");
		clickerdiv.innerText = x;
		document.body.appendChild(clickerdiv);
	}
}*/

setInterval(function(){ runautoclickers(); }, 50);

setTimeout(load, 1000);

function load() {
	for (let x in autoclickers) {
		autoclickerconvert[autoclickers[x].name] = x;
		var div = document.createElement("div");
		div.classList.add(autoclickers[x].name);
		div.onclick = function() { purchaseautoclicker(x); }
		document.querySelector(".autoclicker-content").appendChild(div);
		var selector = document.querySelector(`.${autoclickers[x].name}`)
		var el = document.createElement("h2"); el.textContent = autoclickers[x].name; selector.appendChild(el);
		var el = document.createElement("p"); el.textContent = `Cost: ${autoclickers[x].cost} - CPS: +${autoclickers[x].increment}`; selector.appendChild(el);
	}
	selectpanel("autoclicker")
}

function runautoclickers() {
	let count = 0
	for (let x in data.autoclickers) {
		count += autoclickers[x].increment * data.autoclickers[String(x)];
	}
	data.cookies += (count / 20);
	updatecookie();
}

function clickcookie() {
	data.cookies += data.increment;
	document.querySelector(".cookie").style.animation = "animation: click 200ms";
	updatecookie();
}

function updatecookie() {
	document.querySelector(".count").textContent = Math.round(data.cookies).toLocaleString();
}

function upgradecookie() {
	data.increment += 1
	document.querySelector(".increment").textContent = data.increment.toLocaleString();
}
function selectpanel(panel) {
	document.querySelector(".autoclicker-content").style.display = "none";
	document.querySelector(".upgrade-content").style.display = "none";
	document.querySelector(`.${panel}-content`).style.display = "flex";
	document.querySelector(".autoclicker-panel").style.backdropFilter = "none";
	document.querySelector(".upgrade-panel").style.backdropFilter = "none";
	document.querySelector(`.${panel}-panel`).style.backdropFilter = "brightness(5%)";
}

function purchaseautoclicker(ac) {
	var autoclicker = autoclickers[ac];
	if (data.cookies >= autoclicker.cost) {
		(!(ac in data.autoclickers)) ? data.autoclickers[ac] = 1 : data.autoclickers[ac] ++;
		data.cookies -= autoclicker.cost
		updatecookie();
	} else {
		alert("Can't afford!");
	}
}