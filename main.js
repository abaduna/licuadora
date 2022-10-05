let estadodelalicuadora = "apagada"

let blender = document.getElementById("blender")
let blender_sonido_btn =  document.getElementById("bllende-btn-sond")
let blender_sonido_licuadora =  document.getElementById("bllende-btn-licuadora")

function controldeLicudora() {
    if (estadodelalicuadora == "apagada") {
        estadodelalicuadora = "ensendido"
        blender_sonido_btn
        blender.classList.add("acr")
 
    }else{
        estadodelalicuadora = "apagada"
        blender.classList.remove("acr")
    }
}
function soni1(){
    if(blender_sonido_btn.paused ){
        blender_sonido_licuadora.play
    }
}