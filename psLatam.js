const colombia = [];
colombia.push({
  name: "Camila",
  salary: 500,
});
colombia.push({
  name: "Nath",
  salary: 1500,
});
colombia.push({
  name: "Luisa",
  salary: 1800,
});
colombia.push({
  name: "Laura",
  salary: 1000,
});
colombia.push({
  name: "Daniela",
  salary: 2200,
});
colombia.push({
  name: "Esperancita",
  salary: 200,
});
colombia.push({
  name: "Carla",
  salary: 500,
});
colombia.push({
  name: "Antonieta",
  salary: 1500,
});
colombia.push({
  name: "Alicia",
  salary: 1300,
});
colombia.push({
  name: "Ana",
  salary: 2400,
});
colombia.push({
  name: "Julia",
  salary: 3400,
});
colombia.push({
  name: "Rosa",
  salary: 400,
});
colombia.push({
  name: "Angélica",
  salary: 400,
});
colombia.push({
  name: "Tatiana",
  salary: 400,
});
colombia.push({
  name: "Lorena",
  salary: 600,
});
colombia.push({
  name: "Carolina",
  salary: 1600,
});
colombia.push({
  name: "Fernanda",
  salary: 2600,
});
colombia.push({
  name: "Nora",
  salary: 1000,
});
colombia.push({
  name: "Gisselle",
  salary: 2000,
});
colombia.push({
  name: "Bill Gates",
  salary: 100000000,
});

const salarios = colombia.map(
    function(sueldo){
        return sueldo.salary;
    }
);
const salariosOrdenados = salarios.sort(
    function(sA, sN){
        return sA - sN;
    }
);

function esPar(numero){
    return numero%2===0;
};

const spliceStart = salariosOrdenados.length * 0.9;
const spliceAcount =salariosOrdenados.length - spliceStart;


const colTop10 = salariosOrdenados.splice(spliceStart, spliceAcount);
const mitadSalarios = colTop10.length / 2;

let medianatop10 = 0;
if(esPar(colTop10.length)){
    salaryA = colTop10[mitadSalarios];
    salaryB = colTop10[mitadSalarios- 1];
    medianatop10 = (salaryA + salaryB) /2
}
else{
    medianatop10 = salariosOrdenados[mitadSalarios]
}

console.log(medianatop10)
alert(medianatop10)