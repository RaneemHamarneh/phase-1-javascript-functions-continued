// code your solution here
function saturdayFun(fun = "roller-skate"){
    return `This Saturday, I want to ${fun}!`;
}

function mondayWork(work = "go to the office"){
  return `This Monday, I will ${work}.`;
}
saturdayFun("bathe my dog");
mondayWork("work from home");
saturdayFun();

console.log(saturdayFun());  
console.log(mondayWork());
console.log(saturdayFun("bathe my dog"));  
console.log(mondayWork("work from home"));

function wrapAdjective(wrapper) {
  return function(result) {
      return `You are ${wrapper}${result}${wrapper}!`;
  };
}

let wrapWithAsterisks = wrapAdjective('*');
let result = wrapWithAsterisks("a hard worker");
console.log(result);
let wrapWithPipes = wrapAdjective('||');
let result2 = wrapWithPipes("a dedicated programmer");
console.log(result2);