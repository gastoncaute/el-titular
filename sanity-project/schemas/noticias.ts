export default {
  name: 'noticias',
  type: 'document',
  title: 'Noticias',
  fields: [
    {
      name: 'autor',
      type: 'reference',
      title: 'Autor',
      to: [{type: 'author'}],
    },
    {
      name: 'categoria',
      type: 'string',
      title: 'Categoría',
      validation: (Rule: any) => Rule.required().error('La "Categoría" es obligatoria'),
      options: {
        list: [
          {title: 'Policiales', value: 'Policiales'},
          {title: 'Cultura', value: 'Cultura'},
          {title: 'Politica', value: 'Politica'},
          {title: 'Actualidad', value: 'Actualidad'},
        ],
      },
    },
    {
      name: 'title',
      type: 'string',
      title: 'Título',
      validation: (Rule: any) => [
        Rule.required().error('El "Título" es obligatorio'),
        Rule.max(110).error('El "Título" debe tener 110 caracteres como máximo'),
      ],
    },
    {
      name: 'bajada',
      type: 'string',
      title: 'Bajada',
      validation: (Rule: any) => Rule.required().error('La "Bajada" es obligatoria'),
    },

    // BLOQUE PRINCIPAL
    {
      name: 'image_principal',
      title: 'Imagen o Video Principal',
      description: 'SUBIR SOLO UN TIPO DE ARCHIVO',
      type: 'object',
      fields: [
        {
          name: 'imagen',
          type: 'image',
          title: 'Imagen',
        },
        {
          name: 'epigrafe',
          type: 'array',
          title: 'Epígrafe de imagen',
          of: [{type: 'block'}],
        },
        {
          name: 'video',
          type: 'file',
          title: 'Video Principal',
          description: 'Formatos permitidos: mp4, webm, ogg',
          options: {
            accept: 'video/mp4,video/webm,video/ogg',
          },
        },
        {
          name: 'video_epigrafe',
          type: 'array',
          title: 'Epígrafe de video',
          of: [{type: 'block'}],
        },
        {
          name: 'incrustaciones',
          title: 'Incrustaciones del bloque principal',
          type: 'array',
          of: [{type: 'incrustacion'}],
        },
      ],
      validation: (Rule: any) =>
        Rule.required().error('La "Imagen o Video Principal" es obligatoria'),
    },

    // COPETE E INTRODUCCIÓN
    {
      name: 'copete',
      type: 'array',
      title: 'Copete + Desarrollo',
      validation: (Rule: any) => Rule.required().error('"Copete + Desarrollo" es obligatorio'),
      of: [{type: 'block'}],
    },

    // SEGUNDO BLOQUE
    {
      name: 'segundo_bloque',
      title: 'Segundo Bloque',
      type: 'object',
      fields: [
        {
          name: 'imagen_2',
          title: 'Imagen',
          type: 'object',
          fields: [
            {
              name: 'imagen',
              type: 'image',
              title: 'Imagen',
              validation: (Rule: any) => Rule.required().error('La "Imagen" es obligatoria'),
            },
            {
              name: 'epigrafe',
              type: 'array',
              title: 'Epígrafe',
              of: [{type: 'block'}],
              validation: (Rule: any) => Rule.required().error('El "Epígrafe" es obligatorio'),
            },
          ],
        },
        {
          name: 'video',
          title: 'Video',
          type: 'file',
          description: 'Formatos permitidos: mp4, webm, ogg',
          options: {
            accept: 'video/mp4,video/webm,video/ogg',
          },
        },
        {
          name: 'video_epigrafe',
          type: 'array',
          title: 'Epígrafe de video',
          of: [{type: 'block'}],
        },
        {
          name: 'segunda_descripcion',
          type: 'array',
          title: 'Desarrollo',
          of: [{type: 'block'}],
        },
        {
          name: 'YouTubeCode_1',
          description: 'Campo anterior: conservado por compatibilidad',
          type: 'string',
          title: 'Video de YouTube (anterior)',
        },
        {
          name: 'TwitterID_1',
          description: 'Campo anterior: conservado por compatibilidad',
          type: 'string',
          title: 'Tweet (anterior)',
        },
        {
          name: 'incrustaciones',
          title: 'Incrustaciones del segundo bloque',
          type: 'array',
          of: [{type: 'incrustacion'}],
        },
      ],
    },

    // TERCER BLOQUE
    {
      name: 'tercer_bloque',
      title: 'Tercer Bloque',
      type: 'object',
      fields: [
        {
          name: 'imagen_3',
          title: 'Imagen',
          type: 'object',
          fields: [
            {
              name: 'imagen',
              type: 'image',
              title: 'Imagen',
              validation: (Rule: any) => Rule.required().error('La "Imagen" es obligatoria'),
            },
            {
              name: 'epigrafe',
              type: 'array',
              title: 'Epígrafe',
              of: [{type: 'block'}],
              validation: (Rule: any) => Rule.required().error('El "Epígrafe" es obligatorio'),
            },
          ],
        },
        {
          name: 'video',
          title: 'Video',
          type: 'file',
          description: 'Formatos permitidos: mp4, webm, ogg',
          options: {
            accept: 'video/mp4,video/webm,video/ogg',
          },
        },
        {
          name: 'video_epigrafe',
          type: 'array',
          title: 'Epígrafe de video',
          of: [{type: 'block'}],
        },
        {
          name: 'tercera_descripcion',
          type: 'array',
          title: 'Desarrollo',
          of: [{type: 'block'}],
        },
        {
          name: 'YouTubeCode_2',
          description: 'Campo anterior: conservado por compatibilidad',
          type: 'string',
          title: 'Video de YouTube (anterior)',
        },
        {
          name: 'TwitterID_2',
          description: 'Campo anterior: conservado por compatibilidad',
          type: 'string',
          title: 'Tweet (anterior)',
        },
        {
          name: 'incrustaciones',
          title: 'Incrustaciones del tercer bloque',
          type: 'array',
          of: [{type: 'incrustacion'}],
        },
      ],
    },

    // CUARTO BLOQUE
    {
      name: 'cuarto_bloque',
      title: 'Cuarto Bloque',
      type: 'object',
      fields: [
        {
          name: 'imagen_4',
          title: 'Imagen',
          type: 'object',
          fields: [
            {
              name: 'imagen',
              type: 'image',
              title: 'Imagen',
              validation: (Rule: any) => Rule.required().error('La "Imagen" es obligatoria'),
            },
            {
              name: 'epigrafe',
              type: 'array',
              title: 'Epígrafe',
              of: [{type: 'block'}],
              validation: (Rule: any) => Rule.required().error('El "Epígrafe" es obligatorio'),
            },
          ],
        },
        {
          name: 'video',
          title: 'Video',
          type: 'file',
          description: 'Formatos permitidos: mp4, webm, ogg',
          options: {
            accept: 'video/mp4,video/webm,video/ogg',
          },
        },
        {
          name: 'video_epigrafe',
          type: 'array',
          title: 'Epígrafe de video',
          of: [{type: 'block'}],
        },
        {
          name: 'cuarta_descripcion',
          type: 'array',
          title: 'Desarrollo',
          of: [{type: 'block'}],
        },
        {
          name: 'YouTubeCode_3',
          description: 'Campo anterior: conservado por compatibilidad',
          type: 'string',
          title: 'Video de YouTube (anterior)',
        },
        {
          name: 'TwitterID_3',
          description: 'Campo anterior: conservado por compatibilidad',
          type: 'string',
          title: 'Tweet (anterior)',
        },
        {
          name: 'incrustaciones',
          title: 'Incrustaciones del cuarto bloque',
          type: 'array',
          of: [{type: 'incrustacion'}],
        },
      ],
    },

    // GALERÍA DE IMÁGENES EXISTENTE
    {
      name: 'imagenes_array',
      type: 'array',
      title: 'Lista de Imágenes',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'imagen',
              type: 'image',
              title: 'Imagen',
              validation: (Rule: any) =>
                Rule.required().error('La imagen en la lista es obligatoria'),
            },
            {
              name: 'epigrafe',
              type: 'array',
              title: 'Epígrafe',
              of: [{type: 'block'}],
            },
          ],
        },
      ],
    },
  ],
}
