document.querySelector("#date-btn").addEventListener("click", date)



function date() {
let month = document.querySelector("#date").value
let date = document.querySelector("#day").value
const audio = document.querySelector("#audio-dominos")
	audio.play()

if (month == 12 && date >=22 || month == 1 && date <=19){
	document.querySelector('#febuary').classList.add('hidden')
	document.querySelector("#january").classList.add('hidden')
	document.querySelector("#march").classList.add('hidden')
	document.querySelector("#april").classList.add('hidden')
	document.querySelector("#may").classList.add('hidden')
	document.querySelector("#june").classList.add('hidden')
	document.querySelector("#july").classList.add('hidden')
	document.querySelector("#august").classList.add('hidden')
	document.querySelector("#september").classList.add('hidden')
	document.querySelector("#october").classList.add('hidden')
	document.querySelector("#november").classList.add('hidden')
	document.querySelector("#december").classList.remove('hidden')
}
if (month == 1 && date >=20 || month == 2 && date <=18) {
	console.log(day)
	document.querySelector('#january').classList.remove('hidden')
	document.querySelector("#febuary").classList.add('hidden')
	document.querySelector("#march").classList.add('hidden')
	document.querySelector("#april").classList.add('hidden')
	document.querySelector("#may").classList.add('hidden')
	document.querySelector("#june").classList.add('hidden')
	document.querySelector("#july").classList.add('hidden')
	document.querySelector("#august").classList.add('hidden')
	document.querySelector("#september").classList.add('hidden')
	document.querySelector("#october").classList.add('hidden')
	document.querySelector("#november").classList.add('hidden')
	document.querySelector("#december").classList.add('hidden')
}
if (month == 1 && date > 31) {value = "Huh?";}
if (month == 2 && date >=19 || month == 3 && date <=20) {
	
	document.querySelector("#january").classList.add('hidden')
	document.querySelector('#febuary').classList.remove('hidden')
	document.querySelector("#march").classList.add('hidden')
	document.querySelector("#april").classList.add('hidden')
	document.querySelector("#may").classList.add('hidden')
	document.querySelector("#june").classList.add('hidden')
	document.querySelector("#july").classList.add('hidden')
	document.querySelector("#august").classList.add('hidden')
	document.querySelector("#september").classList.add('hidden')
	document.querySelector("#october").classList.add('hidden')
	document.querySelector("#november").classList.add('hidden')
	document.querySelector("#december").classList.add('hidden')
	if (month == 2 && date > 29) {
		alert("WRONG!")
		document.querySelector('#febuary').classList.add('hidden')}
}


if (month == 3 && date >=21 || month == 4 && date <=19) {
	document.querySelector('#febuary').classList.add('hidden')
	document.querySelector("#january").classList.add('hidden')
	document.querySelector("#march").classList.remove('hidden')
	document.querySelector("#april").classList.add('hidden')
	document.querySelector("#may").classList.add('hidden')
	document.querySelector("#june").classList.add('hidden')
	document.querySelector("#july").classList.add('hidden')
	document.querySelector("#august").classList.add('hidden')
	document.querySelector("#september").classList.add('hidden')
	document.querySelector("#october").classList.add('hidden')
	document.querySelector("#november").classList.add('hidden')
	document.querySelector("#december").classList.add('hidden')
}


if (month == 4 && date >=20 || month == 5 && date <=20) {
	document.querySelector('#febuary').classList.add('hidden')
	document.querySelector("#january").classList.add('hidden')
	document.querySelector("#march").classList.add('hidden')
	document.querySelector("#april").classList.remove('hidden')
	document.querySelector("#may").classList.add('hidden')
	document.querySelector("#june").classList.add('hidden')
	document.querySelector("#july").classList.add('hidden')
	document.querySelector("#august").classList.add('hidden')
	document.querySelector("#september").classList.add('hidden')
	document.querySelector("#october").classList.add('hidden')
	document.querySelector("#november").classList.add('hidden')
	document.querySelector("#december").classList.add('hidden')
	if (month == 4 && date > 30) {
		alert("wrong")
		document.querySelector("#april").classList.add('hidden')
	}
}
if (month == 5 && date >=21 || month == 6 && date <=21) {
	document.querySelector('#febuary').classList.add('hidden')
	document.querySelector("#january").classList.add('hidden')
	document.querySelector("#march").classList.add('hidden')
	document.querySelector("#april").classList.add('hidden')
	document.querySelector("#may").classList.remove('hidden')
	document.querySelector("#june").classList.add('hidden')
	document.querySelector("#july").classList.add('hidden')
	document.querySelector("#august").classList.add('hidden')
	document.querySelector("#september").classList.add('hidden')
	document.querySelector("#october").classList.add('hidden')
	document.querySelector("#november").classList.add('hidden')
	document.querySelector("#december").classList.add('hidden')
}
if (month == 6 && date >=22 || month == 7 && date <=22) {
	document.querySelector('#febuary').classList.add('hidden')
	document.querySelector("#january").classList.add('hidden')
	document.querySelector("#march").classList.add('hidden')
	document.querySelector("#april").classList.add('hidden')
	document.querySelector("#may").classList.add('hidden')
	document.querySelector("#june").classList.remove('hidden')
	document.querySelector("#july").classList.add('hidden')
	document.querySelector("#august").classList.add('hidden')
	document.querySelector("#september").classList.add('hidden')
	document.querySelector("#october").classList.add('hidden')
	document.querySelector("#november").classList.add('hidden')
	document.querySelector("#december").classList.add('hidden')
	if (month == 6 && date > 30) {
		alert("WRONG")
		document.querySelector("#june").classList.add('hidden')
	}
}
if (month == 7 && date >=23 || month == 8 && date <=22)  {
	document.querySelector('#febuary').classList.add('hidden')
	document.querySelector("#january").classList.add('hidden')
	document.querySelector("#march").classList.add('hidden')
	document.querySelector("#april").classList.add('hidden')
	document.querySelector("#may").classList.add('hidden')
	document.querySelector("#june").classList.add('hidden')
	document.querySelector("#july").classList.remove('hidden')
	document.querySelector("#august").classList.add('hidden')
	document.querySelector("#september").classList.add('hidden')
	document.querySelector("#october").classList.add('hidden')
	document.querySelector("#november").classList.add('hidden')
	document.querySelector("#december").classList.add('hidden')
}
if (month == 8 && date >=23 || month == 9 && date <=22) {
	document.querySelector('#febuary').classList.add('hidden')
	document.querySelector("#january").classList.add('hidden')
	document.querySelector("#march").classList.add('hidden')
	document.querySelector("#april").classList.add('hidden')
	document.querySelector("#may").classList.add('hidden')
	document.querySelector("#june").classList.add('hidden')
	document.querySelector("#july").classList.add('hidden')
	document.querySelector("#august").classList.remove('hidden')
	document.querySelector("#september").classList.add('hidden')
	document.querySelector("#october").classList.add('hidden')
	document.querySelector("#november").classList.add('hidden')
	document.querySelector("#december").classList.add('hidden')
}
if (month == 9 && date >=23 || month == 10 && date <=22) {
	document.querySelector('#febuary').classList.add('hidden')
	document.querySelector("#january").classList.add('hidden')
	document.querySelector("#march").classList.add('hidden')
	document.querySelector("#april").classList.add('hidden')
	document.querySelector("#may").classList.add('hidden')
	document.querySelector("#june").classList.add('hidden')
	document.querySelector("#july").classList.add('hidden')
	document.querySelector("#august").classList.add('hidden')
	document.querySelector("#september").classList.remove('hidden')
	document.querySelector("#october").classList.add('hidden')
	document.querySelector("#november").classList.add('hidden')
	document.querySelector("#december").classList.add('hidden')
	if (month == 9 && date > 30) {
		alert("WRONG")
		document.querySelector("#september").classList.add('hidden')
	}
}
if (month == 10 && date >=23 || month == 11 && date <=21) {
	document.querySelector('#febuary').classList.add('hidden')
	document.querySelector("#january").classList.add('hidden')
	document.querySelector("#march").classList.add('hidden')
	document.querySelector("#april").classList.add('hidden')
	document.querySelector("#may").classList.add('hidden')
	document.querySelector("#june").classList.add('hidden')
	document.querySelector("#july").classList.add('hidden')
	document.querySelector("#august").classList.add('hidden')
	document.querySelector("#september").classList.add('hidden')
	document.querySelector("#october").classList.remove('hidden')
	document.querySelector("#november").classList.add('hidden')
	document.querySelector("#december").classList.add('hidden')
}
if (month == 11 && date >=22 || month == 12 && date <=21) {
	document.querySelector('#febuary').classList.add('hidden')
	document.querySelector("#january").classList.add('hidden')
	document.querySelector("#march").classList.add('hidden')
	document.querySelector("#april").classList.add('hidden')
	document.querySelector("#may").classList.add('hidden')
	document.querySelector("#june").classList.add('hidden')
	document.querySelector("#july").classList.add('hidden')
	document.querySelector("#august").classList.add('hidden')
	document.querySelector("#september").classList.add('hidden')
	document.querySelector("#october").classList.add('hidden')
	document.querySelector("#november").classList.remove('hidden')
	document.querySelector("#december").classList.add('hidden')
	if (month == 11 && date > 30) {
		alert("WRONG")
		document.querySelector("#november").classList.add('hidden')
	}
}


	}






	// A simple calculator that has two inputs and returns the result of +,-,/,* somewhere in the DOM

// store values from two seperates inputs
// set up functions(a,b) with 2 arguments for each maths operator
// print result to innertext


document.querySelector("#add").addEventListener("click", addition)
document.querySelector("#minus").addEventListener("click", subtraction)
document.querySelector("#multi").addEventListener("click", multiplication)
document.querySelector("#divi").addEventListener("click", division)
document.querySelector("#clear").addEventListener("click", clear)



function addition(){
let f = Number(document.querySelector("#first").value)
let s = Number(document.querySelector("#second").value)
    let result = f+s
	console.log(result)
     document.querySelector("#result").innerText = result

	}


function subtraction(){
let f = Number(document.querySelector("#first").value)
let s = Number(document.querySelector("#second").value)
    let result = f-s
	console.log(result)
     document.querySelector("#result").innerText = result

	}

function multiplication(){
let f = Number(document.querySelector("#first").value)
let s = Number(document.querySelector("#second").value)
    let result = f*s
	console.log(result)
     document.querySelector("#result").innerText = result

	}

function division(){
let f = Number(document.querySelector("#first").value)
let s = Number(document.querySelector("#second").value)
    let result = f/s
	console.log(result)
     document.querySelector("#result").innerText = result

	}
// CLEARS THE INPUTS AND RESULTS
function clear(){
	const audio = document.querySelector("#audio")
	audio.play()
let inputs = document.querySelectorAll('input')
inputs.forEach(input => input.value = '')
	
	let result = " "
	document.querySelector("#result").innerText = result
}
 

