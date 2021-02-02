var socket = io();

let selection = ''

function choiceSelected(option) {
  selection = option;
}

function lockIn() {
  if (selection) {
    socket.emit('selection', selection);
    selection = '';
  } else {
    // error out
  }
}

socket.on('selection', function(msg) {
  console.log(msg);
});