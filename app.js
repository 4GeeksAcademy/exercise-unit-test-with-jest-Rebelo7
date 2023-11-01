let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07, 
    "GBP": 0.87, 
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let dollarToEuro = valueInDollar * 0.93;
    let valueInYen = dollarToEuro * 156.5;
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let yenToEuro = valueInYen * 0.006;
    let valueInBritish = yenToEuro * 0.87;
    return valueInBritish;
}

module.exports = { fromYenToPound, fromEuroToDollar, fromDollarToYen };