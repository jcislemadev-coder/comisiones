const VENTAS_BASE = 5;

function calcular_comision(numeroventas, pvproducto) {
    let comision = 0;

    if (numeroventas > VENTAS_BASE) {
        let ventas_extras;
        ventas_extras = numeroventas - VENTAS_BASE;
        comision = ventas_extras * (pvproducto * 0.10);
    }

    return comision;
}

function calcular() {
    
    //recuperamos propiedades de las cajas de texto
    // let cmpSueldo = document.getElementById("txtSueldoBase");
    //el valor recuperado se guarda como texto dentro de otra variable
    
    let SueldoFloat = recuperarFloat("txtSueldoBase")
    let ventasFloat = recuperarFloat("txtVentas")
    let pvpprecioFloat = recuperarFloat("txtPrecio") 


    let comision = calcular_comision(ventasFloat,pvpprecioFloat);

    let total = SueldoFloat + comision;
    
    let cmpSueldoBase = document.getElementById("spSueldoBase")
    cmpSueldoBase.textContent = SueldoFloat;

    let spComision = document.getElementById("spComision");
    spComision.textContent = comision;

    let spTotal = document.getElementById("spTotal")
    spTotal.textContent = total;

}
