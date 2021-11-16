var a = document.querySelector("#area"); var p = document.querySelector("#perimetro"); var r = document.querySelector("#raiz");

a.onclick = () => area(); p.onclick = () => perimetro(); r.onclick = () => raiz();

function area() {
    alert("Hola usuario, en este programa vamos a obtener el area de un triangulo isoceles");
    var base = parseInt(prompt("Ingrese la medida de la base: "));
    var lado1 = parseInt(prompt("Ingrese la medida del primer lado: "));
    var lado2 = parseInt(prompt("Ingrese la medida del segundo lado: "));

    if (Number.isInteger(base) && Number.isInteger(lado1), Number.isInteger(lado2)) {
        if (base === lado1 || base === lado2 ) {
            alert("Todas las medidas de los lados son iguales, 2 lados deben ser iguales por favor intentelo nuevamente.");
            area();
        }else if(lado1 != lado2){
            alert("Los lados laterales no son iguales intentelo nuevamente.")
            area();
        }else{
            var a = lado1 * lado2;
            var b = base / 2;
            var c = b * b;
            var d = a - c;
            var e = Math.sqrt(d);
            if(Number.isSafeInteger(e)){
                var areaT = (base * e)/ 2; 
                var areaT2 = areaT.toFixed(1);
                alert("camino del if, El area del triangulo es: "+areaT2+" ya que su altura es: "+e);
            }else{
                var f = e.toFixed(1);
                var areaT = (base * f)/2;
                var areaT2 = areaT.toFixed(1);
                alert("camino del else, El area del triangulo es: "+areaT2+" ya que su altura es: "+f);
            }
            
            var option = confirm("Desea ingr  nuevas medidas?");
            if(option === true){
                area();
            }
        }
    }
}
function perimetro() {
    alert("Hola usuario, en este programa vamos a obtener el perimetro de un triangulo isoceles");
    var base = parseInt(prompt("Ingrese la medida de la base: "));
    var lado1 = parseInt(prompt("Ingrese la medida del primer lado: "));
    var lado2 = parseInt(prompt("Ingrese la medida del segundo lado: "));

    if (Number.isInteger(base) && Number.isInteger(lado1), Number.isInteger(lado2)) {
        if (base === lado1 || base === lado2 ) {
            alert("los numeros son iguales por favor intentelo nuevamente.");
            perimetro();
        }else if(lado1 != lado2){
            alert("Los lados laterales no son iguales intentelo nuevamente.")
            perimetro();
        }else{
            var perimetroT = base + lado1 + lado2;
            alert("El perimetro del triangulo es: "+perimetroT);
            var option = confirm("Desea ingresar nuevas medidas?")
            if(option === true){
                perimetro();
            }
        }
    }
}
function raiz() {
    var numero = parseInt(prompt("Ingrese el numero para hayar la raiz: "));
    var ra =Math.sqrt(numero); // Haya la raiz cuadrada del numero especificado
    var re = ra.toFixed(2); //redondear el decimar a 2 cifras despues de la coma
    console.log("La raiz es: "+re);
}

// Porcentaje y descuento

function descuento(precio, desc) {
    let precioOrg = parseInt(precio) ;
    let descuento = desc;

    let precioConDescuento = 100 - descuento
    let precioT = (precioOrg * precioConDescuento)/100;
    return precioT;
}

function valores() {
    var cupon = document.getElementById("cupon").value;
    switch (cupon) {
        case "Aa2y3qs":
            var desc = 30;
            break;
        case "Br5F6hf":
            var desc = 20;
            break;
        case "bB56/f4":
            var desc = 15;
            break;
        default:
            var desc = 'invalido';
            break;
    }
    if (desc === 'invalido') {
        alert("Cupon no valido! Intentelo nuevamente.");
        document.getElementById("respuesta").style.display = "none";
    }else{
        var precio = document.getElementById("price").value;
        var nombre = document.getElementById("name").value;
        var total = descuento(precio, desc);
        document.querySelector("#titulo").innerHTML = "El total a pagar por el producto "+nombre+" es:";
        document.querySelector("p").innerHTML = total+"$";
        document.getElementById("respuesta").style.display = "block";
    }
    
}
