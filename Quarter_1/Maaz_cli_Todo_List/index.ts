#! /usr/bin/env node

import inquirer from "inquirer";

let todoArr = [];
do {
  let response = await inquirer.prompt({
    name: "user",
    message: "Select Operation: ",
    type: "list",
    choices: ["Add Task", "Delete task", "View All", "Exit"],
  });

  let action = response.user;

  switch (action) {
    case "Add Task":
      let response = await inquirer.prompt({
        name: "todoAdd",
        message: "Write Task: ",
        type: "input",
      });
      const addTodo = response.todoAdd;
      todoArr.push(addTodo);
      console.log("Added Successfully");

      break;
    case "Delete task":
      console.log(todoArr);
      let response2 = await inquirer.prompt({
        name: "deleteTodo",
        message: "Select Index Number to Delete ",
        type: "number",
      });
      let delTodo = response2.deleteTodo;
      todoArr.splice(delTodo, 1);
      console.log("Deleted SuccessFully");

      break;
    case "View All":
      console.log(todoArr);
      break;
    case "Exit":
      console.log("Exiting...");
      process.exit();
  }
} while (true);
