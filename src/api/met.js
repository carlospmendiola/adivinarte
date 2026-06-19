// URL base de la API del Met
const urlApi = import.meta.env.VITE_API_URL;


// Función genérica para pedir data a la API del Met
// export const fetchMet = async (accion) => {
//   try {
//     const request = await fetch(`${urlApi}/${accion}`);
//     const data = await request.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// Obtiene una obra aleatoria de la colección del Met.
// Hace dos peticiones: una para buscar IDs de obras que cumplan los filtros,
// y otra para obtener el detalle completo de una obra elegida al azar.
export const getRandomArtwork = async () => {
  try {
    const search = await fetchMet("search?q=painting&hasImages=true");
    const { objectIDs } = search;
    
    let artworkDetail = null;
    while (!artworkDetail || !artworkDetail.primaryImageSmall || !artworkDetail.artistDisplayName) {
      const randomIndex = Math.floor(Math.random() * objectIDs.length);
      const artworkId = objectIDs[randomIndex];
      artworkDetail = await fetchMet(`objects/${artworkId}`);
    }
    
    return artworkDetail;
  } catch (error) {
    console.log(error);
  }
}
/* Elegimos al azar si la pregunta será sobre el título o el artista. randoms valdrá "title" o "artistDisplayName" (elegido al azar). No necesita await porque randomField() no hace peticiones a la API. */
export const randomField = () => {
  
  const fields = ["title", "artistDisplayName"]
  const selectField = Math.floor(Math.random()*fields.length);
  return fields [selectField];
}

export const optionsGenerate = async(correctArtwork, field)=> {
  try {
    const correctValue = correctArtwork [field]
    const decoy1 = await getRandomArtwork();
    const decoy2 = await getRandomArtwork();
    const decoy3 = await getRandomArtwork();
    const decoyValor1 = decoy1[field]
    const decoyValor2 = decoy2[field]
    const decoyValor3 = decoy3[field]
    return [correctValue, decoyValor1, decoyValor2, decoyValor3].sort(() => Math.random() - 0.5);
  } catch (error) {
    console.log(error);
  }
}

export const getCatalogueArtworks = async( limit=48 )=> {
  // 1. Búsqueda para obtener objectIDs
  try {
    const search48 = await fetchMet("search?q=painting&hasImages=true");
    const objectIDs = search48;
  } catch (error) {
    
  }

}