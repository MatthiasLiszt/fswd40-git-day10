
function compareTwoNumbers(){
var censors=[76,85,65,93,81];

function sumUp(s,e){return s+e;}

var average=0; 

 average=censors.reduce(sumUp)/censors.length;

 console.log(average);

  if(average<60) return 'F '+average;
  if(average<70) return 'D '+average;
  if(average<80) return 'C '+average;
  if(average<90) return 'B '+average; 
  if(average<100)return 'A '+average;  

 	
}

function fizzBuzz(n){
 var output=[];


 function i(j){
  if((j%5==0)&&(j%3==0)){output.push("FizzBuzz");}	
  if((j%5==0)&&(j%3!=0)){output.push("Buzz");}
  if((j%3==0)&&(j%5!=0)){output.push("Fizz");}
  if((j%3!=0)&&(j%5!=0)){output.push(j);}
  if(j<n){i(++j);} 
 }	
 
 i(1);
 return output;
}

var dataArray=[];

function arrayItemsAdd(id){
 var v=document.getElementById(id).value;
 dataArray.push(v);
 console.log(v);
}


