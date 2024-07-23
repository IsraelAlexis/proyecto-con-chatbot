let url="http://localhost:8000/Isra"

let peticion={
    method:"GET"
}
fetch(url,peticion)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    let botonSend=document.getElementById('botonSend')
    let textoChat=document.getElementById('textoChat')
    let mensajesChat=document.getElementById('mensajeChat')

    //mapear el arreglo de respuestas y preguntas
    let preguntas=respuesta.map(function(pregunta){
        return pregunta.pregunta
    })

    let respuestas=respuesta.map(function(respuesta){
        return respuesta.respuesta
    })

    console.log(preguntas)
    console.log(respuestas)

    // variable para contar el numero de preguntas
let indicePregunta=0;

//funcion para detectar el inicio y desarrollo de la conversacion
function procesarEntradaChat(){
    let escribeUsuario=textoChat.value.toLowerCase()
    textoChat.value=""
    if(escribeUsuario=="hola"){
        let listaPreguntas=preguntas.map((pregunta,index)=>`${index+1}. ${pregunta}`).join('<br>')
        mensajesChat.innerHTML+=`<p class=text-start>Hola Bienvenido <br> ${listaPreguntas}</p><hr>`
    }else{
        let numeroPregunta=parseInt(escribeUsuario)-1
        if (numeroPregunta>=0 && numeroPregunta<preguntas.length) {
            mensajesChat.innerHTML+=`<p class=text-start> ${preguntas[numeroPregunta]}</p>`
            mensajesChat.innerHTML+=`<p class=text-end> ${respuestas[numeroPregunta]}</p><hr>`
        }
    }
}

//rutina para activar el chatbot

botonSend.addEventListener("click",procesarEntradaChat)

textoChat.addEventListener("keypress",function(evento){
    if (evento.key=="Enter") {
        evento.preventDefault()
        procesarEntradaChat()
    }
})
})
.catch(function(respuesta){
    console.log(respuesta)
})


