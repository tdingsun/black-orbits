import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'colophon',
    title: 'Colophon',
    type: 'document',
    fields: [
        defineField({
            name: 'content',
            title: 'Colophon Content',
            type: 'blockContent'
        }),
    ]

})