window.onload = function(){
	console.log("Hi");
	createItemSelection();
	document.getElementById("item").addEventListener("change", (event) => {
		clearEnchantmentSelections();
		createEnchantmentSelection(event.target.value);
	});
}

function createItemSelection(){
	var select = document.getElementById("item");
	for (var key of Object.keys(data.indices)) {
		var opt = document.createElement("option");
		opt.value = data.indices[key];
		opt.innerHTML = key;
		select.appendChild(opt);
	}
}

function clearEnchantmentSelections(){
	document.getElementById("ench-select").innerHTML=
		"<h3>Enter the level of each enchantment you're using, or leave the field blank.</h3>";
	document.getElementById("ench-select").style.visibility = "visible";
}

function createEnchantmentSelection(index){
	var div = document.getElementById("ench-select");
	var group = true;
	for (var opt of data.sets[index]) {
		var tab = document.createElement("table");
		var row = tab.insertRow(0);
		if (Array.isArray(opt)) {
			for (var ench of opt) {
				if (Array.isArray(ench)) {
					var cell = row.insertCell(0);
					var intab = document.createElement("table");
					for (var sub of ench) {
						var inrow = intab.insertRow(0);
						var subcell = inrow.insertCell(0);
						subcell.innerHTML = sub + ": ";
						var level = document.createElement("select");
						level.id = sub;
						var empty = document.createElement("option");
						empty.value = "";
						empty.innerHTML = " ";
						level.appendChild(empty);
						for (let i = 1; i <= data.enchants[sub].level; i++) {
							var levelOption = document.createElement("option");
							levelOption.value = i;
							levelOption.innerHTML = data.numerals[i-1];
							level.appendChild(levelOption);
						}
						subcell.appendChild(level);
						level.addEventListener("change", (event) => {
							console.log(event.target.id);
							resetIncompatibles(event.target.id);
						});
					}
					cell.appendChild(intab);
				} else {
					var cell = row.insertCell(row.cells.length);
					cell.innerHTML = ench + ": ";
					var level = document.createElement("select");
					level.id = ench;
					var empty = document.createElement("option");
					empty.value = "";
					empty.innerHTML = " ";
					level.appendChild(empty);
					for (let i = 1; i <= data.enchants[ench].level; i++) {
						var levelOption = document.createElement("option");
						levelOption.value = i;
						levelOption.innerHTML = data.numerals[i-1];
						level.appendChild(levelOption);
					}
					level.addEventListener("change", (event) => {
						console.log(event.target.id);
						resetIncompatibles(event.target.id);
					});
					cell.appendChild(level);
				}
			}
		} else {
			console.log("Adding option " + opt);
			var cell = row.insertCell(0);
			cell.innerHTML = opt + ": ";
			var level = document.createElement("select");
			level.id = opt;
			var empty = document.createElement("option");
			empty.value = "";
			empty.innerHTML = " ";
			level.appendChild(empty);
			for (let i = 1; i <= data.enchants[opt].level;i++) {
				var levelOption = document.createElement("option");
				levelOption.value = i;
				levelOption.innerHTML = data.numerals[i-1];
				level.appendChild(levelOption);
			}
			level.addEventListener("change", (event) => {
				console.log(event.target.id);
				resetIncompatibles(event.target.id);
			});
			cell.appendChild(level);
		}
		if (group) {
			row.className = "g1";
		} else {
			row.className = "g2";
		}
		group = !group;
		div.appendChild(tab);
	}
}

function resetIncompatibles(enchant){
	console.log(enchant);
	for (var incomp of data.enchants[enchant].incompatible) {
		var tmp = document.getElementById(incomp);
		console.log("Incompatible with " + enchant + ": " + incomp);
		if (tmp != null) {
			tmp.value = "";
		}
	}
}

function createList(){
	var enchants = {};
	for (var dropdown of document.getElementsByTagName("select")) {
		if (dropdown.value != "" && dropdown.id != "item") {
			enchants[dropdown.id] = dropdown.value;
		}
	}
	return enchants;
}

function calculateOrder(){
	var enchants = createList();
	console.log(enchants);
}
