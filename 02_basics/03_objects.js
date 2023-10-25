//object destructuring mainly used in react 

const obj = {
    title:"js",
    name:"ashwin",
    age:22
}

//normal accesing 
console.log(obj.name);

//using destructiing
const {name} = obj;

//accessing value
console.log(name);


//in react while using props
const navbar = ({name}) => {

}

navbar(name  = "ashwin")











