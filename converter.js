let meter2Feet = 3.28084
let feet2Meter = 0.3048
let liter2Gallon = 0.26
let gallon2Liter = 4.546
let kilo2Pound = 2.20
let pound2Kilo = 0.453

let lengthResult = document.getElementById("length-result")
let volumeResult = document.getElementById("volume-result")
let massResult = document.getElementById("mass-result")


function conversion() {
    let unit = document.getElementById("number-input").value

    let meterFoot = unit * meter2Feet
    meterFoot = meterFoot.toFixed(2)
    let footMeter = unit * feet2Meter
    footMeter = footMeter.toFixed(2)
    lengthResult.textContent = `${unit} meters = ${meterFoot} feet | ${unit} feet = ${footMeter} meters`

    let literGallon = unit * liter2Gallon
    literGallon = literGallon.toFixed(2)
    let gallonLiter = unit * gallon2Liter
    gallonLiter = gallonLiter.toFixed(2)
    volumeResult.textContent = `${unit} liters = ${literGallon} gallons | ${unit} gallons = ${gallonLiter} liters`

    let kiloPound = unit * kilo2Pound
    kiloPound = kilo2Pound.toFixed(2)
    let poundKilo = unit * pound2Kilo
    poundKilo = poundKilo.toFixed(2)
    massResult.textContent = `${unit} kilos = ${kiloPound} pounds | ${unit} pounds = ${poundKilo} kilos`

}

