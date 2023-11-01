test("One euro should be 1.07 dollars", function() {
    
    const { fromEuroToDollar } = require('./app.js');

   
    const dollars = fromEuroToDollar(3.5);

   
    const expected = 3.5 * 1.07; 
    
    
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

test2("One dollar should be 1.075 yens", function() {
    
    const { fromDollarToYen } = require('./app.js');

   
    const yens = fromDollarToYen(5);

   
    const expected = 5 * 0.93; 
    
    
     expect(fromDollarToYen(5)).toBe(4.65); 
})

test3("One yen should be 1.149", function() {

    const { fromYenToPound } = require('./app.js');

   
    const pounds = fromYenToPound(4);

   
    const expected = 4 * 0.87; 
    
    
     expect(fromYenToPound(4)).toBe(3.48); 
})