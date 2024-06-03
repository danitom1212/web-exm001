// Function to start the toDoList app
function start() {
    let arr = []; // Unlimited array to store tasks
    let str = "";

    while (true) {
        // Prompt the user for input
        str = prompt("Enter one of the following entries (add, view, delete, end): ");

        // Check the user's input and perform the corresponding action
        if (str.toLowerCase() === 'add') {
            addToDoList(arr);
        } else if (str.toLowerCase() === 'view') {
            viewToDoList(arr);
        } else if (str.toLowerCase() === 'delete') {
            deleteToDoList(arr);
        } else if (str.toLowerCase() === 'end') {
            end();
            break; // Exit the loop if the user enters "end"
        } else {
            alert("Something went wrong! Please try again.");
        }
    }
}

// Function to view the toDoList
function viewToDoList(toDoList) {
    let str = "";
    let textarea = document.getElementById('showList');
    if (toDoList.length > 0) {
        for (let index = 0; index < toDoList.length; index++) {
            str += `${index + 1}: ${toDoList[index]}\n`;
        }
        textarea.textContent = str;
        alert(str);
    } else {
        alert("Nothing in the list. Please enter 'add'.");
    }
}

// Function to add a task to the toDoList
function addToDoList(toDoList) {
    let text = prompt("Add an item to the list: ");

    while (text.trim().length === 0) {
        text = prompt("Please enter a valid task: ");
    }

    toDoList.push(text);
    alert("The task was added successfully.");
}

// Function to delete a task from the toDoList
function deleteToDoList(toDoList) {
    let i = prompt("Which task number do you want to delete? ");

    while (isNaN(i) || i > toDoList.length || i <= 0) {
        alert("Something went wrong! Please try again.");
        i = prompt("Which task number do you want to delete? ");
    }

    const deletedTask = toDoList.splice(i - 1, 1);
    alert(`Task "${deletedTask[0]}" has been deleted.`);
}

// Function to end the toDoList app
function end() {
    alert("See you next time! Bye!");
}

// Update date and time
const dateElement = document.getElementById('current-date');
const timeElement = document.getElementById('current-time');

function updateDateTime() {
    const now = new Date();
    dateElement.textContent = now.toLocaleDateString();
    timeElement.textContent = now.toLocaleTimeString();
}

setInterval(updateDateTime, 1000); // Update date and time every second

// Color picker functionality
const colorPicker = document.getElementById('background-color');
const body = document.querySelector('body');

colorPicker.addEventListener('change', () => {
    body.style.backgroundColor = colorPicker.value;
});

// Add event listener to the "START!!!" button
document.getElementById('startButton').addEventListener('click', start);