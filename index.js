const readline = require("node:readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
rl.question("Entre un nombre : ",
    (answer) => {
        const number = Number(answers);
        console.log(Number.isInteger(number));
        rl.close();
    }
);

