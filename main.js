const monemt = require('moment');

function getCurrentDay() {
    console.log(monemt().format('dddd'));
}

function getCurrentMonth() {
    console.log(monemt().format('MMMM'));
}

function getCurrentYear() {
    console.log(monemt().format('YYYY'));
}

getCurrentDay();
getCurrentMonth();
getCurrentYear();