//Código funcionou mas precisa ser otimizado
function rot13(str) {
    let alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
    let newArr = str.split("") //separa string presenvando o espaço em branco;
    let arrumador = 0;
    let arrIndex = [];
    let arrFinal = [];
    let resultado;
  
    //console.log("newArr", newArr);
    for (let i = 0; i < newArr.length; i++) {
  
      //console.log("arrumador1", alpha.indexOf(newArr[i]), "i", i);
      if (alpha.indexOf(newArr[i]) === -1) {
        //console.log("newArr123", newArr[i])
        arrumador = newArr[i] // ME MATEI PRA FAZER ISSO
      } else {
        arrumador = alpha.indexOf(newArr[i]) + 13; //gera o novo índice depois de descriptografado;
      }
  
      if (arrumador >= 0 && arrumador <= 25) {
        arrIndex[i] = arrumador;
      }
  
  
      //if teste
      if (arrumador > 25) {
        //console.log("arrumador3", arrumador, "i", i)
        arrumador = arrumador - alpha.length; // arruma o índice se for maior que o alfabeto;
        arrIndex[i] = arrumador;
      }
    }
  
    //arrFinal
    for (let j = 0; j < newArr.length; j++) {
      //console.log("alpha", alpha[arrIndex[j]]);
      if (typeof alpha[arrIndex[j]] === "undefined") {
        arrFinal[j] = newArr[j];
      } else {
        arrFinal[j] = alpha[arrIndex[j]]; //Adiciona letras no array final
        //O problema está nessa linha
      }
    }
    resultado = arrFinal.join("");
  
    //console.log("arrIndex", arrIndex);
    //console.log("arrFinal", arrFinal);
    console.log("A Cifra do valor: '" + str + "' é: " + resultado);
  
    //console.log("resultado", arrResultado);
  }
  rot13("SERR CVMMN!")