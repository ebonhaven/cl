const Rx = require('rxjs');
const { prompt } = require('inquirer');
let prompts = new Rx.Subject();

const chalk = require('chalk');
const Menu = require('./Menu');

const questions = [
    {
        type: 'input',
        name: 'initial',
        message: 'What is your name?',
    }
]

module.exports = class EbonhavenCmd {
    static start() {
        let self = this;
        prompt(prompts).ui.process.subscribe(EbonhavenCmd.update, EbonhavenCmd.error, EbonhavenCmd.complete);
        prompts.next(questions[0]);
    }

    static menu() {
        const questions = Menu.load();
        console.log(chalk.magenta(`Welcome to the menu!`));
        prompts.next(questions[0]);
    }

    static update(res) {
        console.log(res);
        switch (res.name) {
            case 'initial':
                EbonhavenCmd.menu();
                break;
            default:
                EbonhavenCmd.complete();
        }
        
    }

    static error(err) {
        console.error(err);
    }

    static complete() {
        process.exit();
    }
}