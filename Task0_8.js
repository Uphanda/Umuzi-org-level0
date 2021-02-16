function numbertToTime(number) {
  const hours = Math.floor(number / 60);
    const minutes = number % 60;
    if (hours >= 2 || hours == 0) {
        return hours + ' hours' + ',' + minutes + ' minutes';
    } else if (hours == 1) {
        return hours + ' hour' + ',' + minutes + ' minutes';
    }


}
let time = numbertToTime(71);
console.log(time);
time = numbertToTime(133);
console.log(time);
