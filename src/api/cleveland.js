// URL base de la API del Met
const urlApi = import.meta.env.VITE_API_URL;


// // Obtiene una obra aleatoria de la colección del Cleveland Art Museum
export const getRandomArtwork = (arrCuadro) => {
  const randomIndex = Math.floor(Math.random() * arrCuadro.length)
  return arrCuadro[randomIndex]
}

// /* Elegimos al azar si la pregunta será sobre el título o el artista. randoms valdrá "title" o "artistDisplayName" (elegido al azar). No necesita await porque randomField() no hace peticiones a la API. */
export const randomField = () => {
  
  const fields = ["title", "artist"]
  const selectField = Math.floor(Math.random()*fields.length);
  return fields [selectField];
}

export const getFieldValue = (artwork, field)=> {
  let artWorkValue
  if (field == "title") {
  artWorkValue = artwork.title
  } else artWorkValue = artwork.creators[0]?.description || "Autor desconocido"
  return artWorkValue 
} 

export const phraseOption = (field)=> {
  let optionResponse
  if (field == "title") {
  optionResponse = "¿Conoces el título?"
  } else optionResponse = "¿Sabes quién es el autor?"
  return optionResponse 
}

export const optionsGenerate = (correctArtwork, arrCuadro, field)=> {
  const correctValue = getFieldValue (correctArtwork, field);
  const decoy1 = getRandomArtwork(arrCuadro);
  const decoy2 = getRandomArtwork(arrCuadro);
  const decoy3 = getRandomArtwork(arrCuadro);
  const decoyValor1 = getFieldValue(decoy1, field)
  const decoyValor2 = getFieldValue(decoy2, field)
  const decoyValor3 = getFieldValue(decoy3,field)
  return [correctValue, decoyValor1, decoyValor2, decoyValor3].sort(() => Math.random() - 0.5);
} 

