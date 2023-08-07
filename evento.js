function saludar(){
    alert("Hola!")
}

document.addEventListener("DOMContentLoaded", function (){
    let boton = document.getElementsByTagName("div")
    boton.addEventListener("click", function(){
        alert("Hola! Soy el div")
    }
    )
} 
)
