const number = Date.now()
let ans = number % 3;
const str = "Your luck for today is: ";

if(ans === 0){
  console.log(str + "Great");
} else if(ans == 1){
  console.log(str + "Not bad");
}
else{
  console.log(str + "Awful");
}

