function reverseFactorial(number){

    if(number < 1){
      console.log("ERROR")
    }
    else{
      result = number
      var divisor = 0
  
      while(result != 1){
        divisor += 1
        result = result/divisor
      }
  
      console.log(divisor)
    }
}

reverseFactorial(24)