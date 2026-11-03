if(condation){
    //do something
}else{
    //do something
}

var a =2345
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

var name = "Santanu";
if(name=="Priya"){
    console.log(`Hi ${name} you are admin`)
}else if(name=="Bhumika"){
    console.log(`Hi ${name} you are super admin`)
}else{
    console.log(`Hi ${name} i don't know you`)
};

var role = "Admin"
var name = "Jone"
if(role =="Admin"){
    if(name=="Santanu"){
        console.log(`hi ${name} you are ${role}`)
    }else{
        console.log(`hi ${name} you are unknown`)
    }
}else if(role=="User"){
    if(name=="Santanu"){
        console.log(`hi ${name} you are ${role}`)
    }else{
        console.log(`hi ${name} you are unknown`)
    }
}
//any condition can match
var name = "Santanu"
if(name == "Tine" || name=="Nikita"){
    console.log(`hi ${name} you are welcome`)
}

//both condition should match
var name = "Tina"
if(name=="Tina" && role=="Admin"){
    console.log(`Hi ${name} you are ${role}`)
}

var name = "Tina"
if(name=="Tina" && (role=="Admin" || role=="User")){
    console.log(`hi ${name} you are ${role}`)
}

var a = 1;
if(a){
    console.log("hi");
}else{
    console.log("Bye")
}

var a = 0;
if(a){
    console.log("hi")
}else{
    console.log("Bye")
}

var a = -1;
if(a){
    console.log("hi")
}else{
    console.log("Bye")
}

Hi , Bye , Hi

//////
Ternary > Single line if else
var a =10
a>10?"hii":"Bye"
var a =10;
undefined
a>10?"hi":"Bye"
'Bye'
var a =10
a==10?"hii":"Bye"
'hii'