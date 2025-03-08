
function check(pin){
    const rejex=/^[1-9][0-9]{5}$/;
    return rejex.test(pin)
  }
  
  console.log(check("A228362"));
  