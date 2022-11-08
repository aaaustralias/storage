var data = {cookies: 0, increment: 1};

var autoclickers = [{name: "Bacteria-I", increment: 1, cost: 100}, {name: "Bacteria-II", increment: 10, cost: 1000}]

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

setTimeout(load, 1000);

function load() {
	data.cookies += 100;
	let 
	for (let x in autoclickers) {
		var div = document.createElement("div");
		div.innerText = autoclickers[x].name;
		document.body.appendChild(div);
	}
	clickcookie();
}

function clickcookie() {
  data.cookies += data.increment;
  document.querySelector(".count").textContent = data.cookies.toLocaleString();
	document.querySelector(".cookie").style.animation = "animation: click 200ms";
}

function upgradecookie() {
	data.increment += 1
	document.querySelector(".increment").textContent = data.increment.toLocaleString();
}
function selectpanel(panel) {
	document.querySelector(".autoclicker-content").style.display = "none";
	document.querySelector(".upgrade-content").style.display = "none";
	document.querySelector(`.${panel}-content`).style.display = "flex";
}