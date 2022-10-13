const radius = process.argv.slice(2)[0] * 1;

function calcCircleArea(radius){

    let area = ((Math.PI) * Math.pow(radius,2)).toFixed(2);

    console.log(`The area of a circle with a radius of ${radius} is ${area}.`);
}

calcCircleArea(radius);