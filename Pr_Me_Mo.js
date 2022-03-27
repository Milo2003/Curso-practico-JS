const list = document.getElementById("");
const lista = list.Value
function calcularPromedio(){

    const sumaLista1=lista.reduce(
        function (valorAcumulado = 0, nuevovalor){
            valorAcumulado= valorAcumulado + nuevovalor;
            return valorAcumulado;
        }
    )

    const promedio= sumaLista1/lista.length;
    const media = document.getElementById("");
    const p = media.innerText = "El promedio es: " + promedio.toFixed(3);

    return p;


}
// let sumaLista1 = 0;
// for (let i = 0; i < lista.length; i++){
//     sumaLista1 = sumaLista1 + lista[i];
// }



// Mediana 

function calcularMediana(){
    const listao = [
        100,
        400,
        600,
        80000,
    ];
    listaorder = listao.sort(
        function(a, b){
            a-b
        }
    );


    function esPar(numero){
        if (numero % 2 === 0){
            return true
        }
        else {
            false
        }

    }
    const mitadListaorder = parseInt(listaorder.length/2);
    let mediana;
    


    if (esPar(listaf.length)){
        elemento1 = listaorder[mitadListaorder];
        elemento2 = listaorder[mitadListaorder - 1];
        mediana = (elemento1 + elemento2) / 2;
    }
    else{
        mediana = listaorder[mitadListaorder];
    }

    alert("La meediana es " + mediana);
}

//Moda

const laLista =[
    1,
    2,
    1,
    3,
    2,
    1,
    1,
    3,
    3,
]

const eAcount = {};

eAcount.map(
    function(elemento){
        if (eAcount[elemento]){
            eAcount[elemento] +=1;
        }
        else{
            eAcount[elemento] = 1;
        }
        
    }
) ;

const listaArray = Object.entries(eAcount).sort(
    function(vA, vN){
        return vA[1]-vN[1];
    }
   
);

let moda = listaArray[listaArray.length -1];

// Promedio ponserado

var ArrayPromP = [
    {asignatura:"Calculo", calif:40, numCreditos:4},
    {asignatura:"Electricidad", calif:35, numCreditos:2},
    {asignatura:"Quimica", calif:42, numCreditos:3},
]

const califxnumCreditos= ArrayPromP.map(
    function(ArrayPromP){
        return ArrayPromP.calif * ArrayPromP.numCreditos
    }
);
const suma = califxnumCreditos.reduce(
    function (valorAcumulado = 0, nuevovalor){
        valorAcumulado= valorAcumulado + nuevovalor;
        return valorAcumulado;
    }
);
const totalCredidos= ArrayPromP.map(
    function(ArrayPromP){
        return ArrayPromP.numCreditos
    }
);
const sumaCreditos = totalCreditos.reduce(
    function (VA, VN){
        VA = VA + VN
        return VA
    }
);

const promedioPonderado= suma/sumaCreditos;