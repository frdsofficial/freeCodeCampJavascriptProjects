function telephoneCheck(str) {
    let resultado = 0;
  
    if (/(^\d{3}|^\(\d{3}\))(\d{3}|\s\d{3}|-\d{3})(\s|-)\d{4}/.test(str)) {
      resultado++;
    }
    
    if (/^1(\s)\d{3}(\s|-)\d{3}(\s|-)\d{4}/.test(str)) {
      resultado++;
    }
    if(/(^\d{10}$|^1\s\(\d{3}\)\s\d{3}-\d{4}|^1\(\d{3}\)\d{3}-\d{4})/.test(str)){
        resultado++;
    }
    
    if (resultado > 0) {
      return true;
    } else {
      return false;
    }
    }

    telephoneCheck("555-5555");