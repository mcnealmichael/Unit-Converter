/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")
const inputElement = document.getElementById("input")
const convertBtn = document.getElementById("convert-btn")

let lengthString = ""
let volumeString = ""
let massString = ""



convertBtn.addEventListener("click", function() {
    const inputValue = Number(inputElement.value)
    
    if(!inputValue) {
        return
    }else {
        lengthString = `<p>${inputValue} meters = ${meterToFeet(inputValue)} feet | ${inputValue} feet = ${feetToMeter(inputValue)} meters</p>`
        lengthOutput.innerHTML = lengthString
        
        volumeString = `<p>${inputValue} liters = ${literToGallon(inputValue)} gallons | ${inputValue} gallons = ${gallonToLiter(inputValue)} liters</p>`
        volumeOutput.innerHTML = volumeString
        
        massString = `<p>${inputValue} kilos = ${kiloToPound(inputValue)} pounds | ${inputValue} pounds = ${poundToKilo(inputValue)} kilos</p>`
        massOutput.innerHTML = massString
    }
    
    
})

function meterToFeet(num) {
    const result = num * 3.281
    return result.toFixed(3)
}

function feetToMeter(num) {
    const result = num / 3.281
    return result.toFixed(3)
}

//1 liter = 0.264 gallon
function literToGallon(num) {
    const result = num * 0.264
    return result.toFixed(3)
}

function gallonToLiter(num) {
    const result = num / 0.264
    return result.toFixed(3)
}

//1 kilogram = 2.204 pound
function kiloToPound(num) {
    const result = num * 2.204
    return result.toFixed(3)
}

function poundToKilo(num) {
    const result = num / 2.204
    return result.toFixed(3)
}
