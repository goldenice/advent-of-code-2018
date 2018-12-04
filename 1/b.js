var fs = require('fs');

const seen = new Set([0]);

const changes = fs.readFileSync('input.txt', { encoding: 'utf-8' })
				.split('\n')
				.map(str => str.trim())
				.map(str => parseInt(str, 10))
				.filter(num => !isNaN(num) && num != null);

let frequency = 0;
let i = 0;
while (true) {
	frequency += changes[i];
	if (seen.has(frequency)) {
		console.log('Duplicate', frequency);
		break;
	}
	seen.add(frequency);
	i++;
	if (i >= changes.length) i = 0;
}

console.log('End frequency', frequency);
