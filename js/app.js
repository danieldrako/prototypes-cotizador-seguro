
// Constructores
function Seguro(marca,year,tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}
function UI() {}

// Llena las opciones de los años
UI.prototype.llenarOpciones = () => {
  const max = new Date().getFullYear(),
        min = max - 20;

        const selectYear = document.querySelector('#year');

        for(let i = max; i > min; i--){
            let option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            selectYear.appendChild(option);
        }
}

// Muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {

    const div = document.createElement('div');
    
    if(tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje' , 'mt-10');
    div.textContent = mensaje;

    // Insertar en el HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
       div.remove();
    },3000 )
}


// instanciar UI
const ui = new UI();


document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); //*Llena el selecto con los años
})


EventListener();
function EventListener(){
    const formulario = document.querySelector('#cotizar-seguro')
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e) {
    e.preventDefault();

    // Leer la marca seleccionada 
    const marca = document.querySelector('#marca').value;

    // leer el año seleccionado
    const year = document.querySelector('#year').value;

    //leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    if(marca === ''|| year === '' || tipo === ''){
        ui.mostrarMensaje('todos los campos son obligatorios', 'error');
        return;
    }

    ui.mostrarMensaje('Cotizando...', 'exito');

    // instanciar el seguro

    // Utilizar el protoype que va a cotizar
 
}



