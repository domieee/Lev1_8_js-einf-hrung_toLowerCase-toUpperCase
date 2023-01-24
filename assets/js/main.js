const text = "Sam is going to school.";

const firstResult = text.toUpperCase(text);
const secondResult = text.toLowerCase(text);
const thirdResult = text.slice(0, 3).toUpperCase() + ' ' + text.slice(4, 15) + ' ' + text.slice(16, 23).toUpperCase();
const fourthResult = text.slice(0,3).toLowerCase() + ' ' + text.slice(4, 15).toUpperCase() + ' ' + text.slice(16, 23).toLowerCase();
const fifthResult = text.slice(0,3) + ' ' + text.slice(4, 5).toUpperCase() + text.slice(5, 6) + ' ' + text.slice(7, 8).toUpperCase() + text.slice(8, 12) + ' ' + text.slice(13, 14).toUpperCase() + text.slice(14, 15) + ' ' + text.slice(16, 17).toUpperCase() + text.slice(17,23);

document.write(firstResult + "<br>" + secondResult + "</br>" + thirdResult + "<br>" + fourthResult + "</br>" + fifthResult);