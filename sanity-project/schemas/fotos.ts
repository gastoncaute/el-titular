export default {
  name: 'fotos',
  type: 'document',
  title: 'Fotos',
  fields: [
    {
      name: 'categoria',
      type: 'string',
      title: 'Categoria',
      validation: (Rule: any) => Rule.required().error('La "Categoría" es obligatoria'),
      options: {
        list: [
          {title: 'Infografias', value: 'Infografias'},
          {title: 'Fotografias', value: 'Fotografias'},
        ],
      },
    },
    {
      name: 'title',
      type: 'string',
      title: 'Título',
      validation: (Rule: any) => [
        Rule.required().error('El título de la Infografía es obligatorio'),
        Rule.max(90).error('El titulo debe tener 90 caracteres como máximo'),
      ],
    },
    {
      name: 'photo',
      type: 'image',
      title: 'Foto',
      options: {
        accept: 'image/jpeg',
      },
      validation: (Rule: any) => [
        Rule.required().error('La imagen de la Infografía es obligatoria'),
      ],
    },
  ],
}
