const Rx = require('rxjs');
const { prompt } = require('inquirer');

const chalk = require('chalk');
const Menu = require('./Menu');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }
]

module.exports = class EbonhavenCmd {
    static start() {
        let prompts = new Rx.Subject();
        prompt(prompts).ui.process.subscribe(this.update, this.error, this.complete);
        prompts.next(questions);
    }

    static menu() {
        const questions = Menu.load();
        console.log(chalk.magenta(`Welcome to the menu!`));
        prompt(questions).then((res) => {
            Menu.handle(res);
        })
    }

    update(res) {
        console.log(res);
    }

    error(err) {
        console.error(err);
    }

    complete() {
        process.exit();
    }
}