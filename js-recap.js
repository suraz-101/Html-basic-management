// console.log("HELLOW WORLD");

// /*
// Tertiary Operator
// loop

// */

// const data = []; // default data
// const trigger = true; //API call

// const obj = { name: "raktim", role: ["admin"] };

// //write a function that uses the trigger to show the user name or show the message "No user"

// const dataTrigger = (data, trigger, obj) => {
//   if (!trigger) return "no user found";
//   data.push(obj);
//   const [a] = data;
//   const { name } = a;
//   return `WELCOME ${name}`;
// };

// const res = dataTrigger(data, trigger, obj);
// console.log(res);

// //Write a javascript function that uses ternary operator to show number of items
// const item = [{ name: "Raktim" }, { name: "Suraj" }, { name: "Lakim" }];

// const ternaryFunction = (item) => {
//   const length = item.length;
//   return Array.isArray(item) && length > 0 ? item.length : 0;
// };

// const result = ternaryFunction(item);
// console.log(result);

const countries = ["denmark", "chin", "finland", "nepal"];

//update chin to china

countries[1] = "china";

const firstList = [1, 2, 3];
const secondList = [4, 5, 6];

const thirdList = firstList.concat(secondList);
console.log(thirdList);

// firstList.push.apply(firstList, secondList);
// console.log(firstList);

//write a code which gives grade to students according to their scores
// 80-100 => A
// 70-79 => B
// 60-69 => C
// 50-59 => D
//0 -49 => F

const grade = 100;
switch (true) {
  case grade >= 80 && grade <= 100:
    console.log("GRADE => A");
    break;
  case grade >= 70 && grade <= 79:
    console.log("Grade => B");
    break;
  case grade >= 60 && grade <= 69:
    console.log("Grade => C");
    break;
  case grade >= 50 && grade <= 59:
    console.log("GRADE => D");
    break;
  case grade >= 0 && grade <= 49:
    console.log("GRADE => E");
    break;
  default:
    console.log("Please enter valid number");
    break;
}

//write a function to generate factorial of a number using recursion
// 5*4*3*2*1=120
//0=1, 1=1
const number = 5;
const fact = (number) => {
  const val = Number(number);
  if (number == 0 || number === 1) return 1;
  return val * fact(val - 1);
};

const result = fact(number);
console.log(result);

// fact(number);

const lan = "nep";

switch (true) {
  case lan == "en":
    console.log("english");
    break;
  case lan == "nep":
    console.log("nepali");
    break;
  default:
    console.log("invalid");
}
