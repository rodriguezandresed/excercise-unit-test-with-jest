// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// 1 EUR (Euro) = 1.2 USD (US Dollar)

const fromDollarToYen = (dollar) =>{ 

return  parseFloat((((dollar)/(oneEuroIs.USD))*(oneEuroIs.JPY)).toFixed(2))



}

const fromEuroToDollar = (euro) =>{ 

return  parseFloat(((euro)*(oneEuroIs.USD)).toFixed(2))


}

const fromYanToPound = (yan) =>{ 

return  parseFloat((((yan)/(oneEuroIs.JPY))*(oneEuroIs.GBP)).toFixed(2))

}


module.exports = {fromDollarToYen, fromEuroToDollar, fromYanToPound };