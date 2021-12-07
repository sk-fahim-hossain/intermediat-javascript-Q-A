// ****each part of this codes are individually run properly *****/

const age = 4;
if(age > 0){
    console.log("Condition is true");
}
else{
    console.log("Condition is false")
}

// > true;

const num = 0;
if(num > 0){
    console.log("Condition is true");
}
else{
    console.log("Condition is false")
}

// > false;

const name = "bulbul";
if(name.length>0){
    console.log("Condition is true");
}
else{
    console.log("Condition is false")
}
//>  true;
const name = "";
if(num > 0){
    console.log("Condition is true");
}
else{
    console.log("Condition is false")
}
//>  false;
const name = " ";
if(num > 0){
    console.log("Condition is true");
}
else{
    console.log("Condition is false")
}
//>  true;
const name = "0";
if(name){
    console.log("Condition is true");
}
else{
    console.log("Condition is false")
}
//> true;
const name ;
cosole.log(name) //> undefined
///if there is any undefined there value automatically set with false value//
if(num > 0){
    console.log("Condition is true");
}
else{
    console.log("Condition is false")
}
//> false;
const value = null;
if(value){
    console.log("Condition is true");
}
else{
    console.log("Condition is false")
}
//> false;



//***falsy values::

//0
//null value
//NaN
//""
//undefined
//false


//***truthy values:: */

//'0'
//" "
//[]
