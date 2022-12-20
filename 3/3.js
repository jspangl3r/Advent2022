const fs = require("fs")
const getLines = require("../utils")

// Part 1
const rucksacks = getLines("p1.txt").filter(r => !!r)
const lowerCaseMap = new Map()
const upperCaseMap = new Map()
for (let i = 0; i < 26; i++) {
	lowerCaseMap.set(String.fromCharCode(i + 97), i + 1)
	upperCaseMap.set(String.fromCharCode(i + 65), i + 27)
} 
let total = rucksacks.reduce((total, rucksack) => {
	const half_len = rucksack.length / 2
	const a = rucksack.substr(0, half_len)
	const b = rucksack.substr(half_len)
	let item = null;
	[...a].forEach(aa => {
		if ([...b].includes(aa)) {
			item = aa
		}
	})
	total += lowerCaseMap.get(item) || upperCaseMap.get(item)	
	return total
}, 0)
console.log(total)

// Part 2
groupIdx = 0
elves = getLines("p2.txt").reduce((arr, e, i) => {
	if ((i + 1) % 3 === 0) {
		arr[groupIdx].push(e)
		groupIdx++
	} else if (arr[groupIdx]) {
		arr[groupIdx].push(e)
	} else {
		arr[groupIdx] = [e]	
	}			
	return arr
}, [])
const groupIds = elves.reduce((arr, group) => {
	const groupId =  [...group[0]].find(i => [...group[1]].includes(i) && [...group[2]].includes(i));
	arr.push(groupId);
	return arr
}, [])
total = groupIds.reduce((acc, id) => acc += lowerCaseMap.get(id) || upperCaseMap.get(id), 0);
console.log(total)