import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 1000);
    });
};
async function BIRTHDAY() {
    let rainbow = chalkAnimation.rainbow("---=> HAPPY BIRTHDAY WISH ---<=");
    await sleep();
    rainbow.stop();
}
await BIRTHDAY();
// for question 
async function WISH() {
    let que = await inquirer.prompt([
        {
            type: "list",
            name: "pers",
            message: (`Enter your friend name`),
            choices: ['HINA', 'KHAN', 'ALI', 'DANISH'],
        },
        {
            type: "input",
            name: "wish1",
            message: (`enter!! `)
        }
    ]);
    switch (que.pers) {
        case "HINA":
            console.log((chalk.yellow) `HAPPY BIRTHDAY TO YOU :${que.pers}`);
            break;
        case "KHAN":
            console.log((chalk.yellow) `HAPPY BIRTHDAY TO YOU :${que.pers}`);
            break;
        case "ALI":
            console.log((chalk.yellow) `HAPPY BIRTHDAY TO YOU :${que.pers}`);
            break;
        case "DANISH":
            console.log((chalk.yellow) `HAPPY BIRTHDAY TO YOU :${que.pers}`);
            break;
    }
}
await WISH();
