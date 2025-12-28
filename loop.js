// for loop
for(let i = 0; i<=5; i++)
{
    console.log(i)
}


// while loop
let  j = 1;
while(j <=4)
{
    console.log(j)
    j++;
}

// do_while loop
let n = 0;
do{
    console.log(n)
    n++;    

}while(n<=10)

// for of loop
const num = [10,20,30];
for(let n of num)
{
    console.log("for of",n)
}

// pattern
for (let i=0;i<=5;i++)
{
  let row = "";
  for(let j = 1 ; j<=i; j++)
  {
    row += "*";
  }
  console.log(row)
}

// using array
let  arr = [10,20,30,40,50]

for(i=0;i<=arr.length;i++)
{
    console.log(arr[i])
}
console.log(arr)


// using array print name and mark
let name = ["siya" ,"surbhi","jensi","jeni","jiya"]
let mark  = [30,90,80,89,60]

for(i=0;i<name.length;i++)
{
  console.log(name[i] +  ":" + mark[i])
}

