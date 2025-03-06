import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";

async function startCountdown() {
    let user = await inquirer.prompt([
        {
            name: "hours",
            message: "Enter Hours: ",
            type: "number",
            validate: function(value) {
                if (isNaN(value)) {
                    return "Please enter a value in numbers";
                } else if (value < 0 || value > 24) {
                    return "Please enter a value between 0 and 24";
                } else {
                    return true;
                }
            }
        },
        {
            name: "minutes",
            message: "Enter Minutes: ",
            type: "number",
            validate: function(value) {
                if (isNaN(value)) {
                    return "Please enter a value in numbers";
                } else if (value < 0 || value >= 60) {
                    return "Please enter a value between 0 and 59";
                } else {
                    return true;
                }
            }
        },
        {
            name: "seconds",
            message: "Enter Seconds: ",
            type: "number",
            validate: function(value) {
                if (isNaN(value)) {
                    return "Please enter a value in numbers";
                } else if (value <= 0 || value >= 60) {
                    return "Please enter a value between 0 and 59";
                } else {
                    return true;
                }
            }
        }
    ]);

    let hours = user.hours;
    let minutes = user.minutes;
    let seconds = user.seconds;

    function countdown(hours:number, minutes:number, seconds:number) {
        const endTime = new Date();
        endTime.setHours(endTime.getHours() + hours);
        endTime.setMinutes(endTime.getMinutes() + minutes);
        endTime.setSeconds(endTime.getSeconds() + seconds);

        setInterval(() => {
            const currentTime = new Date();
            const timeDiff = differenceInSeconds(endTime, currentTime);
            
            if (timeDiff <= 0) {
                console.log(`Time's up!`);
                process.exit();
            }

            const remainingHours = Math.floor(timeDiff / 3600);
            const remainingMinutes = Math.floor((timeDiff % 3600) / 60);
            const remainingSeconds = timeDiff % 60;

            console.log(`${remainingHours} hour(s), ${remainingMinutes} minute(s), ${remainingSeconds} second(s) remaining.`);
        }, 1000); // Update every second
    }

    countdown(hours, minutes, seconds);
}

startCountdown();
