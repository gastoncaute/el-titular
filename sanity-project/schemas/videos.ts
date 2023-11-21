export default {
  name: 'videos',
  type: 'document',
  title: 'Videos',
  fields: [
    {
      name: 'categoria',
      type: 'string',
      title: 'Categoria',
      validation: (Rule: any) => Rule.required().error('La "Categoría" es obligatoria'),
      options: {
        list: [
          {title: 'Entrevistas', value: 'Entrevistas'},
          {title: 'Recorridos', value: 'Recorridos'},
        ],
      },
    },
    {
      name: 'title',
      type: 'array',
      title: 'Título',
      validation: (Rule: any) => [
        Rule.required().error('El título del Video es obligatorio'),
        Rule.max(90).error('El titulo debe tener 90 caracteres como máximo'),
      ],
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'link_video',
      type: 'string',
      title: 'Link del Video',
      validation: (Rule: any) => Rule.required().error('El link del Video es obligatorio'),
    },
  ],
}
