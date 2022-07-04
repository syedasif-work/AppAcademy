function changeContext(func, obj) {
  // Your code here
  return func.bind(obj)();
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;