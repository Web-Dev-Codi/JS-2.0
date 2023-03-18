function getCelsius(temparature) {
    const convert = (temparature - 32) * 5 / 9;
    return console.log(`The temp in celsius is  ${convert}`)
}

console.log(getCelsius(32));