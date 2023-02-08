/**

    getIdImage
    Función que obtiene el ID de la imagen a partir de un arreglo de datos y un índice de slide
    @param {Array} data - Arreglo de datos con información de las imágenes
    @param {Number} itemSlide - Índice actual del slide
    @return {String} id_image - ID de la imagen actual
    */
export const getIdImage = (data, itemSlide) => {
  let id_image = "";
  // Arreglo para almacenar los arreglos de imágenes de cada elemento de datos
  const arraysImages = [];
  // Recorre el arreglo de datos y agrega los arreglos de imágenes a un arreglo general
  data.forEach((element) => {
    arraysImages.push(element.images);
  });

  // Obtiene el arreglo de imágenes actual a partir del índice del slide
  const elementImagesArray = arraysImages[itemSlide];

  // Recorre el arreglo de imágenes y asigno, el id, a la variable
  // de tal manera, que si ya la variable esta asignada a un valor, que no sea el mismo
  // no lo vuelva asignar
  elementImagesArray.forEach((element) => {
    if (!id_image) {
      id_image = element._id;
    }
  });

  // Devuelve el ID de la imagen
  return id_image;
};
