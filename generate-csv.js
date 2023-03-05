const fs = require('fs');

const parameters = require('./parameter_array');

const data = parameters.map(param => ({ parameter: param }));

const header = Object.keys(data[0]).join(',') + '\n';
const rows = data.map(row => Object.values(row).join(',') + '\n').join('');

fs.writeFileSync('parameters.csv', header + rows);
console.log('parameters.csv generated!');
