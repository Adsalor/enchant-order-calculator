window.onload = function(){
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
	if (!data.updated) {
		document.getElementById("item").remove(0);
		data.updated = true;
	}
	document.getElementById("content").innerHTML=
		"<h3>Enter the level of each enchantment you're using, or leave the field blank.</h3>";
	document.getElementById("content").style.visibility = "visible";
}

function createEnchantmentSelection(index){
	var div = document.getElementById("content");
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
							resetIncompatibles(event.target.id);
							if (event.target.value != 0) {
								document.getElementById("confirm").style.visibility = "visible";
							}
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
						resetIncompatibles(event.target.id);
						if (event.target.value != 0) {
							document.getElementById("confirm").style.visibility = "visible";
						}
					});
					cell.appendChild(level);
				}
			}
		} else {
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
				resetIncompatibles(event.target.id);
				if (event.target.value != 0) {
					document.getElementById("confirm").style.visibility = "visible";
				}
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
		if (tmp != null) {
			tmp.value = "";
		}
	}
}

function createList(){
	var enchants = [];
	for (var dropdown of document.getElementsByTagName("select")) {
		if (dropdown.value != "" && dropdown.id != "item") {
			enchants.push([dropdown.id,dropdown.value]);
		}
	}
	return enchants;
}

function enchVal(e) {
	return data.enchants[e[0]].item * e[1];
}

function enchCompare(l,r) {
	return enchVal(r) - enchVal(l);
}

function getIconData(item) {
	if (item[1] == 0) {
		return "<img src=\"./images/" + data.images[item[0]] + "\" title=\"" + item[0] + "\"/>" + " (" + item[0] + ")";
	} else {
		return "<img src=\"./images/enchanted_book.gif\" title=\"" + item[0] + "\"/>" + " (" + item[0] + ")";
	}
}

function calculateOrder(){
	var enchants = createList();
	enchants.sort(enchCompare);
	console.log(enchants);
	var ordered = [[document.getElementById("item").options[document.getElementById("item").selectedIndex].outerText,0]];
	for (let i = 0; i < enchants.length; i++) {
		ordered.push(enchants[data.orders[enchants.length - 1][i]])
	}
	console.log(ordered);
	var output = document.getElementById("content");
	output.innerHTML=
		"<h3>Combination Order:</h3>";
	document.getElementById("item-select").style.visibility = "hidden";
	document.getElementById("confirm").style.visibility = "hidden";
	var width = 1;
	var currentIndex = 0;
	var stepNum = 1;
	while (width < ordered.length) {
		if (currentIndex+width >= ordered.length) {
			width *= 2;
			currentIndex = 0;
		} else {
			output.innerHTML += "<h4> " + stepNum + ". Combine: " + 
				getIconData(ordered[currentIndex]) + " + " + 
				getIconData(ordered[currentIndex + width]) + "<\h4>";
			currentIndex += 2*width;
			stepNum++;
		}
	}
}
