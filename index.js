console.log("Hi");

// 1
// let user = prompt("Who is there?");

// if (user === "Admin" || user === "admin") {
//   alert(`Welcome! ${user}`);

//   let pass = prompt("Password?");
//   if (pass === "TheMaster") {
//     alert("Welcome! You are now in system main frame");
//   } else if (pass === "null") {
//     alert("Canceled");
//   } else {
//     alert("Wrong Password");
//   }
// } else if (user === "null") {
//   alert(Canceled);
// } else {
//   alert("I do not know you");
// }

// 2
// let day = prompt("Enter week day");

// switch (day) {
//   case "tuesday":
//     alert("Today is Tuesday");
//     break;

//   case "wednesday":
//     alert("Today is wednesday");
//     break;

//   case "monday":
//     alert("Today is Monday");
//     break;

//   case "thursday":
//     alert("Today is thursday");
//     break;

//   case "friday":
//     alert("Today is friday");
//     break;

//   case "saturday":
//     alert("Today is saturday");
//     break;

//   case "sunday":
//     alert("Today is Sunday");
//     break;
//   default:
//     alert("Please enter correct day of the week");
// }

// 3

// let b = confirm("Do you have permission from your parents?");
// console.log(b);

// 4

// let age = prompt("Enter age", 18);

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm("Do you have permission from your parents?");
//   }
// }

// if (checkAge(age)) {
//   alert("access granted");
// } else {
//   alert("access denied");
// }

// 5

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {

//     return confirm("Did parents allow you?");
//   }
// }
// let age = prompt("Enter age");

// if (checkAge(age)) {
//   alert("access granted");
// } else {
//   alert("access denied");
// }

// 6

// function checkAge(age) {
//   (age > 18) ||

//     confirm("Did parents allow you?")

// }

// 7

// function min(){
//     (a<b) ? a: b
// }

// 8

// let a = prompt("Enter value of a");
// let b = prompt("Enter value of b");

// pow(a, b);

// function pow(a, b) {
//   return alert(a ** b);
// }

// 9

let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  "Do you agree?",
  () => {
    alert("You agreed.");
  },
  () => {
    alert("You canceled the execution.");
  }
);
