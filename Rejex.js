
function check(pin){
    const rejex=/^[1-9][0-9]{2}\s?[0-9]{3}$/ ;
    return rejex.test(pin)
  }
  function checkEmail(email){
      //const emailRejex= new RegExp('^[a-zA-Z0-9.]{3,}[a-zA-Z]+@[a-z]{3,}\\.[a-z]{2,}\\.[a-z]{2,}$');
      const emailRejex=/^[A-Za-z]{3,}(\.[a-zA-Z]*)?\@bridgelabz.[a-z]{2,}(\.?[a-z]{2,})?$/;
      return emailRejex.test(email)
  }
  
  console.log(checkEmail("abc.xyz@bridgelabz.co"));
  