#! /usr/bin/env node   
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter FirstNumber",
        type: "number",
        name: "firstnumber",
    },
    { message: "Enter SecondNumber", type: "number", name: "secondnumber" },
    {
        message: "Select  One Of The Operator",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
if (answer.operator === "Substraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
