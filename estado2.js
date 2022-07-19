function calculo2 () {
    const inputAño = document.getElementById("inputAño");
    const año = inputAño.value;
    const inputVenta = document.getElementById("inputVenta");
    const venta = inputVenta.value;
    const inputCosto = document.getElementById("inputCosto");
    const costo = inputCosto.value;
    const inputGastos = document.getElementById("inputGastos");
    const gastos = inputGastos.value;
    const inputAdministracion = document.getElementById("inputAdministracion");
    const administracion = inputAdministracion.value;
    const inputOtrosIngresos = document.getElementById("inputOtrosIngresos");
    const otrosIngresos = inputOtrosIngresos.value;
    const inputOtrosEgresos = document.getElementById("inputOtrosEgresos");
    const otrosEgresos = inputOtrosEgresos.value;
    const inputImpuesto = document.getElementById("inputImpuesto");
    const impuesto = inputImpuesto.value;

    
    
    const ventas2 = []
    
    ventas2.push ({
        año : año,
        venta: venta,
        costo : costo,
        gastos : gastos,
        administracion : administracion,
        otrosingresos : otrosIngresos,
        otrosegresos : otrosEgresos,
        impuesto : impuesto,
    });
    
    //Utilidad Bruta
    const valor = ventas2.map(
    function(lista){
        return lista.ventas2;
    });
    const descuento = ventas2.map(
    function(lista){
        return lista.costo;
    }); 
    const utilidadBruta = valor - descuento;
    const textBruta = document.getElementById("utilidadBruta")
    textBruta.innerText = "Utilidad bruta: $" + utilidadBruta;

    // Utilidad Operativa
    const gastoVenta = ventas2.map(
    function(lista){
        return lista.gastos;
    });
    const gastoAdmin = ventas2.map(
    function(lista){
        return lista.administracion;
    });
    const utilidadOperativa = utilidadBruta - gastoVenta - gastoAdmin; 
    const textOperativa = document.getElementById("UtilidadOperativa");
    textOperativa.innerText = "Utilidad Operativa: $" + utilidadOperativa;

    // Utilidad antes de Impuesto

    const ingresos = ventas2.map(
    function(lista){
        return lista.otrosingresos;
    });
    const egresos = ventas2.map(
    function(lista){
        return lista.otrosegresos;
    });
    const utilidadSinImpuesto  =  utilidadOperativa + (ingresos - egresos);
    const textUtilidadSinImpuesto = document.getElementById("UtilidadSinImpuesto");
    textUtilidadSinImpuesto.innerText = "Utilidad antes de Impuestos: $" + utilidadSinImpuesto;
    
    // Utilidad Neta

    const porcentajeImpuesto = ventas2.map(
    function(lista){
        return lista.impuesto;
    });
    const impuestoRenta = (porcentajeImpuesto / 100) * utilidadSinImpuesto;
    const textImpuestoRenta = document.getElementById("impuestoRenta");
    textImpuestoRenta.innerText = "El impuesto a la Renta es: $" + impuestoRenta;

    const UtilidadNeta = utilidadSinImpuesto - impuestoRenta;
    const textNeta = document.getElementById("UtilidadNeta");
    textNeta.innerText = "Utilidad neta: $" + UtilidadNeta;
    
    console.log(ventas2);

}



