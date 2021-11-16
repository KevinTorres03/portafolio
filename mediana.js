function promedio(lista) {
    const sumlist = lista.reduce(
        function (valorActual = 0, newelement) {
            return valorActual + newelement
        }
    );
    const promedioLista = sumlist / lista.length;
    return promedioLista;
}

const edades = [
    18,
    20,
    43,
    13
]
const newEdades = edades.sort();

const mitadlist = parseInt(edades.length / 2);

function par(number) {
    if (number % 2 === 0) {
        return true;
    }else{
        return false;
    }
}
let mediana;
if (par(edades.length)) {
    const elemento1 = edades[mitadlist - 1];
    const elemento2 = edades[mitadlist];

    const promedioT = promedio([elemento1, elemento2]);

    mediana= promedioT;
    
}else{
    mediana = edades[mitadlist];

}

