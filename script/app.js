var powFlag = false;
function addtocalculater(value) {
  document.getElementById('displayResult').value += value;
  if (powFlag) {
    var numbers = document.getElementById('displayResult').value.split('^');
    document.getElementById('displayResult').value = Math.pow(
      numbers[0],
      numbers[1]
    );
    powFlag = false;
  }
}
function reset() {
  document.getElementById('displayResult');
}
function finilize() {
  document.getElementById('displayResult').value = eval(
    document.getElementById('displayResult').value
  );
}
function mathcalculater(mymath) {
  if (mymath == 'pow') {
    powFlag = true;
    document.getElementById('displayResult').value += '^';
  } else {
    var val = document.getElementById('displayResult').value;
    document.getElementById('displayResult').value = Math[mymath](val);
  }
}
