function firstStep(input) {
  // Your code here
  return input.split('&');
}

function secondStep(input) {
  // Your code here
  return input.map(str => str.split('='));
}

function thirdStep(input) {
  // Your code here
  for (let arr of input){
    arr[0] = arr[0].replace(/\+/g, " ");
    arr[1] = arr[1].replace(/\+/g, " ");
  }
  return input;
}

function fourthStep(input) {
  // Your code here
  console.log(input);
  for (let arr of input) {
    arr[0] = decodeURIComponent(arr[0]);
    arr[1] = decodeURIComponent(arr[1]);
  }
  return input;
}

function fifthStep(input) {
  // Your code here
  let obj = {};
  for (let arr of input) {
    obj[arr[0]] = arr[1];
  }
  return obj;
}

function parseBody(str) {
  // Your code here
  if (str) {
    return fifthStep(fourthStep(thirdStep(secondStep(firstStep(str)))));
  }
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};