// Esquema para el tipo "author"
export default {
  name: 'author',
  type: 'document',
  title: 'Autor',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'photo',
      type: 'string',
      title: 'Foto',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
