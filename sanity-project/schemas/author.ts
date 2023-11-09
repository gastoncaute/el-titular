export default {
  name: 'author',
  type: 'document',
  title: 'Autor',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre',
      validation: (Rule: any) => [
        Rule.required().error('El nombre del autor es obligatorio'),
        Rule.unique('name').error('Este nombre de autor ya existe'),
      ],
    },
    {
      name: 'photo',
      type: 'image',
      title: 'Foto',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
