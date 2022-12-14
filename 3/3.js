const fs = require("fs")

const rucksacks = fs.readFileSync("input.txt").toString().split("\n").filter(r => !!r)

// Part 1
const lowerCaseMap = new Map()
const upperCaseMap = new Map()
for (let i = 0; i < 26; i++) {
	lowerCaseMap.set(String.fromCharCode(i + 97), i + 1)
	upperCaseMap.set(String.fromCharCode(i + 65), i + 27)
} 
const total = rucksacks.reduce((total, rucksack) => {
	const half_len = rucksack.length / 2
	const a = rucksack.substr(0, half_len)
	const b = rucksack.substr(half_len)
	let item = null;
	[...a].forEach(aa => {
		if ([...b].includes(aa)) {
			item = aa;
		}
	})
	total += lowerCaseMap.has(item) ? lowerCaseMap.get(item) : upperCaseMap.get(item)	
	return total
}, 0)
console.log(total)
