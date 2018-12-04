var fs = require('fs');

console.log(fs.readFileSync('input.txt', { encoding: 'utf-8' })
				.split('\n')
				.map(str => str.trim())
				.map(str => parseInt(str, 10))
				.filter(num => !isNaN(num) && num != null)
				.reduce((tot, num) => tot + num, 0));
