const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    boundary: {
        alias: 'l',
        default: 10
    }
};

const args = require('yargs')
    .command(
        'list',
        'Prints table in console',
        options)
    .command(
        'create',
        'Creates a file with table',
        options)
    .help()
    .argv;

module.exports = {
    args
};