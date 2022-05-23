
//Funcion fetch

function traerCasas(){
    
    fetch("htm5.json")
        
    .then(respuesta => respuesta.json())
        .then(datosEst =>{
            console.log("Se cargó correctamente.", datosEst);
            mostrarCasas(datosEst);
        }).catch(error =>{
            console.log("Hay tremendo error, andá a revisarlo.", error.message);
        });
};
traerCasas();

//var lista = [];
datosEst = [];
var tabla = ``;

//Función para mostrar los casas en una tabla

function mostrarCasas(datosEst){
    
        for(i=0; i < datosEst.length; i++){

            let casas = datosEst[i];
            tabla += `
            <tr class="table-success">
                <th scope="row">1</th>
                <td>${casas.precio}</td>
                <td>${casas.ubicacion}</td>
             
            </tr>`
        };
    
    
        document.getElementById("x").innerHTML =tabla;

}

