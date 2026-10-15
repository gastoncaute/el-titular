export default {
  name: 'incrustacion',
  title: 'Incrustación',
  type: 'object',
  fields: [
    {
      name: 'tipo',
      title: 'Tipo de contenido',
      type: 'string',
      options: {
        layout: 'dropdown',
        list: [
          {title: 'YouTube', value: 'youtube'},
          {title: 'Facebook', value: 'facebook'},
          {title: 'Instagram', value: 'instagram'},
          {title: 'TikTok', value: 'tiktok'},
          {title: 'HTML personalizado', value: 'html'},
          {title: 'Documento PDF', value: 'pdf'},
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'url',
      title: 'URL del video o publicación',
      type: 'url',
      description: 'Pegá la URL pública de YouTube, Facebook, Instagram o TikTok.',
      hidden: ({parent}: any) =>
        !['youtube', 'facebook', 'instagram', 'tiktok'].includes(parent?.tipo),
    },
    {
      name: 'codigoHtml',
      title: 'Código HTML',
      type: 'text',
      rows: 8,
      description: 'Código de inserción de una fuente confiable. No pegues scripts desconocidos.',
      hidden: ({parent}: any) => parent?.tipo !== 'html',
    },
    {
      name: 'tituloPdf',
      title: 'Título del PDF',
      type: 'string',
      hidden: ({parent}: any) => parent?.tipo !== 'pdf',
    },
    {
      name: 'archivoPdf',
      title: 'Archivo PDF',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      hidden: ({parent}: any) => parent?.tipo !== 'pdf',
    },
  ],
  preview: {
    select: {
      tipo: 'tipo',
      titulo: 'tituloPdf',
      url: 'url',
    },
    prepare({tipo, titulo, url}: any) {
      return {
        title: titulo || tipo || 'Incrustación',
        subtitle: url || 'Contenido incrustado',
      }
    },
  },
}
