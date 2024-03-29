var data = {
	"indices": {
		"Helmet":0,
		"Turtle Shell":0,
		"Chestplate":1,
		"Leggings":12,
		"Boots":2,
		"Sword":3,
		"Axe":4,
		"Pickaxe":5,
		"Shovel":5,
		"Hoe":5,
		"Fishing Rod":13,
		"Bow":6,
		"Crossbow":7,
		"Trident":8,
		"Shears":9,
		"Elytra":10,
		"Flint and Steel":10,
		"Shield":10,
		"Carrot on a Stick":10,
		"Warped Fungus on a Stick":10,
		"Carved Pumpkin":11
	},
	"sets": [
		[["Protection","Fire Protection","Blast Protection","Projectile Protection"],"Aqua Affinity","Respiration","Unbreaking","Mending","Thorns"],
		[["Protection","Fire Protection","Blast Protection","Projectile Protection"],"Unbreaking","Mending","Thorns"],
		[["Protection","Fire Protection","Blast Protection","Projectile Protection"],["Depth Strider","Frost Walker"],"Unbreaking","Mending","Thorns","Soul Speed"],
		[["Sharpness","Smite","Bane of Arthropods"],"Fire Aspect","Looting","Sweeping Edge","Unbreaking","Mending","Knockback"],
		[["Sharpness","Smite","Bane of Arthropods"],["Fortune","Silk Touch"],"Efficiency","Unbreaking","Mending"],
		[["Fortune","Silk Touch"],"Efficiency","Unbreaking","Mending"],
		[["Mending","Infinity"],"Power","Punch","Flame","Unbreaking"],
		[["Multishot","Piercing"],"Quick Charge","Unbreaking","Mending"],
		[["Riptide",["Channeling","Loyalty"]],"Impaling","Unbreaking","Mending"],
		["Efficiency","Unbreaking","Mending"],
		["Unbreaking","Mending"],
		["Curse of Binding"],
		[["Protection","Fire Protection","Blast Protection","Projectile Protection"],"Unbreaking","Mending","Thorns","Swift Sneak"],
		["Luck of the Sea","Lure","Unbreaking","Mending"]
	],
	"enchants": {
		"Protection":{"level":4,"item":1,"book":1,"incompatible":["Projectile Protection","Fire Protection","Blast Protection"]},
		"Fire Protection":{"level":4,"item":2,"book":1,"incompatible":["Projectile Protection","Protection","Blast Protection"]},
		"Feather Falling":{"level":4,"item":2,"book":1,"incompatible":[]},
		"Blast Protection":{"level":4,"item":4,"book":2,"incompatible":["Projectile Protection","Fire Protection","Protection"]},
		"Projectile Protection":{"level":4,"item":2,"book":1,"incompatible":["Protection","Fire Protection","Blast Protection"]},
		"Thorns":{"level":3,"item":8,"book":4,"incompatible":[]},
		"Respiration":{"level":3,"item":4,"book":2,"incompatible":[]},
		"Depth Strider":{"level":3,"item":4,"book":2,"incompatible":["Frost Walker"]},
		"Aqua Affinity":{"level":1,"item":4,"book":2,"incompatible":[]},
		"Sharpness":{"level":5,"item":1,"book":1,"incompatible":["Smite","Bane of Arthropods"]},
		"Smite":{"level":5,"item":2,"book":1,"incompatible":["Sharpness","Bane of Arthropods"]},
		"Bane of Arthropods":{"level":5,"item":2,"book":1,"incompatible":["Sharpness","Smite"]},
		"Knockback":{"level":2,"item":2,"book":1,"incompatible":[]},
		"Fire Aspect":{"level":2,"item":4,"book":2,"incompatible":[]},
		"Looting":{"level":3,"item":4,"book":2,"incompatible":[]},
		"Efficiency":{"level":5,"item":1,"book":1,"incompatible":[]},
		"Silk Touch":{"level":1,"item":8,"book":4,"incompatible":["Fortune"]},
		"Unbreaking":{"level":3,"item":2,"book":1,"incompatible":[]},
		"Fortune":{"level":3,"item":4,"book":2,"incompatible":["Silk Touch"]},
		"Power":{"level":5,"item":1,"book":1,"incompatible":[]},
		"Punch":{"level":2,"item":4,"book":2,"incompatible":[]},
		"Flame":{"level":1,"item":4,"book":2,"incompatible":[]},
		"Infinity":{"level":1,"item":8,"book":4,"incompatible":["Mending"]},
		"Luck of the Sea":{"level":3,"item":4,"book":2,"incompatible":[]},
		"Lure":{"level":3,"item":4,"book":2,"incompatible":[]},
		"Frost Walker":{"level":2,"item":4,"book":2,"incompatible":["Depth Strider"]},
		"Mending":{"level":1,"item":4,"book":2,"incompatible":["Infinity"]},
		"Curse of Binding":{"level":1,"item":8,"book":4,"incompatible":[]},
		"Curse of Vanishing":{"level":1,"item":8,"book":4,"incompatible":[]},
		"Impaling":{"level":5,"item":4,"book":2,"incompatible":[]},
		"Riptide":{"level":3,"item":4,"book":2,"incompatible":["Loyalty","Channeling"]},
		"Loyalty":{"level":3,"item":1,"book":1,"incompatible":["Riptide"]},
		"Channeling":{"level":1,"item":8,"book":4,"incompatible":["Riptide"]},
		"Multishot":{"level":1,"item":4,"book":2,"incompatible":["Piercing"]},
		"Piercing":{"level":4,"item":1,"book":1,"incompatible":["Multishot"]},
		"Quick Charge":{"level":3,"item":2,"book":1,"incompatible":[]},
		"Soul Speed":{"level":3,"item":8,"book":4,"incompatible":[]},
		"Sweeping Edge":{"level":3,"item":4,"book":2,"incompatible":[]},
		"Swift Sneak":{"level":3,"item":8,"book":4,"incompatible":[]}
	},
	"numerals": ["I","II","III","IV","V"],
	"updated":false,
	"orders":[[0],[0,1],[0,1,2],[0,1,2,3],[0,1,3,2,4],[0,1,3,2,4,5],[0,1,3,2,4,5,6],[0,1,3,2,4,5,6,7]], //technically you could compute this in real-time but it's complicated
	"images":{
		"Helmet":"enchanted_helmet.gif",
		"Turtle Shell":"enchanted_turtle_shell.gif",
		"Chestplate":"enchanted_chestplate.gif",
		"Leggings":"enchanted_leggings.gif",
		"Boots":"enchanted_boots.gif",
		"Sword":"enchanted_sword.gif",
		"Axe":"enchanted_axe.gif",
		"Pickaxe":"enchanted_pickaxe.gif",
		"Shovel":"enchanted_shovel.gif",
		"Hoe":"enchanted_hoe.gif",
		"Bow":"enchanted_bow.gif",
		"Crossbow":"enchanted_crossbow.gif",
		"Trident":"enchanted_trident.gif",
		"Shears":"enchanted_shears.gif",
		"Elytra":"enchanted_elytra.gif",
		"Flint and Steel":"enchanted_flint.gif",
		"Shield":"enchanted_shield.gif",
		"Carrot on a Stick":"enchanted_carrot_on_stick.gif",
		"Warped Fungus on a Stick":"enchanted_fishing_rod.gif",
		"Carved Pumpkin":"carved_pumpkin.png",
		"Fishing Rod":"enchanted_fishing_rod.gif"
	}
}