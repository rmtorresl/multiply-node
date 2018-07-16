const fs = require('fs');
const colors = require('colors');

let CreateFile = async(base, boundary = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            return reject('Base is not a number!!');
        }

        let fileName = `table-${ base }.txt`;
        let data = '';

        for (let i = 1; i <= boundary; i++) {
            data += (`${ base } * ${ i } = ${ base * i }\n`);
        }

        fs.writeFile(`./tables/${ fileName }`, data, (err) => {

            if (err) {
                return reject(err);
            }

            return resolve({ message: `The file ${ fileName.green } has been created!!` });
        });
    });
};

let ListTable = async(base, boundary = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) ||
            (!Number(boundary) || boundary <= 0)) {
            return reject('Base our Boundary are invalid!!');
        }

        console.log('=========================================='.green);
        console.log(`=========== Table of ${base} ===========`.green);
        console.log('=========================================='.green);

        for (let i = 1; i <= boundary; i++) {
            console.log(`${ base } * ${ i } = ${ base * i }`);
        }

        return resolve();
    });
};

module.exports = {
    CreateFile,
    ListTable
};