const questions = [
    {
        type: 'list',
        name: 'menuChoice',
        message: 'Menu',
        choices: [
            { name: 'Play', value: 0 },
            { name: 'Character Select', value: 1 },
            { name: 'Exit', value: 2 }
        ]
    }
];

module.exports = class Menu {
    static load() {
        return questions;
    }

    static handle(res) {
        console.log(res);
        switch (res.menuChoice) {
            case 2:
                process.exit();
        }
    }
}