const fs = require('fs');
// const fs = require('express');
// const fs = require('./fs');

let base = 6;
let data = '';

for (let i = 1; i <= 9; i++) {
    data += (`${ base } * ${ i } = ${ base * i }\n`);
}

fs.writeFile(`tables/table-${ base }.txt`, data, (err) => {

    if (err) {
        throw err;
    }

    console.log('The file has been saved!');
});