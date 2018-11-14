// Get Elements
let viewer = document.querySelector('.viewer');
const buttons = document.querySelectorAll('.button');
const clearBtn = document.querySelector('.clear');
const equalBtn = document.querySelector('.equal');

// Insert Values Inside the Viewer
function insertValues(value) {
  // First Prevents Addint Values That Should not be inside
  if(value != 'C' && value != '=') {
    viewer.value += value;
  }
}

// Equal Function
function equal() {
  viewer.value = eval(viewer.value);
}

// Clear Viewer Fully
function clear() {
  viewer.value = '';
}

// Events
clearBtn.addEventListener('click', clear);
equalBtn.addEventListener('click', equal);

buttons.forEach(button => button.addEventListener('click', function() {
  insertValues(button.value);
}));
