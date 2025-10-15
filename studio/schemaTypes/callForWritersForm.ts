import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'callForWritersForm',
    title: 'Call for Future Writers Form',
    type: 'document',
    preview: {
    },
    fields: [
        defineField({
            name: 'formTitle',
            title: 'Form Title',
            type: 'string'
        }),
        defineField({
            name: 'formDek',
            title: 'Form Description',
            type: 'blockContent'
        }),
    ]

})