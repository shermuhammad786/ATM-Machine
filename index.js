#!/usr/bin/env node
import inquirer from "inquirer";
function developer() {
    console.log("\n \n \n \n");
    console.log("                                      ********************      ");
    console.log("                                    *************************      ");
    console.log("This ATM program develeped by... ********* HAFIZ S.M ABRO ******   ");
    console.log("                                    *************************      ");
    console.log("                                      ********************      ");
    console.log("\n \n \n \n");
}
function thanks() {
    console.log("---------------------------------------------------------------------------");
    console.log("---------------------------------------------------------------------------");
    console.log("                    THANKS FOR USING ATM...                                ");
    console.log("---------------------------------------------------------------------------");
    console.log("---------------------------------------------------------------------------");
}
function welcome() {
    console.log("---------------------------------------------------------------------------");
    console.log("---------------------------------------------------------------------------");
    console.log("                    WELCOME TO THE WORLDS NEW ATM...                       ");
    console.log("---------------------------------------------------------------------------");
    console.log("---------------------------------------------------------------------------");
}
async function atm() {
    let balance = 1000000;
    welcome();
    async function balanceQuery() {
        // check balance of withdraw
        const checking = await inquirer.prompt([{
                message: "Check Your Balance or withdraw",
                type: "list",
                name: "checking",
                choices: ["Check Balance", "Withdraw"],
            }]);
        if (checking.checking === "Withdraw") {
            const withdraw = await inquirer.prompt([{
                    message: "How Much do you want to Withdraw",
                    type: "number",
                    name: "withdraw",
                }]);
            console.log(balance -= withdraw.withdraw, " Your remaning Balance");
            const wantContinue = await inquirer.prompt([{
                    message: "Do You Want to Continue",
                    type: "list",
                    name: "cont",
                    choices: ["Yes", "No"],
                }]);
            if (wantContinue.cont === "Yes") {
                contunu();
            }
            else {
                developer();
                thanks();
            }
        }
        else {
            console.log("Your Balance is ", balance);
            const wantContinue = await inquirer.prompt([{
                    message: "Do You Want to Continue",
                    type: "list",
                    name: "cont",
                    choices: ["Yes", "No"],
                }]);
            if (wantContinue.cont === "Yes") {
                contunu();
            }
            else {
                developer();
                thanks();
            }
        }
    }
    const answer = await inquirer.prompt([
        {
            message: "Please Set Your ATM Card Number",
            type: "number",
            name: "setPin",
        },
        {
            message: "Please Set Your ATM Password",
            type: "number",
            name: "setPass",
        },
        {
            message: "Now Please Enter Your ATM Card Number",
            type: "number",
            name: "enterPin",
        }
    ]);
    // matching the account pin
    while (answer.setPin !== answer.enterPin) {
        const responsee = await inquirer.prompt([{
                name: "checkPon",
                type: "number",
                message: "Please Enter correct pin"
            }]);
        answer.enterPin = responsee.checkPon;
    }
    // console.log("pin is corrected!")
    // matching the password
    const password = await inquirer.prompt([{
            message: "Now Please Enter Your ATM Password",
            type: "number",
            name: "enterPass",
        }]);
    while (answer.setPass !== password.enterPass) {
        const checkPass = await inquirer.prompt([{
                message: "Please Enter Correct Password!",
                type: "number",
                name: "enterPass",
            }]);
        password.enterPass = checkPass.enterPass;
    }
    // console.log("password is correct!")
    // have the saving account or current account
    async function contunu() {
        const checkingAccount = await inquirer.prompt([{
                message: "Have You Current Or Saving Account",
                type: "list",
                name: "accountDetails",
                choices: ["Current Account", "Saving Account"],
            }]);
        // console.log(checkingAccount)
        if (checkingAccount.accountDetails == "Saving Account") {
            console.log("Welcome to Your Saving Account");
            balanceQuery();
        }
        else {
            console.log("Welcome to Your Current Account");
            balanceQuery();
        }
    }
    contunu();
}
atm();
