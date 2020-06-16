

let atten = window.prompt("Enter Your Attendence Percentage")
let sub = window.prompt("Enter Your Backlocks")
if(atten>60&&sub<=0)
{
    console.log("Your allow to the exams")
}
else if(atten>50&&atten<60)
{
    console.log("Your attendence percentage between 50 and 60 so you have to pay attendence fee")
}
 else if(atten>60&&sub>0)
{
    console.log("You Pay Backlock fee.")
}
 else if(atten<39&&sub>0)
{
    console.log("Detend")
}
else if(atten>39&&sub<=0)
{
    console.log("Pay attendence fee")
}

else if(atten>=40&&atten<50)
{
    console.log("You have any medical certificate ,you allow for the exams")
    console.log("If you dont have any medical certificate please pay the attendence fee")
}
else if(isNaN(atten)&&isNaN(sub)) 
{
console.log("Please Enter Valid Numbers")
}
else if(atten.match(' ')&&sub.match(' '))
{
    console.log("Spaces are not allowed")
}