function celciusToFahrenheit(tempInCelcius) {
    let tempF;
    tempF = (9 * (tempInCelcius) + (32 * 5)) / 5;
    return tempF;
   
}
function fahrenheitToCelcius(tempInFahrenheit) {
     let tempC;
       tempC =  (5 * (tempInFahrenheit - 32)) / 9;
     return tempC;
}
let fahrenheit = celciusToFahrenheit(70);
let celcius = fahrenheitToCelcius(70);
console.log(fahrenheit + 'F');
console.log(celcius + 'C');