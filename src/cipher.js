window.cipher = {
    encode: (textEncode, numberOffset) => {
      let result = "";
      for (let i = 0; i < textEncode.length; i++) {
  
        //variable de la Fórmula para posicionar la letra dentro del código ASCII
        let letter = (textEncode.charCodeAt(i) - 65 + parseInt(numberOffset)) % 26 + 65;
  
        //Concatenando letras codificadas
        result += String.fromCharCode(letter);
      }
  
      return result;
  
    },
  
    decode: (textDecode, numberOffset) => {
      let result = "";
      for (let i = 0; i < textDecode.length; i++) {
  
        //variable de la Fórmula para posicionar la letra dentro del alfabeto  
        let letter = (textDecode.charCodeAt(i) + 65 - parseInt(numberOffset)) % 26 + 65;
  
        //Concatenando las letras decodificadas
        result += String.fromCharCode(letter);
  
      }
  
      return result;
  
    }
  }
