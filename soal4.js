const isValidPassword = (GivenPassword) => {
  const validation = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
  
  if(validation.test(GivenPassword)){
    return true;
  }else{
    return false;
  }

};
  console.log(isValidPassword("Anis321"))
  console.log(isValidPassword("Anisafsp321"))