export default {
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    {
      name: 'client',
      title: 'Client',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'client',
      media: 'image',
    },
  },
}
