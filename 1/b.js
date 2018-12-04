var fs = require('fs');

// Read list of changes just like in challenge A
const changes = fs.readFileSync('input.txt', { encoding: 'utf-8' })
				.split('\n')
				.map(str => str.trim())
				.map(str => parseInt(str, 10))
				.filter(num => !isNaN(num) && num != null);

let frequency = 0;
let i = 0;
const seen = new HashSet([0]);

while (true) {
	// Determine new frequency and break if we've seen it before
	frequency += changes[i];
	if (seen.has(frequency)) break;

	// Add current frequency to seen set
	seen.add(frequency);
	
	// Counter management
	i++;
	if (i >= changes.length) i = 0;
}

// Output the first duplicate (we broke the loop on first dup)
console.log('First duplicate frequency', frequency);
