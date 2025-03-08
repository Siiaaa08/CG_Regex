
function check(pin){
    const rejex=/^[1-9][0-9]{2}\s?[0-9]{3}$/ ;
    return rejex.test(pin)
  }
  
  console.log(check("228362"));
  