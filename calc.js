let current = document.getElementById("current")
let previous = document.getElementById("previous")
let operation = null

function escribirNumero(num){
		if(num == '.' && current.innerText.includes('.')) return
    current.innerText = current.innerText + num
}

function borrarTodo(){
		current.innerText = ''
    previous.innerText = ''
}

function escribirOperacion(op){
		operation = op
    previous.innerText = current.innerText + operation
    current.innerText = ''
}

function calcular(){
    let numA = parseFloat(previous.innerText.substring(0,previous.innerText.length-1))
    let numB = parseFloat(current.innerText)
    let result = 0
    if(operation == "+"){
        result = numA + numB
    }
    if(operation == "-"){
    		result = numA - numB
    }
    if(operation == "x"){
    		result = numA * numB
    }
    if(operation == "÷"){
    		result = numA / numB
    }
    previous.innerText = result
    current.innerText = ''
}