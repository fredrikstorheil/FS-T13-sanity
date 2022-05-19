export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'edstart',
      title: 'Year start',
      type: 'string',
    },
    {
      name: 'edend',
      title: 'Year end',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
