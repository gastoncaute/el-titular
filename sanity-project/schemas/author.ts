export default {
  name: 'author',
  type: 'document',
  title: 'Autor',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre',
      validation: (Rule: any) => [Rule.required().error('El nombre del autor es obligatorio')],
    },
    {
      name: 'photo',
      type: 'image',
      title: 'Foto',
      options: {
        accept: 'image/jpeg',
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
