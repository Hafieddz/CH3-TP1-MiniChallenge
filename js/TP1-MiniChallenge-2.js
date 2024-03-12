const fs = require('fs');
const targetFile = fs.readFileSync('../log.txt', 'utf-8');

console.log(targetFile);
