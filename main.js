const moment = require('moment');

function getDate() {
    const formatted = moment().format('YYYY/MM/DD HH:mm:ss');
    console.log(formatted);
}

getDate();
