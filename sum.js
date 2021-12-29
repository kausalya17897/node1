console.log("hello")
function sum(a,b){
    return a+b;
}
//console.log(sum(2,2));
console.log(process.argv)
const num1=process.argv[2]
const num2=process.argv[3]
console.log(sum(+num1,+num2));