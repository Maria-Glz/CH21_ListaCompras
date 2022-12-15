// aquí va el código
// boton: btnAgregar
//alertValidacionesTexto
//alertValidaciones
//contadorProductos
//productosTotal
//precioTotal
//TotalProductos

let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");
let total = document.getElementById("precioTotal");
let tabla = document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");
let btnAgregar = document.getElementById("btnAgregar");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");
let precioTotal = document.getElementById("precioTotal");
let productosTotal = document.getElementById("productosTotal")
let contadorProductos = document.getElementById("contadorProductos");

let idTimeout;
let contador=0;
let costoTotal=0;
let totalEnProductos=0;
let cantidad=0;
let precio=0;
let lista;
tablaListaCompras.innerHTML

function getPrecio(){
    return Math.floor(Math.random()*50*100) /100;
} //validar nombre

function validarNombre() {
    return(txtNombre.value.length>=2)?true:false;
    //let f = alertValidacionesTexto.innerHTML="Agrega un producto";
    // return f;
}

function validarCantidad() {
    if (txtNumber.value.length==0){
      
        //let f= alertValidacionesTexto.innerHTML="Agrega la cantidad de productos";
         return false;
    }
    if (isNaN(txtNumber.value)) //isnan si no es numero
    { 
        //let f= alertValidacionesTexto.innerHTML="Agrega la cantidad de productos";
        return false;
    }
    if (parseFloat(txtNumber.value)<=0)
    {
        //let f= alertValidacionesTexto.innerHTML="Agrega la cantidad de productos";
        return false;
    }
    return true;

}


btnAgregar.addEventListener("click", function (event) {
    event.preventDefault();
    clearTimeout(idTimeout);
    alertValidacionesTexto.innerHTML = "";
 if ((!validarNombre()) || (! validarCantidad()))
    { 
        let lista = "<ul>";
     if (! validarNombre())
     {
        txtNombre.style.border = "red thin solid";
        lista += "<li>Se debe escribir un producto valido</li>";
     }
     if (!validarCantidad())
     {
        txtNumber.style.border = "red thin solid";
        lista += "<li>Se debe escribir una cantidad valida</li>";
     }
   
    lista +="</ul>";
    alertValidacionesTexto.insertAdjacentHTML("beforeend", lista);
    alertValidaciones.style.display = "block";

    idTimeout = setTimeout (function ()
    {
        alertValidaciones.style.display="none";
    }, 5000);
    return false;
 }
 //contador para sumar productos
    txtNombre.style.border ="";
    txtNumber.style.border ="";
    alertValidaciones.style.display="none";
    contador++;
    contadorProductos.innerHTML = contador;
     let cantidad = parseFloat(txtNumber.value);
     totalEnProductos += cantidad;
     productosTotal.innerHTML=totalEnProductos;
     precio = getPrecio();
     costoTotal+= precio*cantidad;
     precioTotal.innerHTML="$" + costoTotal.toFixed(2); //redondea a 2 decimales

    let row =`<tr>
      <td> ${contador} </td>   
      <td>${txtNombre.value}</td> 
      <td>${txtNumber.value}</td> 
      <td>${precio}</td> 
    <tr>`;
    cuerpoTabla[0]=insertAdjacentHTML("beforeend", row);
    txtNombre.value="";
    txtNumber.value="";
    txtNombre.focus(); //posiciona dentro de cierto campo
});

txtNombre.addEventListener("blur", function (event) { //blur quita espacios del imput al cambiar del campo
    event.preventDefault();
    txtNombre.value = txtNombre.value.trim();
});

txtNumber.addEventListener("blur", function (event) { //blur quita espacios del imput al cambiar del campo
    event.preventDefault();
    event.target.value = event.target.value.trim();
});