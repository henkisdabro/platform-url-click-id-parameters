const fs = require('fs');

const data = require('./parameter_array.js').data;
const header = Object.keys(data[0]).join(',') + '\n';
const rows = data.map(obj => Object.values(obj).join(',') + '\n').join('');

fs.writeFileSync('./parameter_commaseparated.csv', header + rows);
