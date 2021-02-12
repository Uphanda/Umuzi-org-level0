function numbertToTime(number) {
    const hours = Math.floor(number / 60);
    const minutes = number % 60;
    return hours + ' hour' + ',' + minutes + ' minute';
}

let time = numbertToTime(71);
console.log(time);
time = numbertToTime(133);
console.log(time);