//Triangulo
function AreaTriangulo(){
    const ladoA = document.getElementById("ladoA");
    const lado_1 = parseInt(ladoA.value);
    const ladoB = document.getElementById("ladoB");
    const lado_2= parseInt(ladoB.value);
    const ladoC = document.getElementById("Base");
    const base_T = parseInt(ladoC.value);

    const A_Triangulo = calcular_area(lado_1, lado_2, base_T);
    const Tipo_Triangulo = tipoTriangulo(lado_1, lado_2, base_T);
    alert("EL area de tu Triangulo " + Tipo_Triangulo + " es igual a " + A_Triangulo.toFixed(3));

}
function P_triangulo(){
    const ladoA = document.getElementById("ladoA");
    const lado_1 = parseInt(ladoA.value);
    const ladoB = document.getElementById("ladoB");
    const lado_2= parseInt(ladoB.value);
    const ladoC = document.getElementById("Base");
    const base_T = parseInt(ladoC.value);
    const per_triangulo = perimetroTriangulo(lado_1, lado_2, base_T);
    alert("El perimetro es igual a " + per_triangulo)
}
function tipoTriangulo(lado1, lado2, base){

    if (lado1 === lado2 && lado2 === base){
        return "Equilatero"
    }
    else if (lado1===lado2 && lado1 != base){
        return "Isoceles"
    }
    else {
        return "Escaleno"
    }
}

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;

}

function calcular_area (lado1, lado2, base){
    const s = (lado1 + lado2 + base) / 2;
    const area_triangulo = (s*(s-lado1)*(s-lado2)*(s-base)) ** 0.5;
    return area_triangulo;
}