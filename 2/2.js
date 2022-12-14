const fs = require("fs");

// [ [a1, b1], [a2, b2], ...]
const rounds = fs.readFileSync("input.txt").toString().split("\n").map(r => r.split(" ")).filter(r => !!r[0]);

// Part 1
let score = 0;
for (const round of rounds) {
	const a = round[0];
	const b = round[1];
	switch (a) {
		// Rock
		case "A":
			switch (b) {
				case "X":
					score += 4 
					break;		
				case "Y":
					score += 8 
					break;	
				case "Z":
					score += 3
					break;
			}
			break;
		// Paper
		case "B":
			switch (b) {
				case "X":
					score += 1 
					break;		
				case "Y":
					score += 5
					break;	
				case "Z":
					score += 9
					break;
			}
			break;
		// Scissors
		case "C":
			switch (b) {
				case "X":
					score += 7
					break;		
				case "Y":
					score += 2
					break;	
				case "Z":
					score += 6	
					break;
			}
			break;
	}
}

// Part 2
score = 0
for (const round of rounds) {
	const a = round[0];
	const b = round[1];
	switch (a) {
		// Rock
		case "A":
			switch (b) {
				// Lose
				case "X":
					score += 3
					break;		
				// Draw
				case "Y":
					score += 4
					break;	
				// Win
				case "Z":
					score += 8
					break;
			}
			break;
		// Paper
		case "B":
			switch (b) {
				case "X":
					score += 1
					break;		
				case "Y":
					score += 5
					break;	
				case "Z":
					score += 9
					break;
			}
			break;
		// Scissors
		case "C":
			switch (b) {
				case "X":
					score += 2
					break;		
				case "Y":
					score += 6
					break;	
				case "Z":
					score += 7
					break;
			}
			break;
	}
}
console.log(score);
