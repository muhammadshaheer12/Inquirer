import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        name: "username",
        type: "string",
        message: "what is your name? ",
    }]);
console.log("welcome! " + answer);
