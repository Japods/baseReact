/**
 * getIdImage
    Función que obtiene el ID de la imagen a partir de un arreglo de datos y un índice de slide
    @param {Array} data - Arreglo de datos con información de las imágenes
    @param {Number} itemSlide - Índice actual del slide
    @return {String} id_image - ID de la imagen actual
    */
export const getIdImage = (data, itemSlide) => {
  let id_image = "";
  // Obtiene el arreglo de imágenes actual a partir del índice del slide
  const elementImagesArray = data[itemSlide].images;

  // Asigna el ID de la primera imagen a la variable id_image
  id_image = elementImagesArray[0]._id;

  // Devuelve el ID de la imagen
  return id_image;
};
