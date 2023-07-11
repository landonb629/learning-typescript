let number1 = 20;
let number2 = 30;

// adding two different types and returning a string array
function push(a: number, b: number): number[] { 
    let returnArray = [];
    returnArray.push(a)
    returnArray.push(b);
    return returnArray;
}

const final = push(number1, number2);
console.log(final)


/// creating an object
/*
creating the object for a car with make, year, model
*/


// creating a function that prints an object
function printObject(car: { make: string, model: string, year: number, isElectric?: boolean}) { 
    let outputString = `your car is a ${car.year} ${car.make} ${car.model}`

    if (car.isElectric) { 
        outputString += ` and is electric`
    }

    console.log(outputString)
}

let myCar = {make: "audi", model: "a4", year: 2018}
let electricVersion = { make: "audi", model: "r7", year: 2019, isElectric: true}
printObject(myCar)
printObject(electricVersion)

// functions using void 

function handleError(errmsg: string): never { 
    throw new Error(errmsg)
}