// Normal Function
function Student(){
    console.log("Surbhi Sakhiya")
}
Student()

// Function with Parameter
function emp(name)
{
    console.log("Name : " + name)
}
emp("Surbhi")

// Function with return value
function sum(a,b)
{
     return a+b;
}
let Result = sum(4,5)
console.log("Sum is : " + Result)

// Function + loop
function printnum(n){
    for(let i =0;i<=n;i++)
    {
        console.log(i)
    }
}
printnum(5)

// Function + condition
function Checkage(age){
    if(age>=18)
    {
        console.log("Eligible for voting")
    }
    else
    {
        console.log("not Eligible for voting")
    }
}
Checkage(20)

