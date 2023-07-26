import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pet',
  type: 'document',
  title: 'Pet',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    }),
  ],
})
