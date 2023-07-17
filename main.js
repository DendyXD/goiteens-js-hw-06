// Завдання 1

const firstTaskInput1 = document.querySelector("#input-task1-1");

const firstTaskInput2 = document.querySelector("#input-task1-2");

const firstTaskButton = document.querySelector("#btn1");

function checkFirstTask() {

    if (firstTaskInput1.value && firstTaskInput2.value) {
        console.log("Обидва поля заповнені");
    } else {
        console.log("Обидва поля не заповнені");
    }
}

firstTaskButton.addEventListener("click", checkFirstTask);

// Завдання 2

const secondTaskInput1 = document.querySelector("#input-task2-1");

const secondTaskInput2 = document.querySelector("#input-task2-2");

const secondTaskButton = document.querySelector("#btn2");

let inputNum1

let inputNum2

function numberHandler() {

    inputNum1 = secondTaskInput1.value;

    inputNum2 = secondTaskInput2.value;

    if (inputNum1 + inputNum2 <= 10) {
        console.log("Сума менше або дорівнює 10")
    } else {
        console.log("Сума більше 10")
    }
    }

secondTaskButton.addEventListener("click", numberHandler);

// Завдання 3

const thirdTaskInput = document.querySelector("#input-task3");

const thirdTaskButton = document.querySelector("#btn3");

function checkWord() {
    if (thirdTaskInput.value.includes("JavaScript")) {
        console.log("Текст містить слово JavaScript");
    } else {
        console.log("Текст не містить слово JavaScript");
    }
}

thirdTaskButton.addEventListener("click", checkWord);

// Завдання 4

const fourthTaskInput = document.querySelector("#input-task4");

const fourthTaskButton = document.querySelector("#btn4");

let fourthTaskNum;

function isNumInDiapason() {

    fourthTaskNum = fourthTaskInput.value
    if (fourthTaskNum >= 10 && fourthTaskNum <= 20) {
        console.log("Число входить в діапазон від 10 до 20")
    } else {
        console.log("Число не входить в діпазаон від 10 до 20")
    }
}

fourthTaskButton.addEventListener("click", isNumInDiapason);

// Завдання 5

const fifthTaskInput1 = document.querySelector("#input-task5-1");

const fifthTaskInput2 = document.querySelector("#input-task5-2");

const fifthTaskInput3 = document.querySelector("#input-task5-3");

const fifthTaskButton = document.querySelector("#btn5");

let passwordLength;

let nameLength;

let isNameValid = false;

let isEmailValid = false;

let isPasswordValid = false;

function checkData() {

    nameLength = fifthTaskInput1.length;

    passwordLength = fifthTaskInput3.length;

    email = fifthTaskInput2.value;

    if (nameLength < 3) {
        alert("В імені має бути більше 3 символів");
    } else {
        isNameValid = true;
    }

    if (passwordLength < 6) {
        alert("В паролі має бути більше 6 символів");
    } else {
        isPasswordValid = true;
    }

    if (email.includes("@.")) {
        isEmailValid = true;
    } else {
        alert("В емейлі має бути символ @ та крапка після нього");
    }

    if (isEmailValid && isNameValid && isPasswordValid) {
        window.location.href = "https://en.wikipedia.org/wiki/Wiki";
    }

}

fifthTaskButton.addEventListener("click", checkData)