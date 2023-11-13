export default {
  name: 'infografias',
  type: 'document',
  title: 'Infografias',
  fields: [
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
