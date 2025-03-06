"use strict";
// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was
// stored correctly.
Object.defineProperty(exports, "__esModule", { value: true });
function carInformation(manufacturer, model, ...details) {
    const carInfo = {
        Manufacturer: manufacturer,
        Model: model,
    };
    details.forEach(([key, value]) => (carInfo[key] = value));
    return carInfo;
}
const carDetails = carInformation("Mazda", "RX-8", ["Color", "Yellow"], ["Year", "2005"], ["Transmission", "Manual"]);
console.log("Car Information:", carDetails);
