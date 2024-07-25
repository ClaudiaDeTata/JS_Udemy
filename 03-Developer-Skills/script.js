// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = 23;

if (x === 24) {
  console.log(ciao);
}
("hello");
const calcAge = birthYear => 2027 - birthYear;

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// what is the temp amplitude? diff between highest and lowest temp
// how to calc max and min temp?
// what is a sensor error and what to do?

// sub-problems
// how to ignore error
// find max and min value in array
// subtract min from max and return it = amplitude

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// with 2 arrays do we need to implement the functionality twice? no, we can merge 2 arrays

// sub-problems
// how to merge 2 arrays

// const calcTempAmplitudeNew = function (t1, t2) {
//   const array1 = ["a", "b", "c"];
//   const array2 = ["d", "e", "f"];
//   const array3 = array1.concat(array2);

//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// debugging

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // 3) fix
    // value: Number(prompt("Degrees celsius:")), // always returns a string!
  };

  // 2) find
  console.log(measurement);
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// 1) identify
console.log(measureKelvin());

//  debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const array1 = ["a", "b", "c"];
  const array2 = ["d", "e", "f"];
  const array3 = array1.concat(array2);

  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    // debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// 1) identify
console.log(amplitudeBug);

// Challenge
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// how to transform the array into a string
// how to transform each element into a string
// strings needs to contain day (index + 1)
// add ... between elements and start aand end of string
// how to split an array in single elements = forEach()
// const arr = [1, 2, 3, 4, 5, 6];

// let result = '';
// arr.forEach((element, index) => {
//     result += `${element}`;
//     if (index < arr.length - 1) {
//         result += ',';
//     }
// });

// console.log(result);

let arr1 = [17, 21, 23];
let arr2 = [12, 5, -5, 0, 4];

function printForecast1(arr) {
  let result = "";

  arr.forEach((element, index) => {
    result += `... ${element}ºC in ${index + 1} days`;
    if (index < arr.length - 1) {
      result += " ";
    }
  });
  return result + "...";
}

console.log(printForecast1(arr1));
console.log(printForecast1(arr2));

// solution
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log("..." + str);
};
printForecast(data1);
