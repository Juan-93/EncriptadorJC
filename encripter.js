const texto = document.querySelector(".ingresar-texto");
const textoCifrado = document.querySelector(".mensaje");

function boton_encriptar() {
    const textoCifrado = encriptar();
    textoCifrado.value = textoCifrado;



}


function encriptar() {
    const texto = document.querySelector(".ingresar-texto").value;
    const textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".mensaje").value = textoCifrado;
    document.querySelector(".ingresar-texto").value = "";


}

function boton_desencriptar() {
    const texto = desencriptar();
    textoCifrado.value = textoCifrado;
}



function desencriptar() {
    const texto = document.querySelector(".ingresar-texto").value;
    const textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".mensaje").value = textoCifrado;
    document.querySelector(".ingresar-texto").value = "";
}

function botonCopiar() {
    const textoCopiar = document.querySelector(".mensaje");
    textoCopiar.select();
    textoCopiar.setSelectionRange(0, 99999);
    document.execCommand("copy");
    Swal.fire(
        'Texto Copiado!',
        'Haz click en el boton!',
        'Aceptar'
    );
    document.querySelector(".mensaje").value = "";
}