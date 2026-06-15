// URL base de la API del Met
const URL_BASE = 'https://collectionapi.metmuseum.org/public/collection/v1'


// Función genérica para pedir datos a la API del Met
const peticionMet = async (accion) => {
  try {
    const peticion = await fetch(`${URL_BASE}/${accion}`);
    const datos = await peticion.json();
    return datos;
  } catch (error) {
    console.log(error);
  }
};

const getRandomArtwork = async ()=> {
  try {
    const busqueda = await peticionMet("search?q=painting&hasImages=true&isPublicDomain=true");
    const { total, objectIDs } = busqueda;
    const indiceAleatorio = Math.floor(Math.random()*objectIDs.length);
    const idObra = objectIDs[indiceAleatorio]
    // return(indiceAleatorio);
  } catch (error) {
    console.log(error);
  }
  
}