function recuperar(idComponente) {
    let component = document.getElementById(idComponente);
    let valor = component.value;

    return valor;
}

function recuperarFloat(idComponente) {

    let valorTexto = recuperar(idComponente);
    let valorFloat = parseFloat(valorTexto);

    return valorFloat;
}