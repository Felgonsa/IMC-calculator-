// calcular o imc e destacar o que a pessoa apresenta

let alturaInput = document.getElementById("altura")
let pesoInput = document.getElementById("peso")

let button = document.getElementById("calcular")

document.onkeydown = teclado

let magreza = document.getElementById("magreza")
let normal = document.getElementById("normal")
let sobrepeso = document.getElementById("sobrepeso")
let obesidade = document.getElementById("obesidade")
let obesidade2 = document.getElementById("obesidade2")

let resultado = document.getElementById("resultado")

function calcular() {

    reset()

    let altura = alturaInput.value
    let peso = pesoInput.value
    if (altura && peso !== "") {


        let imc = (peso / (altura * altura)) * 10000

        resultado.innerHTML = `<p>Seu IMC é de </p>`
        resultado.innerHTML += `<p> ${imc.toFixed(2)}</p>`

        background(imc)

    } else {
        alert("Por favor, insira os valores")
    }
}

function background(imc) {
    if (imc <= 18) {
        magrezaBackground()
    } else if (imc >= 18.5 && imc <= 24.9) {
        normalBackground()
    } else if (imc >= 25 && imc <= 29.9) {
        sobrepesoBackground()
    } else if (imc >= 30 && imc <= 39.9) {
        obesidadeBackground()
    } else if (imc >= 40) {
        obesidade2Background()
    }

}

function tableBackground2() {
    table.style.opacity = "1"
}

function magrezaBackground() {
    magreza.style.backgroundColor = "rgb(120, 200, 247)"
}

function normalBackground() {
    normal.style.backgroundColor = "rgb(120, 200, 247)"
}

function sobrepesoBackground() {
    sobrepeso.style.backgroundColor = "rgb(120, 200, 247)"
}

function obesidadeBackground() {
    obesidade.style.backgroundColor = "rgb(120, 200, 247)"
}

function obesidade2Background() {
    obesidade2.style.backgroundColor = "rgb(120, 200, 247)"
}

function reset() {
    magreza.style.backgroundColor = ""
    normal.style.backgroundColor = ""
    sobrepeso.style.backgroundColor = ""
    obesidade.style.backgroundColor = ""
    obesidade2.style.backgroundColor = ""
}

function teclado(e) {
    if (e.keyCode == 13) {
        calcular()
    }
}