import { alert, Stack } from '@pnotify/core';

const myStack = new Stack({
  dir1: 'up',
  firstpos1: 25,
  push: 'top',
  modal: true,
  overlayClose: true,
  context: document.getElementById('page-container'), // The notices will be placed in the 'page-container' element.
});

alert({
  text: "I'm a notice centered at the bottom!",
  stack: myStack,
});
