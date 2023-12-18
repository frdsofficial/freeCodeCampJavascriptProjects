function checkCashRegister(price, cash, cid) {
    let troco = cash - price;
    console.log("Troco inicial:", troco.toFixed(2))
    let divisor = [20, 10, 5, 1, 0.25, 0.10, 0.5, 0.01]
    let newCid = [];
    let acumulador = 0;
    let arrTroco = [];
    let arrFinal = [];
    let qDeNotasDe100 = 0;
    let quantoFalta = 0;
    let calculo = 0;
    let caixa = 0;
    let cidCopia = []
    cidCopia = [...cid];
    let resultado = {
      status: "",
      change: []
    };
    console.log("acumulador", acumulador);
    
    //CONTA QUANTO DINHEIRO TEM NO CAIXA
    for (let h = 0; h < cid.length; h++){
        caixa = caixa + cid[h][1];
    }
    console.log("CAIXA", caixa)
    //////////////////////////////////////////////////
    //ELIMINADOR DE NOTAS 100
    while (troco >= 100) {
      console.log(troco, "troco maior ou igual a 100. Subtraindo: 100");
      troco = troco - cid[8][1];
      qDeNotasDe100++;
    }
    if (qDeNotasDe100 > 0) {
      console.log("qDeNotasDe100", qDeNotasDe100);
      arrTroco = [
        [cid[8][0], (qDeNotasDe100 * 100)]
      ];
      console.log("ARRTROCO", arrTroco)
    }
    //remover o último valor do array
    cid.pop(cid[8][1]);
    //console.log("Removendo ultimo valor de cid."); //pois não é necessário devolver notas de 100
    //console.log("cid", cid);
    console.log("Troco:", troco.toFixed(2))
    //////////////////////////////////////////////////
  
    //////////////////////////////////////////////////
    // INVERTENDO A ORDEM DO ARRAY CID
    for (let i = 0; i < cid.length; i++) {
      newCid[i] = cid[(cid.length - i) - 1];
    }
    //console.log("newCid", newCid);
    //////////////////////////////////////////////////
  
    //////////////////////////////////////////////////
    //CALCULANDO
    for (let j = 0; j < newCid.length; j++) {
      if (troco >= acumulador + newCid[j][1]) {
        //console.log("j", j, "acumulador", acumulador, "newCid", newCid[j][1]);
        console.log("j", j, "Troco", troco, "é MAIOR que: 'acumulador'+'newCid'", acumulador + newCid[j][1]);
  
        acumulador = acumulador + newCid[j][1];
  
        //ADICIONANDO VALOR DE NEWCID EM ARRTROCO
        arrTroco[j + 1] = newCid[j];
        //PAREI AQUIIIIII
        console.log("ARRTROCO", arrTroco);
  
  
      } else {
        //console.log("j", j, "acumulador", acumulador, "newCid", newCid[j][1]);
        console.log("j", j, "Troco", troco, "é MENOR que: 'acumulador'+'newCid'", acumulador + newCid[j][1]);
        //VER QUANTO FALTA PARA TERMINAR SOMA
        quantoFalta = troco - acumulador;
        quantoFalta = quantoFalta.toFixed(2); //O MALDITO ERRO ESTAVA AQUI
        //console.log("Quanto falta de troco", quantoFalta);
  
        //PARTE MAIS IMPORTANTE DO CÓDIGO
        //console.log("divisor", divisor[j]);
        console.log("quantoFalta", quantoFalta, "divisor[j]", divisor[j]);
        calculo = Math.trunc(quantoFalta / divisor[j]) * divisor[j];
  
        //EVITANDO VALOR 0
        if (calculo != 0) {
          console.log("CALCULO", calculo)
          acumulador = acumulador + calculo;
  
          //ADICIONANDO VALOR DE NEWCID EM ARRTROCO
          arrTroco[j + 1] = [newCid[j][0], calculo];
          //console.log("ARRTROCO", arrTroco);
          //[cid[8][0], (qDeNotasDe100 * 100)]
        }
  
      }
      //////////////////////////////////////////////////
    }
  
    //ARRUMADOR DE ARRAY, TRAZ O ARRAY FINAL
    for (let k = 0; k < arrTroco.length; k++) {
      //console.log("arrTroco", arrTroco[k])
      if (arrTroco[k] != undefined) {
        //console.log("k", k, "É diferente");
        //console.log("k", k, "arrFinal[k]", arrFinal[k], "arrTroco[k]", arrTroco[k])
        arrFinal.push(arrTroco[k]);
      }
    }
    //////////////////////////////////////////////////
    //REMOVEDOR DE UNDEFINED (PRIMEIRO VALOR)
    /*
    if (qDeNotasDe100 === 0) {
      console.log("Removendo o undefined");
      arrTroco.shift()
    }
    */
    //////////////////////////////////////////////////
  
  
      //RESULTADOS
    if (acumulador.toFixed(2) != troco.toFixed(2)) {
      console.log("Não há troco suficiente.");
      resultado.status = "INSUFFICIENT_FUNDS";
    } else {
      console.log("Troco entregue com sucesso.");
      resultado.status = "CLOSED";
      resultado.change = cidCopia;
    }
      if(acumulador.toFixed(2) === troco.toFixed(2) && acumulador < caixa){
        console.log("DEU CERTO!");
      resultado.status = "OPEN";
      resultado.change = arrFinal;
    
    }
    console.log("acumulador", acumulador.toFixed(2));
    console.log("ARRTROCO", arrTroco);
    console.log("ARRFINAL", arrFinal);
    //console.log(cidCopia);
    return resultado;
    //////////////////////////////////////////////////
  }
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.