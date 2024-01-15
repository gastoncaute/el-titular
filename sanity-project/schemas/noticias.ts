export default {
  name: 'noticias',
  type: 'document',
  title: 'Noticias',
  fields: [
    {
      name: 'autor',
      type: 'reference',
      title: 'Autor',
      validation: (Rule: any) => Rule.required().error('El "Autor" es obligatorio'),
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
          {title: 'Politica', value: 'Politica'},
          {title: 'Economia', value: 'Economia'},
          {title: 'Actualidad', value: 'Actualidad'},
          {title: 'Deporte', value: 'Deporte'},
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
    {
      name: 'image_principal',
      title: 'Imagen Principal',
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
          validation: (Rule: any) => Rule.required().error('El "Epígrafe" obligatorio'),
        },
      ],
      validation: (Rule: any) => Rule.required().error('La "Imagen Principal" es obligatoria'),
    },
    {
      name: 'copete',
      type: 'array',
      title: 'Copete + Desarrollo',
      validation: (Rule: any) => Rule.required().error('El "Copete + Desarrollo" es obligatorio'),
      of: [
        {
          type: 'block',
        },
      ],
    },

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
              validation: (Rule: any) => Rule.required().error('El "Epígrafe" obligatorio'),
            },
          ],
        },
        {
          name: 'video',
          title: 'Video',
          type: 'file',
          description: 'Sube tu video aquí (formatos permitidos: mp4, webm, ogg)',
          options: {
            accept: 'video/mp4,video/webm,video/ogg',
          },
          validation: (Rule: any) => Rule.required().error('El video es obligatorio'),
        },
        {
          name: 'segunda_descripcion',
          type: 'array',
          title: 'Desarrollo',
          of: [
            {
              type: 'block',
            },
          ],
        },
        {
          name: 'YouTubeCode_1',
          description: 'Colocar Link del Video',
          type: 'string',
          title: 'Video de YouTube',
        },
        {
          name: 'TwitterID_1',
          description: 'Colocar Link del Tweet',
          type: 'string',
          title: 'Tweet',
        },
      ],
    },

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
              validation: (Rule: any) => Rule.required().error('El "Epígrafe" obligatorio'),
            },
          ],
        },
        {
          name: 'video',
          title: 'Video',
          type: 'file',
          description: 'Sube tu video aquí (formatos permitidos: mp4, webm, ogg)',
          options: {
            accept: 'video/mp4,video/webm,video/ogg',
          },
          validation: (Rule: any) => Rule.required().error('El video es obligatorio'),
        },
        {
          name: 'tercera_descripcion',
          type: 'array',
          title: 'Desarrollo',
          of: [
            {
              type: 'block',
            },
          ],
        },
        {
          name: 'YouTubeCode_2',
          description: 'Colocar Link del Video',
          type: 'string',
          title: 'Video de YouTube',
        },
        {
          name: 'TwitterID_2',
          description: 'Colocar Link del Tweet',
          type: 'string',
          title: 'Tweet',
        },
      ],
    },

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
              validation: (Rule: any) => Rule.required().error('El "Epígrafe" obligatorio'),
            },
          ],
        },
        {
          name: 'video',
          title: 'Video',
          type: 'file',
          description: 'Sube tu video aquí (formatos permitidos: mp4, webm, ogg)',
          options: {
            accept: 'video/mp4,video/webm,video/ogg',
          },
          validation: (Rule: any) => Rule.required().error('El video es obligatorio'),
        },
        {
          name: 'cuarta_descripcion',
          type: 'array',
          title: 'Desarrollo',
          of: [
            {
              type: 'block',
            },
          ],
        },
        {
          name: 'YouTubeCode_3',
          description: 'Colocar Link del Video',
          type: 'string',
          title: 'Video de YouTube',
        },
        {
          name: 'TwitterID_3',
          description: 'Colocar Link del Tweet',
          type: 'string',
          title: 'Tweet',
        },
      ],
    },

    {
      name: 'quinto_bloque',
      title: 'Quinto Bloque',
      type: 'object',
      fields: [
        {
          name: 'imagen_5',
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
              validation: (Rule: any) => Rule.required().error('El "Epígrafe" obligatorio'),
            },
          ],
        },
        {
          name: 'video',
          title: 'Video',
          type: 'file',
          description: 'Sube tu video aquí (formatos permitidos: mp4, webm, ogg)',
          options: {
            accept: 'video/mp4,video/webm,video/ogg',
          },
          validation: (Rule: any) => Rule.required().error('El video es obligatorio'),
        },
        {
          name: 'quinta_descripcion',
          type: 'array',
          title: 'Desarrollo',
          of: [
            {
              type: 'block',
            },
          ],
        },
        {
          name: 'YouTubeCode_4',
          description: 'Colocar Link del Video',
          type: 'string',
          title: 'Video de YouTube',
        },
        {
          name: 'TwitterID_4',
          description: 'Colocar Link del Tweet',
          type: 'string',
          title: 'Tweet',
        },
      ],
    },

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
              validation: (Rule: any) => Rule.required().error('El "Epígrafe" obligatorio'),
            },
          ],
        },
      ],
    },
  ],
}
