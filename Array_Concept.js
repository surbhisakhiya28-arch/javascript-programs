// print fruits name
let fruits = ["Mango" ,"Banana","Apple"]

for(let i =0; i <fruits.length;i++)
{
    console.log(fruits[i])
}

// Using Array Sum of Number
let num = [10,30,40,50,60]
let sum = 0

for(let i =0;i<num.length;i++)
{
    console.log(num[i])
    sum += num[i]
}
console.log(sum)

// Array with Function
function printarray(arr){
    for(let i = 0; i<arr.length;i++)
    {
        console.log(arr[i])
    }
}
printarray([10,20,30,40,50])

function StudnetResult(name , mark)
{
   let total = 0
   for(let i =0; i<mark.length;i++)
   {
    total += mark[i];
   }
   let percentage = total / mark.length;

    console.log("Name :", name);
    console.log("Total :", total);
    console.log("Percentage :", percentage + "%");

}

StudnetResult("surbhi",[90,89,67,89,98])