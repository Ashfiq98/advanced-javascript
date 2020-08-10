  const numbers=[2,6,4,7,3,5];
// const output= [];
// for(let i=0;i<numbers.length;i++)
// {
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result);

// function square (element)
// {
//     return element*element;
// }

// const square = element => element*element;

// const result = numbers.map(square);
//{ 
   // console.log(element,index,array);
// })

// console.log(result);
const bigger = element => element>5;

const result = numbers.filter(bigger);
console.log(result);
// Map is given an array
// Filter is given an array
// But, Find is given an element