#!/usr/bin/env node

const program = require('commander');
const EbonhavenCmd = require('./EbonhavenCmd');

program
    .version('0.0.1')
    .description('Ebonhaven command line tool');

program
    .command('start')
    .description(`Prints your name to the console`)
    .action(() => {
        EbonhavenCmd.start()
    });

program.parse(process.argv);