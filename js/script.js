// SLIDER DE IMÁGENES EN INDEX
const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const imagenesSlider = [
  "imagenes/imagen12.png",
  "imagenes/imagen6.png",
  "imagenes/imagen8.png",
  "imagenes/imagen11.png",
  "imagenes/imagen15.png"
];

let imagenActual = 0;

function mostrarImagenSlider(){
  if(sliderImage){
    sliderImage.src = imagenesSlider[imagenActual];
  }
}

function siguienteImagen(){
  imagenActual++;

  if(imagenActual >= imagenesSlider.length){
    imagenActual = 0;
  }

  mostrarImagenSlider();
}

function anteriorImagen(){
  imagenActual--;

  if(imagenActual < 0){
    imagenActual = imagenesSlider.length - 1;
  }

  mostrarImagenSlider();
}

if(nextBtn && prevBtn && sliderImage){
  nextBtn.addEventListener("click", siguienteImagen);
  prevBtn.addEventListener("click", anteriorImagen);

  setInterval(siguienteImagen, 3000);
}
// MENSAJE DINAMICO
const mensajeDinamico = document.getElementById("mensaje-dinamico");
// CAMBIO DE IDIOMA
function mostrarMensaje(idioma = "es") {
  const hora = new Date().getHours();
  let mensaje = "";

  if (idioma === "es") {
    if (hora < 12) {
      mensaje = "Buenos días, disfruta los sabores del Perú.";
    } else if (hora < 18) {
      mensaje = "Buenas tardes, descubre la gastronomía peruana.";
    } else {
      mensaje = "Buenas noches, explora nuestros platos típicos.";
    }
  }

  if (idioma === "en") {
    if (hora < 12) {
      mensaje = "Good morning, enjoy the flavors of Peru.";
    } else if (hora < 18) {
      mensaje = "Good afternoon, discover Peruvian gastronomy.";
    } else {
      mensaje = "Good evening, explore our traditional dishes.";
    }
  }

  if (mensajeDinamico) {
    mensajeDinamico.textContent = mensaje;
  }
}

mostrarMensaje("es");

function cambiarIdioma(idioma) {
  mostrarMensaje(idioma);
}
mensajeDinamico.textContent = mensaje;
function cambiarIdioma(idioma) {
  const elementos = document.querySelectorAll("[data-es][data-en]");

  elementos.forEach(elemento => {
    elemento.textContent = elemento.getAttribute("data-" + idioma);
  });

  document.documentElement.lang = idioma;
  localStorage.setItem("idioma", idioma);
  mostrarMensajeDinamico(idioma);
}

function mostrarMensajeDinamico(idioma = "es") {
  const mensaje = document.getElementById("mensaje-dinamico");
  if (!mensaje) return;

  const hora = new Date().getHours();
  let texto = "";

  if (idioma === "es") {
    if (hora < 12) texto = "Buenos días, disfruta los sabores del Perú.";
    else if (hora < 18) texto = "Buenas tardes, descubre la gastronomía peruana.";
    else texto = "Buenas noches, explora nuestros platos típicos.";
  } else {
    if (hora < 12) texto = "Good morning, enjoy the flavors of Peru.";
    else if (hora < 18) texto = "Good afternoon, discover Peruvian gastronomy.";
    else texto = "Good evening, explore our traditional dishes.";
  }

  mensaje.textContent = texto;
}

document.addEventListener("DOMContentLoaded", () => {
  const idiomaGuardado = localStorage.getItem("idioma") || "es";
  cambiarIdioma(idiomaGuardado);
});
// INFORMACIÓN DINÁMICA
function mostrarInfo(region){
  const info = document.getElementById("info-dinamica");

  const datos = {
    costa: "La costa peruana destaca por sus sabores marinos, especialmente el ceviche, el arroz con mariscos y el tiradito.",
    sierra: "La sierra peruana conserva técnicas ancestrales como la pachamanca, preparada bajo tierra con piedras calientes.",
    selva: "La selva peruana combina ingredientes amazónicos únicos como plátano, yuca, gallina, cecina y hierbas regionales."
  };
// ACTIVIDADES INTERACTIVAS
  info.textContent = datos[region];
  info.style.display = "block";
}
function verificarRespuesta(respuesta){
  const mensaje = document.getElementById("respuesta-quiz");

  if(respuesta === "correcta"){
    mensaje.textContent = "✅ Correcto. La pachamanca es un plato típico de la sierra.";
    mensaje.style.color = "green";
  }else{
    mensaje.textContent = "❌ Intenta nuevamente. Recuerda que la pachamanca pertenece a la sierra.";
    mensaje.style.color = "red";
  }
}

function relacionarPlato(respuesta){
  const mensaje = document.getElementById("respuesta-plato");

  if(respuesta === "correcta"){
    mensaje.textContent = "✅ Muy bien. La imagen corresponde a la pachamanca.";
    mensaje.style.color = "green";
  }else{
    mensaje.textContent = "❌ Revisa la imagen e intenta otra vez.";
    mensaje.style.color = "red";
  }
}

function ordenRutina(respuesta){
  const mensaje = document.getElementById("respuesta-receta");

  if(respuesta === "correcta"){
    mensaje.textContent = "✅ Gracias. Te enviaremos tus recetas favoritas.";
    mensaje.style.color = "green";
  }else{
    mensaje.textContent = "✅ Gracias. Te enviaremos tus recetas favoritas.";
    mensaje.style.color = "green";
  }
}
function respuestaCorrecta(){

document.getElementById("mensaje").innerHTML =
"✅ ¡Correcto! La Pachamanca pertenece a la Sierra.";

document.getElementById("mensaje").style.color =
"green";

document.getElementById("juego-container").style.display =
"block";

}

function respuestaIncorrecta(){

document.getElementById("mensaje").innerHTML =
"❌ Intenta nuevamente";

document.getElementById("mensaje").style.color =
"red";

}  