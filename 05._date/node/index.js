const date = new Date();
const intl = new Intl.DateTimeFormat('en-US').format(date);
const intl2 = new Intl.DateTimeFormat('en-DK').format(date);


console.log(date)
console.log(date.getTimezoneOffset())
console.log(intl)
console.log(intl2)