

//fromEuroToDollar
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const euro = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)

    })


//fromDollarToYen
test("One dollar should be 106.5 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const dollar = fromDollarToYen(35)

    // if dolar euro are 106.58 yen, then 35 euros should be ((35/(1.2))*127.9)
    const expected = (35/(1.2))*127.9.toFixed(2); 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(35)).toBe(3730.42); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

//fromYanToPound
test("One thousand Yen should be 6.25 dollars", function(){
    //import the function from app.js
    const { fromYanToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const yan = fromYanToPound(1000)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = ((1000)/(127.9))*(0.8).toFixed(2); 
    
    // this is the comparison for the unit test
     expect(fromYanToPound(1000)).toBe(6.25); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})