function celsToFah(celsius) {
    let fahrenheit;
    fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
}

console.log(`Temperature in F: ${celsToFah(20)}`);