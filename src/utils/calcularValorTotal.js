export function calcularTarifaTotal(fechaInicio, fechaFin, costoDiario) {
    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);
  
    //al pasar las fechas a tipo date y hacemos una resta javaScript 
    // automaticamente a cada uno lo convierte a cada uno a su valor en milisegundos
    // al hacer la resta obtenemos la diferencia en milisegundos
    const diferencia = fin - inicio;
    
   // para poder pasar la diferencia a dias hay que tener en cuenta lo siguente
   //Hay 1000 milisegundos en un segundo.
    //Hay 60 segundos en un minuto.
    //Hay 60 minutos en una hora.
    //Hay 24 horas en un día.
    const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24)); 
    if (dias <= 0) {
        return 0;
    }

    const tarifaTotal = dias * costoDiario;

    return tarifaTotal;
}