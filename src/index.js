window.onload = () => {

    /*activado y desactivado de los enlaces de cada pestaña*/

    const linkActive = document.getElementById("link-encode");
    const linkDesactive = document.getElementById("link-decode");

    linkActive.addEventListener("click", function() {
        document.getElementById("link-encode").classList.add("link_active");
        document.getElementById("link-decode").classList.remove("link_active");
        document.getElementById("content-msg-encode").classList.remove("display_none");
        document.getElementById("content-msg-encode").classList.add("display_block");
        document.getElementById("content-msg-decode").classList.remove("display_block");
        document.getElementById("content-msg-decode").classList.add("display_none");
    });

    linkDesactive.addEventListener("click", function() {
        document.getElementById("link-encode").classList.remove("link_active");
        document.getElementById("link-decode").classList.add("link_active");
        document.getElementById("content-msg-decode").classList.remove("display_none");
        document.getElementById("content-msg-decode").classList.add("display_block");
        document.getElementById("content-msg-encode").classList.remove("display_block");
        document.getElementById("content-msg-encode").classList.add("display_none");
       
    });
   //boton limpiar en cifrado
     

   document.getElementById("clean-encode").addEventListener ("click", () => {

    document.getElementById ("box-msg-encode").value="";
    document.getElementById ("n_offset_e").value= ""; 
    document.getElementById ("msg-encode-check").value="";


    });
    // boton limpiar decifrado
    document.getElementById("clean-decode").addEventListener ("click",() => {

        document.getElementById("box-msg-decode").value= "";
        document.getElementById("n_offset_d").value="";
    });

    /*rescatando el valor del texto a codificar */

    // variable boton
    const btnTextEncode = document.getElementById("btn_encode");
   
    //evento click cifrar
    btnTextEncode.addEventListener("click", () => {
       
        let textEncode = document.getElementById("box-msg-encode").value.toUpperCase ();
        let numberOffset = document.getElementById("n_offset_e").value;
        //let encodeText = window.cipher.encode(texEncode, numberOffset) //se mandan los valores de la funcion 
        
        document.getElementById("msg-encode-check").innerHTML = window.cipher.encode(textEncode, numberOffset);
        //document.getElementById("msg-encode-check").value = encodedText;
    });
    

    /*rescatando el valor del texto a decodificar*/

    //variable botón
    const btnTextDecode = document.getElementById("btn_decode");
    
    //evento click decifrar
    btnTextDecode.addEventListener("click", () => {
       
        let textDecode = document.getElementById("box-msg-decode").value.toUpperCase();
        let numberOffset = document.getElementById("n_offset_d").value;
        //let decodeText= window.cipher.decode(textDecode, numberOffset);
        document.getElementById("msg-decode-check").innerHTML = window.cipher.decode(textDecode, numberOffset);
        //document.getElementById("msg-decode-check").value = decodeText;
    });

     


}

    







