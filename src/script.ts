 /*this was me learning the properities of objects */
// var numbers = 12;
// console.log("hello world")
// const obj = {width : 10, height: 15 , yolo: 12};
// const area = obj.width*obj.yolo*numbers; //so I dont have to keep defining huh
// console.log(area);
// //yolo = 23 at cost of not being able to use it outside
// console.log(numbers);
const app = document.getElementById("app");
const p = document.createElement('p');
p.textContent = "hello, world!";
app?.appendChild(p);

const list = document.getElementById("todo");
const l = document.createElement('li'); //notice how there is no list element in html? 
//hence we can create and put it from typescript as well
l.textContent ='does this work?';
list?.appendChild(l);
const S = document.createElement('li');
S.textContent ='does this work again?';
list?.appendChild(S);