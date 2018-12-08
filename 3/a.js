const fs = require('fs');

function lineToClaim(input) {
	const parts = input.split(' ');
	const id = parts[0].slice(1);
	const xy = parts[2].slice(0, parts[2].length - 1).split(',');
	const wh = parts[3].split('x');

	return {
		id,
		x: parseInt(xy[0], 10),
		y: parseInt(xy[1], 10),
		w: parseInt(wh[0], 10),
		h: parseInt(wh[1], 10),
	};
}

// function calculateOverlap(s1, s2) {
// 	const maxLeft = Math.max(s1.x, s2.x);
// 	const minRight = Math.min(s1.x + s1.w, s2.x + s2.w);
// 	if (minRight <= maxLeft) return null;

// 	const maxTop = Math.max(s1.y, s2.y);
// 	const minBottom = Math.min(s1.y + s1.h, s2.y + s2.h);
// 	if (minBottom <= maxTop) return null;

// 	return {
// 		x: maxLeft,
// 		y: maxTop,
// 		w: minRight - maxLeft,
// 		h: minBottom - maxTop,
// 	};
// }

const claims = fs.readFileSync('input.txt', { encoding: 'utf-8' })
	.split('\n')
	.filter(l => l != null && l.length > 0)
	.map(lineToClaim);

console.log('Number of claims', claims.length);

const maxX = claims.reduce((max, claim) => Math.max(max, claim.x + claim.w), 0);
const maxY = claims.reduce((max, claim) => Math.max(max, claim.y + claim.h), 0);

console.log('Max coordinates: ', maxX, maxY);

const matrix = [];
for (var x = 0; x < maxX; x++) {
	matrix[x] = [];
	for (var y = 0; y < maxY; y++) {
		matrix[x][y] = 0;
	}
}

console.log('Matrix is zero filled');

claims.forEach(claim => {
	for (var x = claim.x; x < (claim.x + claim.w); x++) {
		for (var y = claim.y; y < (claim.y + claim.h); y++) {
			matrix[x][y]++;
		}
	}
});

let overlapCount = 0;
for (var x = 0; x < maxX; x++) {
	for (var y = 0; y < maxY; y++) {
		if (matrix[x][y] > 1) overlapCount++;
	}
}

console.log('Overlap count: ', overlapCount)


// const overlaps = claims.map(claim1 => {
// 	return claims.filter(claim2 => claim1 != claim2 && calculateOverlap(claim1, claim2) != null).map(claim2 => calculateOverlap(claim1, claim2))
// }).reduce((tot, acc) => [ ...tot, ...acc ],  []);

// console.log('Number of overlaps', overlaps.length);