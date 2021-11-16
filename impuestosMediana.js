function media() {
    const c = document.querySelector("#cantidad").value;
    const valores = [
        2,7,5
    // for (let i = 0; i < c ; i++) {
    //     return parseInt(document.querySelector("#valor").value);
    // }
        // parseInt(document.querySelector("#valor").value),
        // parseInt(document.querySelector("#valor2").value),
        // parseInt(document.querySelector("#valor3").value),
        // parseInt(document.querySelector("#valor4").value)
    ]
    alert(c);
}

document.querySelector("#cantidad").onchange = () => seleccion();
document.querySelector("#confirmar").onclick = () => media();
function seleccion() {
    const c = document.querySelector("#cantidad").value;
    document.getElementById('render').style.display = 'block';
    const formulario = document.getElementById("render"); 
    document.getElementById("cantidad").style.display = 'none'; 
     
    for (let i = 1; i <= c; i++) {
        formulario.insertAdjacentHTML('beforeend', '<input type="tel" name="valor'+i+'" id="valor'+i+'"><br>');
        // formulario.outerHTML = '<input type="tel" name="valor'+i+'" id="valor'+i+'"><br>';
    }
}

