// Get Elements
let viewer = document.querySelector('.viewer');
const buttons = document.querySelectorAll('.button');
const clearBtn = document.querySelector('.clear');
const equalBtn = document.querySelector('.equal');
const backBtn = document.querySelector('.back');

// Insert Values Inside the Viewer
function insertValues(value) {
  // First Prevents Addint Values That Should not be inside
  if(value != 'C' && value != '=' && value != '<') {
    viewer.value += value;
  }
}

// Equal Function
function equal() {
  viewer.value = eval(viewer.value);
}

function backward() {
  let view = viewer.value;
  viewer.value = view.substring(0, view.length -1);
}

// Clear Viewer Fully
function clear() {
  viewer.value = '';
}

// Events
clearBtn.addEventListener('click', clear);
equalBtn.addEventListener('click', equal);
backBtn.addEventListener('click', backward);

buttons.forEach(button => button.addEventListener('click', function() {
  insertValues(button.value);
}));
