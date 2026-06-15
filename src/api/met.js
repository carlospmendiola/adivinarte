// URL base de la API del Met
const URL_BASE = 'https://collectionapi.metmuseum.org/public/collection/v1'


// Función genérica para pedir datos a la API del Met
export const peticionMet = async (accion) => {
  try {
    const peticion = await fetch(`${URL_BASE}/${accion}`);
    const datos = await peticion.json();
    return datos;
  } catch (error) {
    console.log(error);
  }
}

// Obtiene una obra aleatoria de la colección del Met.
// Hace dos peticiones: una para buscar IDs de obras que cumplan los filtros,
// y otra para obtener el detalle completo de una obra elegida al azar.
export const getRandomArtwork = async ()=> {
  try {
    const busqueda = await peticionMet("search?q=painting&hasImages=true");
    const { objectIDs } = busqueda;
    const indiceAleatorio = Math.floor(Math.random()*objectIDs.length);
    const idObra = objectIDs[indiceAleatorio];
    const detalleObra = await peticionMet(`objects/${idObra}`);
    return detalleObra;
  } catch (error) {
    console.log(error);
  }
  
}

export const generarOpciones = async(obraCorrecta, campo)=> {
  try {
    const valorCorrecto = obraCorrecta [campo]
    const senuelo1 = await getRandomArtwork();
    const senuelo2 = await getRandomArtwork();
    const senuelo3 = await getRandomArtwork();
    const valorSenuelo1 = senuelo1[campo]
    const valorSenuelo2 = senuelo2[campo]
    const valorSenuelo3 = senuelo3[campo]
    return [valorCorrecto, valorSenuelo1, valorSenuelo2, valorSenuelo3].sort(() => Math.random() - 0.5);
  } catch (error) {
    console.log(error);
  }
}