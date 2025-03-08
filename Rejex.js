
function check(pin){
    const rejex=/^[0-9]{6}$/;
    return rejex.test(pin)
  }
  
  console.log(check("228362"));
  