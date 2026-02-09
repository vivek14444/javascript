var id = "Ankit";
console.log(id)

let age = 20;
console.log(age)

const Pl = 3.14;
console.log(Pl)

let name = "Amit";
console.log(typeof name)

let no = 25;
console.log(typeof no)

let isOnline =true;
console.log(typeof IsOnline)

let x; console.log(typeof x);

let big = 12345678901234567890n;
console.log(typeof big)

let user = {name: "Ankit", age:25, no:1};
console.log(user)

let colors = ["red", "black", "green"];
console.log(colors)

function greet(){
    console.log("raj");
}
greet()

let idyh = {
    name: "Aquib",
    age: 24

};

console.log(idyh.name);
console.log(idyh.age);

let dd = {name: "ankit", age:23};

dd.city = "bhopal"
dd.age = 24;

console.log(dd);

let yy ={
    name: "suhani",
    age: 23,
    greet:function(){
      console.log("Hello", yy.name)
    }

};
yy.greet();

let student = {
    name: "Suhani",
    address: {
        city: "Bhopal",
        pin: 4235253
    }
};

console.log(student.address.pin);

let sk = ["red", "blue", "green"];
console.log(sk[0]);
console.log(sk[2]);

let fruits = ["mango", "apple", "banana"];
 
fruits.pop();
console.log(fruits);

let phone = ["realme", "sumsang", "Vivo"];

phone.unshift("oppo");
console.log(phone);

let col = ["red", "blue", "orange"];
for(let i=0; i<col.length;i++){
    console.log(col[i]);
}

function greet (){
    console.log("hii");
}

greet();

function greetMp(name) {
    console.log("hello, " + name);
}

greetMp("amit");
greetMp("suhani");

function add(a,b){
    return a + b;
}

let sum = add(5, 7);
console.log(sum);

const multiply = function(x,y){
    return x * y;
};

console.log(multiply(5,5));

const divide = (a,b) => a / b;

console.log(divide(20,2));

let today = new Date();
console.log(today);

let d1 = new Date("2025-08-15");
console.log(d1);

let d2 = new Date(2025,7,15);
console.log(d2);

let d = new Date();
d.setFullYear(2030);
d.setMonth(0); 
d.setDate(1);

console.log(d); 

let color = ["ankit", "suhani", "vivek", "anil"]
console.log(color[1])

function calculator(){
 //   alert("ankit");
    let no1 = Number( document.getElementById("no1").value);
 //   alert(no1);

    let no2 = Number( document.getElementById("no2").value);
 //   alert(no2);

let optrator =  document.getElementById("sel").value
 //   alert(optrator);

 //   alert(no1+no2);

    let result;
    if(optrator=="+"){
        result= no1+no2;
    }
    if(optrator=="-"){
        result= no1-no2;
    }
    if(optrator=="*"){
        result= no1*no2;
    }
    if(optrator=="/"){
        result= no1/no2;
    } 
      if(optrator=="%"){
        result= no1 % no2
    }
    
    alert(result)
    document.getElementById("result").innerHTML=result;
    }
   

    console.log(10 + 5)
    onsole.log(200 - 150)
    console.log(20 * 5)
    console.log(100 / 5)
             console.log(29 % 5)
    let a=5;
    a%=3;
    console.log(a)
    