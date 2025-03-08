
function check(pin){
    const rejex=/^[1-9][0-9]{4}[0-9]$/ ;
    return rejex.test(pin)
  }
  
  console.log(check("228362"));
  