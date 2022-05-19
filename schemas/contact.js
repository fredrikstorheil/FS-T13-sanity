export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      name: 'mail',
      title: 'Mail',
      type: 'string',
    },
    {
      title: 'LinkedIn',
      name: 'hrefLI',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      })
    },    {
      title: 'Instagram',
      name: 'hrefINSTA',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      })
    },    {
      title: 'Facebook',
      name: 'hrefFACE',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      })
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
