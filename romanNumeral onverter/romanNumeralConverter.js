function convertToRoman(num) {
    let cNum = arguments[0]; //copia array
    let resultado = "";
    let j = 0;
    
    cNum = cNum.toString(); //transforma em string
  
    for (let i = 0; i < cNum.length; i++) {
      //vê a quantidade de unidades
      if (cNum.length === 1) {
        unidade();
      }
      if (cNum.length === 2) {
        switch (i) {
          case 0:
            dezena();
            break;
          case 1:
            unidade();
            break;
        }
      }
      if (cNum.length === 3) {
        switch (i) {
          case 0:
            centena();
            break;
          case 1:
            dezena();
            break;
          case 2:
            unidade();
            break;
        }
      }
      if (cNum.length >= 4) {
        switch (i) {
          case 0:
            milhar();
            break;
          case 1:
            centena();
            break;
          case 2:
            dezena();
            break;
          case 3:
            unidade();
            break;
        }
      }
    }
  
    //UNIDADE
    function unidade() {
      switch (cNum[j]) {
        case "1":
          resultado += "I";
          break;
        case "2":
          resultado += "II";
          break;
        case "3":
          resultado += "III";
          break;
        case "4":
          resultado += "IV";
          break;
        case "5":
          resultado += "V";
          break;
        case "6":
          resultado += "VI";
          break;
        case "7":
          resultado += "VII";
          break;
        case "8":
          resultado += "VIII";
          break;
        case "9":
          resultado += "IX";
          break;
      }
    }
    //DEZENA
    function dezena() {
      switch (cNum[j]) {
        case "1":
          resultado += "X";
          break;
        case "2":
          resultado += "XX";
          break;
        case "3":
          resultado += "XXX";
          break;
        case "4":
          resultado += "XL";
          break;
        case "5":
          resultado += "L";
          break;
        case "6":
          resultado += "LX";
          break;
        case "7":
          resultado += "LXX";
          break;
        case "8":
          resultado += "LXXX";
          break;
        case "9":
          resultado += "XC";
          break;
      }
      j++;
    }
    //CENTENA
    function centena() {
      switch (cNum[j]) {
        case "1":
          resultado += "C";
          break;
        case "2":
          resultado += "CC";
          break;
        case "3":
          resultado += "CCC";
          break;
        case "4":
          resultado += "CD";
          break;
        case "5":
          resultado += "D";
          break;
        case "6":
          resultado += "DC";
          break;
        case "7":
          resultado += "DCC";
          break;
        case "8":
          resultado += "DCCC";
          break;
        case "9":
          resultado += "CM";
          break;
      }
      j++;
    }
    //CENTENA
    function milhar() {
      switch (cNum[j]) {
        case "1":
          resultado += "M";
          break;
        case "2":
          resultado += "MM";
          break;
        case "3":
          resultado += "MMM";
          break;
        case "4":
          resultado += "IV";
          break;
        case "5":
          resultado += "V";
          break;
        case "6":
          resultado += "VI";
          break;
        case "7":
          resultado += "VII";
          break;
        case "8":
          resultado += "VIII";
          break;
        case "9":
          resultado += "IX";
          break;
      }
      j++;
    }
    console.log("O valor " + num + " em algarismos romanos é: "+ resultado);
  }
  convertToRoman(4649);