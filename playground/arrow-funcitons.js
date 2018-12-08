var square=(x)=>x*x;
console.log(square(9));

var user ={
    name:'piyush',
    sayHi:()=>{                                //arrow functions also cannot use argument property
        console.log(`Hi. I'm ${this.name}`);   //arrow functions can't use this keyword
        },
    sayHiAlt(){                   // this is a regular function and not an anonymous function
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
};
user.sayHi();
user.sayHiAlt(1,2);