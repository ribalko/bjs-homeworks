let compareArrays = (arr1, arr2) => (arr1.join() == arr2.join());

function memoize(fn, limit) {
  
  const results = [];
  let prevResultObject = [];

  return (function() { 
    let argArr = Array.from(arguments);
    if (results.length != 0) {
      prevResultObject = results.filter(param => compareArrays(param.args, argArr));
    }
    if (prevResultObject.length > 0) {
      console.log("Результат прочитан из памяти");
      return prevResultObject[0].result;
    }
    else {
      let result = fn(...argArr); //ES6 - spread как же долго я это искал
      let args = argArr;
      let resultObject = {args,result};
      results.push(resultObject);
      if (results.length > limit) results.shift();
      console.log("Результат вычислен и сохранен в памяти");
      console.log(results);
      return result;
    }
  });

}

const sum = (a, b) => a + b;
const mSum = memoize(sum, 2);
console.log(mSum(3,6));
console.log(mSum(5,2));
console.log(mSum(3,6));
console.log(mSum(3,3));
