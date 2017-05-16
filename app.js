var hold = 0;
var funx = "";
var listening = true;
var result = 0;

function stack(num) { // a way to use the buttons to write numbers
  var screen = document.getElementById('screen');
  if (window.hold.toString() === screen.value || window.result.toString() === screen.value) {
    screen.value = num;
  } else {
    screen.value += num;
  }
}

function add_point() { // a way to add a decimal point into the number
  var screen = document.getElementById('screen');
  if (screen.value.indexOf(".") === -1) {
    screen.value += ".";
  }
}

function calculations(sign) { // all the calculations are here
  var screen_number = document.getElementById('screen');
  if (listening) {
    window.hold = Number(screen_number.value);
    window.funx = sign;
    window.listening = false;
  } else {
    switch (window.funx) {
      case "+":
        window.hold += Number(screen_number.value); // +
        screen_number.value = window.hold.toString();
        break;
      case "-":
        window.hold -= Number(screen_number.value); // -
        screen_number.value = window.hold.toString();
        break;
      case "*":
        window.hold *= Number(screen_number.value); // *
        screen_number.value = window.hold.toString();
        break;
      case "/":
        window.hold /= Number(screen_number.value); // /
        screen_number.value = window.hold.toString();
        break;
      case "=": // =
        break;
    }
    if (sign === "=") {
      window.result = Number(screen_number.value);
      window.listening = true;
      window.funx = "";
      window.hold = 0;
    } else {
      window.funx = sign;
    }
  }
}

function clear_screen() {
  var screen_number = document.getElementById('screen');
  screen_number.value = "0";
  window.hold = 0;
  window.funx = "";
  window.listening = true;
  window.result = 0;
}

function backspace() {
    var screen_number = document.getElementById('screen');
    var regexp = /[a-zA-Z]/;
    if(screen_number.value === window.result.toString() || regexp.exec(screen_number.value)) {
        screen_number.value = "0";
    } else if(screen_number.value<=1){
        screen_number.value = "0";
    } else {
      screen_number.value = screen_number.value.slice(0, - 1);  
    }
 }