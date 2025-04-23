const inputValue = document.getElementById('inputValue');
const inputUnit = document.getElementById('inputUnit');
const outputUnit = document.getElementById('outputUnit');
const result = document.getElementById('result');

function convert() {
  const value = parseFloat(inputValue.value);
  const from = inputUnit.value;
  const to = outputUnit.value;
  if (isNaN(value)) {
    result.textContent = '';
    return;
  }

  let output = value;

  // Length conversions
  if ((from === 'meters' && to === 'feet')) output = value * 3.28084;
  else if ((from === 'feet' && to === 'meters')) output = value / 3.28084;
  // Weight conversions
  else if ((from === 'kilograms' && to === 'pounds')) output = value * 2.20462;
  else if ((from === 'pounds' && to === 'kilograms')) output = value / 2.20462;
  // Temperature conversions
  else if ((from === 'celsius' && to === 'fahrenheit')) output = value * 9/5 + 32;
  else if ((from === 'fahrenheit' && to === 'celsius')) output = (value - 32) * 5/9;
  // Same unit
  else if (from === to) output = value;
  else output = 'Conversion not supported';

  result.textContent = (typeof output === 'number')
    ? `${value} ${from} = ${output.toFixed(2)} ${to}`
    : output;
}

inputValue.addEventListener('input', convert);
inputUnit.addEventListener('change', convert);
outputUnit.addEventListener('change', convert);
