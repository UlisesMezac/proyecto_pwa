const form = document.querySelector('#form');
console.log(form);


form[4].addEventListener('keyup', buscar);
function buscar(e){
    e.preventDefault();
    const datos = new FormData(form);
    const url = `https://apis.forcsec.com/api/codigos-postales/20211122-196b2f388322384c/${datos.get('codigo')}`;
 

fetch(url)
  .then(res => res.json())
  .then(data => {
    let datos_api = [];
    datos_api = data.data.asentamientos;
    let datos = '';
    datos_api.forEach(cp => {
        datos +=`<option value="${cp.nombre}">`;
        });
        const contenedor = document.querySelector("#Colonias").innerHTML = datos;
    });
    const registros = [];
    form.addEventListener("submit", enviar);
    function enviar(e){
        e.preventDefault();
        const frase = `Hola ${datos.get('nombre')}${datos.get('apellido')},   tienes ${datos.get('edad')} años, vives en la calle ${datos.get('calle')} ${datos.get('colonia')} con Codigo postal: ${datos.get('codigo')}`;
        registros.push(frase);
        for(let r in registros) { 
            console.log(registros[r]);
        }
        const div = document.querySelector('#resultado').innerHTML = registros; 
        console.log(registros); 
    }
}
    const rform = document.querySelector('#btnreset');
    rform.addEventListener("click", resetform);
    function resetform(e){
    e.preventDefault();
    console.log("Hola");
    form.reset();
    }
