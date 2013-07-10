
// Touch Events

function onTouchCancel(event) {
  event.preventDefault();
  console.log(event);
  //debugger;
}

function onTouchEnd(event) {
  event.preventDefault();
  console.log(event);
  //debugger;
}

function onTouchMove(event) {
  event.preventDefault();
  console.log(event);
  //debugger;
}

function onTouchStart(event) {
  event.preventDefault();
  console.log(event);
  //debugger;
}

document.body.ontouchcancel = function(event) {
  onTouchCancel(event);
};

document.body.ontouchend = function(event) {
  onTouchEnd(event);
};

document.body.ontouchmove = function(event) {
  onTouchMove(event);
};

document.body.ontouchstart = function(event) {
  onTouchStart(event);
};
