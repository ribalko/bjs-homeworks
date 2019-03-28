function compareArrays(arr1, arr2) {
  if (arr1.length != arr2.length) return false; 
  for (let i = 0; i < arr1.length; i ++) {
    if (arr1[i] != arr2[i]) {
      return false;
    } 
  }
  return true;
}


function memoize(fn, limit) {
  const results = memory;
  // Не получается получить массив аргументов функции за ее пределами
  // Это вообще реально? :( хотелось бы
  // const argArray = Array.from(fn.arguments);
  if (results.length === 0) return fn;

    const prevResultObject = results.filter(param => compareArrays(param.args, argArr));
    if (prevResultObject.length > 0) {
      console.log("Результат прочитан из памяти");
      return prevResultObject[0].result;
    }
    else {
      let result = fn(argArr.join());
      let resultObject = {argArr,result};
      results.push(resultObject);
      if (results.length > limit) results.shift();
      console.log("Результат вычислен и сохранен в памяти");
      console.log(results);
      return result;
    }

}


const memory = [{args: [3,4] , result: 7}]; // А как еще сохранять историю?
const sum = (a, b) => Number(a) + Number(b);
const argArr = [3,5]; // Это не от хорошей жизни
const mSum = memoize(sum, 2);
console.log(mSum);
