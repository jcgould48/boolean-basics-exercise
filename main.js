let iGetTheJoke = true;
let havingFun = true;
let learning = true;
let killingIt = (havingFun && learning);


function returnFalse() {
return false;
}

function isOpposite(condition) {
return !condition; 
}

function both(condition1, condition2) {
return (condition1 && condition2); 
}

function either(condition1, condition2) {
  // if (condition1 === true || condition2 === true) {
  //   return true;
  // }

  return (condition1 || condition2) 
}


function neither(condition1, condition2) {
return !condition1 && !condition2
}

function itsComplicated(condition1, condition2, condition3) {
  return  !condition1 || (condition2&&condition3);
}


module.exports = {
  iGetTheJoke,
  havingFun,
  learning,
  killingIt,
  returnFalse,
  isOpposite,
  both,
  either,
  neither,
  itsComplicated,
}