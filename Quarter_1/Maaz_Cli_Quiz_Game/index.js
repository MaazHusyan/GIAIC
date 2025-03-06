import chalk from "chalk";
import inquirer from "inquirer";
let url = "https://opentdb.com/api.php?amount=5&category=28&difficulty=medium&type=multiple";
let dataFetch = async (data) => {
    try {
        let apiFetch = await fetch(data);
        let res = await apiFetch.json();
        return res.results;
    }
    catch (error) {
        console.error(chalk.red("Failed to fetch data from the API:"));
        return [];
    }
};
let startQuiz = async () => {
    try {
        // Fetch quiz data
        let data = await dataFetch(url);
        if (data.length === 0) {
            console.log(chalk.red("No data available for the quiz."));
            return;
        }
        // Player Score
        let playerScore = 0;
        // Player Name
        let user = await inquirer.prompt([
            {
                name: "userName",
                type: "input",
                message: "Enter Your Name Here: ",
                validate: function (val) {
                    if (val.trim() === "") {
                        return `${chalk.red(`Enter Your Name First`)}`;
                    }
                    return true;
                }
            },
        ]);
        console.log(`${chalk.cyan.underline.bold("\n\tStarting The Quiz\n")}`);
        // Setting up Quiz Game
        for (let i = 0; i < 5; i++) {
            let answers = [...data[i].incorrect_answers, data[i].correct_answer];
            let ans = await inquirer.prompt([
                {
                    name: "quiz",
                    message: data[i].question,
                    type: "list",
                    choices: answers.map((val) => val),
                },
            ]);
            if (ans.quiz == data[i].correct_answer) {
                playerScore++;
                console.log(chalk.green.italic("\tCorrect Answer\n"));
            }
            else {
                console.log(`${chalk.red.italic(`\tCorrect Answer is ${`${chalk.redBright.italic(data[i].correct_answer)}`}`)}`);
            }
        }
        console.log(`\t${chalk.blue(`${user.userName} Your Score is: `)} ${chalk.blueBright.italic(playerScore)}`);
    }
    catch (error) {
        console.error(chalk.red("An error occurred during the quiz:"));
    }
};
startQuiz();
