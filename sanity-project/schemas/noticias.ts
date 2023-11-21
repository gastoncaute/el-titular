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
          {title: 'Sociedad', value: 'Sociedad'},
          {title: 'Deporte', value: 'Deporte'},
          {title: 'Cultura', value: 'Cultura'},
          {title: 'Tendencias', value: 'Tendencias'},
          {title: 'Internacional', value: 'Internacional'},
        ],
      },
    },
    {
      name: 'title',
      type: 'string',
      title: 'Título',
      validation: (Rule: any) => [
        Rule.required().error('El "Título" es obligatorio'),
        Rule.max(90).error('El "Título" debe tener 90 caracteres como máximo'),
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
          type: 'string',
          title: 'Epígrafe',
          validation: (Rule: any) => Rule.required().error('El "Epígrafe" obligatorio'),
        },
      ],
      validation: (Rule: any) => Rule.required().error('La "Imagen Principal" es obligatoria'),
    },
    {
      name: 'copete',
      type: 'array',
      title: 'Copete + Desarrollo',
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
              type: 'string',
              title: 'Epígrafe',
              validation: (Rule: any) => Rule.required().error('El "Epígrafe" obligatorio'),
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
          description: 'Colocar ID de la Publicacion',
          type: 'string',
          title: 'ID de Twitter',
        },
        {
          name: 'segunda_descripcion',
          type: 'array',
          title: 'Descripcion',
          of: [
            {
              type: 'block',
            },
          ],
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
              type: 'string',
              title: 'Epígrafe',
              validation: (Rule: any) => Rule.required().error('El "Epígrafe" obligatorio'),
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
          description: 'Colocar ID de la Publicacion',
          type: 'string',
          title: 'ID de Twitter',
        },
        {
          name: 'tercera_descripcion',
          type: 'array',
          title: 'Descripcion',
          of: [
            {
              type: 'block',
            },
          ],
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
              type: 'string',
              title: 'Epígrafe',
              validation: (Rule: any) => Rule.required().error('El "Epígrafe" obligatorio'),
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
          description: 'Colocar ID de la Publicacion',
          type: 'string',
          title: 'ID de Twitter',
        },
        {
          name: 'cuarta_descripcion',
          type: 'array',
          title: 'Descripcion',
          of: [
            {
              type: 'block',
            },
          ],
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
              type: 'string',
              title: 'Epígrafe',
              validation: (Rule: any) => Rule.required().error('El "Epígrafe" obligatorio'),
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
          description: 'Colocar ID de la Publicacion',
          type: 'string',
          title: 'ID de Twitter',
        },
        {
          name: 'quinta_descripcion',
          type: 'array',
          title: 'Descripcion',
          of: [
            {
              type: 'block',
            },
          ],
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
              type: 'string',
              title: 'Epígrafe',
              validation: (Rule: any) => Rule.required().error('El "Epígrafe" obligatorio'),
            },
          ],
        },
      ],
    },
  ],
}
