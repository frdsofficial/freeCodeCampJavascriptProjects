function palindrome(str) {
    str = str.replace(/[^a-z0-9]/gi, "").toLowerCase(); //remove todos caracteres não alphanuméricos e deixa as letras minúsculas
    console.log("Palavra: ", str);
    let aoContratio = [];

    for (let i = 0; i < str.length; i++) {
        
        aoContratio.push(str[(str.length -1) - i]);
    }
    aoContratio = aoContratio.join(""); //junta
    console.log("A palavra ao contrário é:", aoContratio);
        
    if(str === aoContratio){
        console.log("A palavra é palindromo.");
        return true;
    }else{
        console.log("A palavra não é palindromo.");
        return false;
    }
}
palindrome("almostomla");
palindrome("eye");