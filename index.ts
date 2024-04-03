#! /usr/bin/env node
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        message: "Enter your First number",
        type: "number",
        name: "firstNumber"
    },
    {
         message: "Enter your Second number",
        type: "number",
        name: "secondNumber"
    },
    {
        message: "Select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multiplication", "Division"],
    },
]);
if(answers.operator === "Addition")
{
console.log(answers.firstNumber + answers.secondNumber)
}
else if(answers.operator ==="Subtractions")
{
    console.log(answers.firstNumber - answers.secondNumber)
}
else if(answers.operator ==="Multiplication")
{
    console.log(answers.firstNumber * answers.secondNumber)
}
else if(answers.operator ==="Division")
{
    console.log(answers.firstNumber / answers.secondNumber)
}
else{
    console.log("Invalid Input")
}
