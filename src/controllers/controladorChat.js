let botonSend=document.getElementById('botonSend')
let textoChat=document.getElementById('textoChat')
let mensajesChat=document.getElementById('mensajeChat')

let preguntas=[
    "¿cual es tu nombre?",
    "¿cuantos años tienes?",
    "¿cual es tu pelicula favorita",
    '¿tienes mascotas?',
    '¿cual es tu hobby'
]
let respuestas=[
    'Hola humano mi nombre es Isra',
    'Tengo 1 año',
    'Del crepusculo al amanecer',
    'Si, 3 humanos',
    'Manipular Humanos'
]

// variable para contar el numero de preguntas
let indicePregunta=0

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
