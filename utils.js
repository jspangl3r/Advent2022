const fs = require("fs");
	
function getLines(input) {
	return fs.readFileSync(input).toString().split("\n").filter(r => !!r)
}

module.exports = getLines;
