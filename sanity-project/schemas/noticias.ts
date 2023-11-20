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
      name: 'imagen_2',
      title: 'Segunda Imagen',
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
      type: 'string',
      title: 'Primer Video de YouTube',
    },
    {
      name: 'TwitterID_1',
      type: 'string',
      title: 'Primer ID de Twitter',
    },
    {
      name: 'segundo_bloque',
      type: 'array',
      title: 'Segundo Bloque',
      of: [
        {
          type: 'block',
        },
      ],
    },

    {
      name: 'imagen_3',
      title: 'Tercer Imagen',
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
      type: 'string',
      title: 'Segundo Video de YouTube',
    },
    {
      name: 'TwitterID_2',
      type: 'number',
      title: 'Segundo ID de Twitter',
    },
    {
      name: 'tercer_bloque',
      type: 'array',
      title: 'Tercer Bloque',
      of: [
        {
          type: 'block',
        },
      ],
    },

    {
      name: 'imagen_4',
      title: 'Cuarta Imagen',
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
      type: 'string',
      title: 'Tercer Video de YouTube',
    },
    {
      name: 'TwitterID_3',
      type: 'number',
      title: 'Tercer ID de Twitter',
    },
    {
      name: 'cuarto_bloque',
      type: 'array',
      title: 'Cuarto Bloque',
      of: [
        {
          type: 'block',
        },
      ],
    },

    {
      name: 'imagen_5',
      title: 'Quinta Imagen',
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
      type: 'string',
      title: 'Cuarto Video de YouTube',
    },
    {
      name: 'TwitterID_4',
      type: 'number',
      title: 'Cuarto ID de Twitter',
    },
    {
      name: 'quinto_bloque',
      type: 'array',
      title: 'Quinto Bloque',
      of: [
        {
          type: 'block',
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
            },
          ],
        },
      ],
    },
  ],
}
