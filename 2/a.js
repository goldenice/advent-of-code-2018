const fs = require('fs');

function getLetterCounts(line) {
	return line.split('').reduce((tot, letter) => ({ ...tot, [letter]: (tot[letter] || 0) + 1 }), {});
}

function containsLettersAmountOfTimes(amount, counts) {
	return Object.keys(counts).map(l => counts[l]).filter(c => c == amount).length > 0;
}

const letterCounts = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n')
				.filter(line => line != null && line.length > 0)
				.map(getLetterCounts);

const twices = letterCounts.filter(line => containsLettersAmountOfTimes(2, line)).length;
const thrices = letterCounts.filter(line => containsLettersAmountOfTimes(3, line)).length;

console.log('Checksum', twices * thrices);

