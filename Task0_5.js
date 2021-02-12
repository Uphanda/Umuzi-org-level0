function areaOfTriangle(a, b, c) {
    let areaTri;
    let areaAnswer;
    areaTri = (a + b + c) / 2;
    areaAnswer = Math.sqrt(
        areaTri * (areaTri - a) * (areaTri - b) * (areaTri - c));
    return areaAnswer;
}

let Area = areaOfTriangle(4, 5, 6);
console.log(Area);