function enviarMensaje(){
    let cajaTexto= document.getElementById("caja-texto")
    let cajaChat= document.getElementById("chatbox")
    cajaChat.innerText += '\n' + cajaTexto.value
    cajaTexto.value = ''
    }