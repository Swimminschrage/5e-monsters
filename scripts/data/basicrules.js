/* global registerMonster */
/* global registerSource */
"use strict";

(function () {
	var sourceName = "Basic Rules v1",
		i, toAdd;

	registerSource(sourceName, false);

	toAdd = [
		[ "Adult Red Dragon", 8 ],
		[ "Air Elemental", 9 ],
		[ "Allosaurus", 9 ],
		[ "Animated Armor", 9 ],
		[ "Ankylosaurus", 10 ],
		[ "Ape", 10 ],
		[ "Awakened Shrub", 10 ],
		[ "Awakened Tree", 10 ],
		[ "Axe Beak", 11 ],
		[ "Baboon", 11 ],
		[ "Badger", 11 ],
		[ "Banshee", 11 ],
		[ "Basilisk", 12 ],
		[ "Bat", 12 ],
		[ "Black Bear", 12 ],
		[ "Blink Dog", 12 ],
		[ "Blood Hawk", 13 ],
		[ "Boar", 13 ],
		[ "Brown Bear", 13 ],
		[ "Bugbear", 13 ],
		[ "Camel", 14 ],
		[ "Cat", 14 ],
		[ "Centaur", 14 ],
		[ "Chimera", 14 ],
		[ "Cockatrice", 15 ],
		[ "Constrictor Snake", 15 ],
		[ "Crab", 15 ],
		[ "Crocodile", 15 ],
		[ "Cyclops", 16 ],
		[ "Death Dog", 16 ],
		[ "Deer", 16 ],
		[ "Dire Wolf", 16 ],
		[ "Doppelganger", 17 ],
		[ "Draft Horse", 17 ],
		[ "Eagle", 17 ],
		[ "Earth Elemental", 17 ],
		[ "Elephant", 18 ],
		[ "Elk", 18 ],
		[ "Fire Elemental", 18 ],
		[ "Fire Giant", 19 ],
		[ "Flameskull", 19 ],
		[ "Flesh Golem", 20 ],
		[ "Flying Snake", 20 ],
		[ "Flying Sword", 20 ],
		[ "Frog", 21 ],
		[ "Frost Giant", 21 ],
		[ "Gargoyle", 21 ],
		[ "Ghost", 22 ],
		[ "Ghoul", 22 ],
		[ "Giant Ape", 22 ],
		[ "Giant Badger", 23 ],
		[ "Giant Bat", 23 ],
		[ "Giant Boar", 23 ],
		[ "Giant Centipede", 23 ],
		[ "Giant Constrictor Snake", 24 ],
		[ "Giant Crab", 24 ],
		[ "Giant Crocodile", 24 ],
		[ "Giant Eagle", 24 ],
		[ "Giant Elk", 25 ],
		[ "Giant Fire Beetle", 25 ],
		[ "Giant Frog", 25 ],
		[ "Giant Goat", 25 ],
		[ "Giant Hyena", 26 ],
		[ "Giant Lizard", 26 ],
		[ "Giant Octopus", 26 ],
		[ "Giant Owl", 26 ],
		[ "Giant Poisonous Snake", 27 ],
		[ "Giant Rat", 27 ],
		[ "Giant Scorpion", 27 ],
		[ "Giant Sea Horse", 27 ],
		[ "Giant Shark", 28 ],
		[ "Giant Spider", 28 ],
		[ "Giant Toad", 28 ],
		[ "Giant Vulture", 29 ],
		[ "Giant Wasp", 29 ],
		[ "Giant Weasel", 29 ],
		[ "Giant Wolf Spider", 29 ],
		[ "Gnoll", 30 ],
		[ "Goat", 30 ],
		[ "Goblin", 30 ],
		[ "Grick", 30 ],
		[ "Griffon", 31 ],
		[ "Harpy", 31 ],
		[ "Hawk", 31 ],
		[ "Hell Hound", 32 ],
		[ "Hill Giant", 32 ],
		[ "Hippogriff", 32 ],
		[ "Hobgoblin", 32 ],
		[ "Hunter Shark", 33 ],
		[ "Hydra", 33 ],
		[ "Hyena", 33 ],
		[ "Jackal", 33 ],
		[ "Killer Whale", 34 ],
		[ "Kobold", 34 ],
		[ "Lion", 34 ],
		[ "Lizard", 34 ],
		[ "Lizardfolk", 35 ],
		[ "Mammoth", 35 ],
		[ "Manticore", 35 ],
		[ "Mastiff", 35 ],
		[ "Medusa", 36 ],
		[ "Merfolk", 35 ],
		[ "Minotaur", 35 ],
		[ "Mule", 37 ],
		[ "Mummy", 37 ],
		[ "Nothic", 37 ],
		[ "Ochre Jelly", 38 ],
		[ "Octopus", 38 ],
		[ "Ogre", 38 ],
		[ "Orc", 39 ],
		[ "Owl", 39 ],
		[ "Owlbear", 39 ],
		[ "Panther", 39 ],
		[ "Pegasus", 40 ],
		[ "Phase Spider", 40 ],
		[ "Plesiosaurus", 40 ],
		[ "Poisonous Snake", 40 ],
		[ "Polar Bear", 41 ],
		[ "Pony", 41 ],
		[ "Pteranodon", 41 ],
		[ "Quipper", 41 ],
		[ "Rat", 41 ],
		[ "Raven", 42 ],
		[ "Reef Shark", 42 ],
		[ "Rhinoceros", 42 ],
		[ "Riding Horse", 42 ],
		[ "Saber-Toothed Tiger", 43 ],
		[ "Satyr", 43 ],
		[ "Scorpion", 43 ],
		[ "Sea Horse", 43 ],
		[ "Skeleton", 43 ],
		[ "Spectator", 44 ],
		[ "Spider", 44 ],
		[ "Stirge", 44 ],
		[ "Stone Golem", 45 ],
		[ "Swarm of Bats", 45 ],
		[ "Swarm of Insects", 45 ],
		[ "Swarm of Poisonous Snakes", 46 ],
		[ "Swarm of Quippers", 46 ],
		[ "Swarm of Rats", 46 ],
		[ "Swarm of Ravens", 46 ],
		[ "Tiger", 47 ],
		[ "Triceratops", 47 ],
		[ "Troll", 47 ],
		[ "Twig Blight", 47 ],
		[ "Tyrannosaurus Rex", 48 ],
		[ "Vulture", 48 ],
		[ "Warhorse", 48 ],
		[ "Water Elemental", 49 ],
		[ "Weasel", 49 ],
		[ "Werewolf", 49 ],
		[ "Wight", 50 ],
		[ "Winter Wolf", 50 ],
		[ "Wolf", 50 ],
		[ "Worg", 51 ],
		[ "Wyvern", 51 ],
		[ "Yeti", 51 ],
		[ "Young Green Dragon", 52 ],
		[ "Zombie", 52 ],
		[ "Acolyte", 53 ],
		[ "Bandit", 53 ],
		[ "Berserker", 53 ],
		[ "Commoner", 54 ],
		[ "Cultist", 54 ],
		[ "Guard", 54 ],
		[ "Knight", 54 ],
		[ "Mage", 55 ],
		[ "Priest", 55 ],
		[ "Thug", 55 ],
	];

	for ( i = 0; i < toAdd.length; i++ ) {
		registerMonster(toAdd[i][0], sourceName, toAdd[i][1]);
	}
}());
