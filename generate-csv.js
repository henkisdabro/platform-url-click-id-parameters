const fs = require('fs');
const parameters = require('./parameter_array');

const data = parameters.map(param => ({ parameter: param }));
const csv = data.map(item => item.parameter).join(',');

fs.writeFileSync('parameters.csv', csv);
