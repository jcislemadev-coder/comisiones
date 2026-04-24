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
    let cmpSueldo = document.getElementById("txtSueldoBase");
    //el valor recuperado se guarda como texto dentro de otra variable
    let SueldoBasestr = cmpSueldo.value;
    //el texto se convierte a numero
    let SueldoFloat = parseFloat(SueldoBasestr);

    let cmpventas = document.getElementById("txtVentas");
    let ventasstr = cmpventas.value;
    let ventasFloat = parseFloat(ventasstr); 

    let cmpprecio = document.getElementById("txtPrecio");
    let pvppreciostr = cmpprecio.value;
    let pvpprecioFloat = parseFloat(pvppreciostr);    

    let comision = calcular_comision(ventasFloat,pvpprecioFloat);

    let total = SueldoFloat + comision;
    
    let cmpSueldoBase = document.getElementById("spSueldoBase")
    cmpSueldoBase.textContent = SueldoFloat;

    let spComision = document.getElementById("spComision");
    spComision.textContent = comision;

    let spTotal = document.getElementById("spTotal")
    spTotal.textContent = total;

}
