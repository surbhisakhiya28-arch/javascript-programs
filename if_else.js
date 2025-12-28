// Cheack Number Even or Odd

let num = Number(prompt("Enter any Number"))

if(num%2==0)
{
    console.log("Even Number")
}
else
{
    console.log("Odd Number")
}

// Student marks grade

let name= prompt("Enter Your Name : ")
let n1 = Number(prompt("Enter Your mark :"))
console.log("Student Name :" + name)
console.log("Mark :" + n1)
if(n1>=80 && n1<=100)
{
    console.log("Grade A")
}
else if(n1>=50 && n1<=80)
{
    console.log("Grade B")
}
else if(n1>=33 && n1<=50)
{
    console.log("Grade C")
}
else
{
    console.log("you are fail")
}

let ch = Number(prompt("Enter your Choice"))

switch(ch)
{
    case 1:
        // Check leap year or not
       let year = Number(prompt("Enter the year"))
       if(year%4==0)
       {
        console.log("leap year")
       }
       else
       {
        console.log("Not leap year")
       }
        break;
    case 2:
       // Check eligible to vote
       let age = Number(prompt("Enter your Age"))
       if(age>=18)
       {
        console.log("you are eligible to vote")
       }
       else{
        console.log("you are not eligible to vote")
       }
        break;
    case 3:
        // print any table
        let num = Number(prompt("Enter any Number"))
        for (let i = 0;i<=10;i++)
        {
            console.log(num + "*" + i + "=" + (num * i))
        }
        break;
    case 4:
        // Positive and Negative Number
        let n = Number(prompt("Enter the Number"))
        if(n > 0)
        {
            console.log("Positive Number")
        }
        else
        {
            console.log("Negative Number")
        }
        break;
    default:
        console.log("Invalid Choice")
}