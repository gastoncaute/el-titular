export default {
  name: 'noticias',
  type: 'document',
  title: 'Noticias',
  fields: [
    {
      name: 'categoria',
      type: 'string',
      title: 'Categoria',
      options: {
        list: [
          {title: 'Policiales', value: 'Policiales'},
          {title: 'Politica', value: 'Politica'},
          {title: 'Economia', value: 'Economia'},
          {title: 'Sociedad', value: 'Sociedad'},
          {title: 'Deporte', value: 'Deporte'},
          {title: 'Cultura', value: 'Cultura'},
          {title: 'Tendencias', value: 'Tendencias'},
          {title: 'Internacional', value: 'Internacional'},
          {title: 'Infografias', value: 'Infografias'},
        ],
      },
    },
    {
      name: 'title',
      type: 'string',
      title: 'Título',
    },
    {
      name: 'bajada',
      type: 'string',
      title: 'Bajada',
    },
    {
      name: 'image_principal',
      type: 'string',
      title: 'Imagen Principal',
    },
    {
      name: 'epigrafe',
      type: 'string',
      title: 'Epígrafe',
    },
    {
      name: 'copete',
      type: 'string',
      title: 'Copete',
    },
    {
      name: 'parrafo_1',
      type: 'string',
      title: 'Párrafo 1',
    },
    {
      name: 'parrafo_2',
      type: 'string',
      title: 'Párrafo 2',
    },

    {
      name: 'imagen_2',
      type: 'string',
      title: 'Segunda Imagen',
    },
    {
      name: 'YouTubeCode_1',
      type: 'string',
      title: 'Primer Video de YouTube',
    },
    {
      name: 'TwitterID_1',
      type: 'string',
      title: 'Primer ID de Twitter',
    },
    {
      name: 'parrafo_3',
      type: 'string',
      title: 'Párrafo 3',
    },
    {
      name: 'parrafo_4',
      type: 'string',
      title: 'Párrafo 4',
    },
    {
      name: 'parrafo_5',
      type: 'string',
      title: 'Párrafo 5',
    },

    {
      name: 'imagen_3',
      type: 'string',
      title: 'Tercer Imagen',
    },
    {
      name: 'YouTubeCode_2',
      type: 'string',
      title: 'Segundo Video de YouTube',
    },
    {
      name: 'TwitterID_2',
      type: 'number',
      title: 'Segundo ID de Twitter',
    },
    {
      name: 'parrafo_36',
      type: 'string',
      title: 'Párrafo 6',
    },
    {
      name: 'parrafo_7',
      type: 'string',
      title: 'Párrafo 7',
    },
    {
      name: 'parrafo_8',
      type: 'string',
      title: 'Párrafo 8',
    },

    {
      name: 'imagen_4',
      type: 'string',
      title: 'Cuarta Imagen',
    },
    {
      name: 'YouTubeCode_3',
      type: 'string',
      title: 'Tercer Video de YouTube',
    },
    {
      name: 'TwitterID_3',
      type: 'number',
      title: 'Tercer ID de Twitter',
    },
    {
      name: 'parrafo_9',
      type: 'string',
      title: 'Párrafo 9',
    },
    {
      name: 'parrafo_10',
      type: 'string',
      title: 'Párrafo 10',
    },
    {
      name: 'parrafo_11',
      type: 'string',
      title: 'Párrafo 11',
    },

    {
      name: 'imagen_5',
      type: 'string',
      title: 'Quinta Imagen',
    },
    {
      name: 'YouTubeCode_4',
      type: 'string',
      title: 'Cuarto Video de YouTube',
    },
    {
      name: 'TwitterID_4',
      type: 'number',
      title: 'Cuarto ID de Twitter',
    },
    {
      name: 'parrafo_12',
      type: 'string',
      title: 'Párrafo 12',
    },
    {
      name: 'parrafo_13',
      type: 'string',
      title: 'Párrafo 13',
    },
    {
      name: 'parrafo_14',
      type: 'string',
      title: 'Párrafo 14',
    },
    {
      name: 'imagenes_array',
      type: 'string',
      title: 'Lista de Imágenes',
    },
  ],
}
