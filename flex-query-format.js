const sqlFormatter = require('@leoiii12/sql-formatter');
const fs = require('fs');

const src = process.argv[2];
const srcFile = fs.readFileSync(src);

console.log(sqlFormatter.format(srcFile.toString('utf-8'), { language: "flex" }));