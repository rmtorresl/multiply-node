const { CreateFile, ListTable } = require('./multiply/multiply');
const { args } = require('./config/yargs');
const colors = require('colors');


let command = args._[0];

switch (command) {

    case 'list':

        ListTable(args.base, args.boundary).then(result => {})
            .catch(error => {
                console.log(error);
            });

        break;

    case 'create':

        CreateFile(args.base, args.boundary).then(result => {
                console.log(result.message)
            })
            .catch(error => {
                console.log(error);
            });

        break;

    default:
        console.log(`Command ${ command } not recognized`);
}