// https://www.omnicalculator.com/everyday-life/how-many-tables

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');


let length = v; 


btn.addEventListener('click', function() {
  
    result.textContent = `Number of seats at one table = ${computenumberofseatsatonetable().toFixed(0)}`;
})

// calculation

// Number of people = (Length / 60cm) * 2

function computenumberofseatsatonetable() {
  return Math.floor(Number(length.value) / 60) * 2;
}
