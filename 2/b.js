const fs = require('fs');

function calcDiff(a, b) {
	let diff = [];
	for (let i = 0; i < Math.max(a.length, b.length); i++) {
		if (a[i] != b[i]) diff.push(i);
	}
	return diff;
}

const ids = fs.readFileSync('input.txt', { encoding: 'utf-8' })
	.split('\n')
	.map(x => x.trim())
	.filter(x => x != null && x.length != 0);

const idcombos = ids.map(fst => ids.map(snd => [ fst, snd ])).reduce((tot, acc) => [ ...tot, ...acc ], []);

console.log(idcombos.filter(c => calcDiff(...c).length == 1).map(c => c[0].slice(0, calcDiff(...c)[0]) + c[0].slice(calcDiff(...c)[0] + 1, c[0].length)));
