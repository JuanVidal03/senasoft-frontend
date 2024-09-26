export function aplicarDescuentoPorEstrato(valor, estrato) {
    let descuento = 0;

    if (estrato >= 1 && estrato <= 2) {
        descuento = 0.10; 
    } else if (estrato >= 3 && estrato <= 4) {
        descuento = 0.05;
    } else if (estrato >= 5 && estrato <= 6) {
        descuento = 0; 
    } else {
        throw new Error("Estrato no válido");
    }

    const valorConDescuento = valor - (valor * descuento);
    return valorConDescuento;
}