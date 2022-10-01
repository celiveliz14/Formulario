
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');
const fila = document.querySelector('#fila')
const oculto = document.querySelector('#sobre-mi')

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);


function obtenerDatosDelUsuario() {

datosPersona.nombre = prompt("Ingrese nombre: ")
datosPersona.edad = 2022 - prompt("Ingrese año de nacimiento: ")
datosPersona.ciudad = prompt("Ingrese su ciudad:")
datosPersona.interesPorJs = confirm("Te interesa JS: ") ? "Si" : "No"

}

function renderizarDatosUsuario() {

  obtenerDatosDelUsuario();

  document.querySelector("#nombre").innerText = datosPersona.nombre
  document.querySelector("#edad").innerText = datosPersona.edad
  document.querySelector("#ciudad").innerText = datosPersona.ciudad
  document.querySelector("#javascript").innerText = datosPersona.interesPorJs


}


function recorrerListadoYRenderizarTarjetas() {

fila.innerHTML = ""
listado.forEach( e =>{
  let texto = `<div class='caja'>  <image src=${e.imgUrl} alt=${e.lenguajes} /> 
  <p class='lenguajes'> 'Lenguaje: ' ${e.lenguajes} </p> 
  <p class='bimestre'> 'Bimestre: '${e.bimestre} </p> 
  </div>`

  fila.innerHTML += texto;
})


}

function alternarColorTema() {

let sitio = document.querySelector("#sitio")
sitio.classList.toggle("dark")
  


}


window.addEventListener('keypress', (e) =>{
  if(e.key === 'f') oculto.classList.remove('oculto')


})