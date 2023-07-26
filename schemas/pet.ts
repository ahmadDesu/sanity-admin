import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
      defineField({
        name: 'name',
        type: 'string',
        title: 'Name',
      }),
    ],
  })
  