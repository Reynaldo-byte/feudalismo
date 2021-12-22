

        function init() {
			let video;
let paisesMapa;
let elementosDomSvg;
let colorOriginal;
let rutaAnimacion;
let contenedorImagen;
let documento;
    let elementosSvg = document.querySelector('#piramide').getSVGDocument();
     documento = elementosSvg;
 
   

    paisesMapa = [
      elementosSvg.getElementById("plebeyos"),
         elementosSvg.getElementById("nobleza"),
        elementosSvg.getElementById("realeza"),
    ]
    paisesMapa.forEach(pais => {
        pais.addEventListener('mouseover', overMapa, false);
  pais.addEventListener('mouseout', outMapa, false);
	pais.addEventListener('click',MostrarAnimacion,false);
        pais.style.cursor = 'pointer';})

}
function MostrarAnimacion(e){
 let elementosSvg = document.querySelector('#piramide').getSVGDocument();
let id=e.target.parentNode.id;
document.getElementById("explicacion").setAttribute("hidden","");
switch (id) {
        case 'plebeyos':
			document.getElementById("vasallos_campesinos").removeAttribute("hidden");

			document.getElementById("nobleza_iglesia").setAttribute("hidden","");
			document.getElementById("rey_caballero").setAttribute("hidden","");

	
            break;
        case 'nobleza':

            document.getElementById("vasallos_campesinos").setAttribute("hidden","");

            document.getElementById("nobleza_iglesia").removeAttribute("hidden");
            document.getElementById("rey_caballero").setAttribute("hidden","");
            break;
        case 'realeza':
            document.getElementById("vasallos_campesinos").setAttribute("hidden","");

            document.getElementById("rey_caballero").removeAttribute("hidden");
            document.getElementById("nobleza_iglesia").setAttribute("hidden","");

            break;



        default:
            break;
    }


}


function overMapa(e) {
    colorOriginal = e.path[0].style.fill
    e.path[0].style.filter='brightness(1.5)'
 colorOriginal = e.path[1].style.fill
    e.path[1].style.filter='brightness(1.5)'
    console.log(e.target.parentNode.id)

}
let imgs=9;

function outMapa(e) {
    e.path[0].style.fill = colorOriginal
    e.path[0].style.filter='none'
  e.path[1].style.fill = colorOriginal
    e.path[1].style.filter='none'
 
}

var dejado;
function allowDrop(ev) {
  ev.preventDefault();
  dejado=ev.target.id;
      
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  
}

function drop(ev) {

  ev.preventDefault();
  var content = ev.dataTransfer.getData("text");
  var drag = document.getElementById(content);
  var drop = document.getElementById(dejado);
  var src = drag.getAttribute("src");
    var svg = document.getElementById("mapa1");
  var img = document.createElement("image");
 

  if (dejado === drag.getAttribute("data-drag")) {
   imgs=imgs-1;
   if (imgs==0) {
    document.getElementById("avanzar_2").removeAttribute("hidden");
   }
    drag.remove();
    switch (dejado) {
  
      case "_x31_":
        disB("_x31__x5F_1");
        break;
      case "_x32_":
        disB("_x32__x5F_2");
        break;
      case "_x33_":
        disB("_x33__x5F_3");
        break;
      case "_x34_":
        disB("_x34__x5F_4");
        break;
      case "_x35_":
        disB("_x35__x5F_5");
        break;
      case "_x36_":
        disB("_x36__x5F_6");
        break;
      case "_x37_":
        disB("_x37__x5F_7");
        break;
      case "_x38_":
        disB("_x38__x5F_8");
        break;
      case "_x39_":
        disB("_x39__x5F_9");

    }
  }
}

function disB(id) {
    document.getElementById(id).classList.remove("dis-n");
  document.getElementById(id).classList.add("dis-b");
}
function avanzar2() {
  document.getElementById('mapa2').setAttribute("hidden","");
  document.getElementById("distribucion").removeAttribute("hidden");
  // body...
}
function avanzar() {
  document.getElementById('inicio').setAttribute("hidden","");
  document.getElementById("mapa2").removeAttribute("hidden");
  // body...
}

