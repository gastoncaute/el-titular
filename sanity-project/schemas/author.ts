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
    },
    {
      name: 'photo',
      type: 'image',
      title: 'Foto',
    },
  ],
}
