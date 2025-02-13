import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'collection',
    title: 'Collection',
    type: 'document',
    preview: {
        select: {
            title: 'title',
            subtitle: 'dek'
        }
    },
    fields: [
        defineField({
            name: 'title',
            title: 'Collection Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: (Rule) => Rule.required(),
            options: {
                source: 'title',
                maxLength: 96,
            }
        }),
        defineField({
            name: 'dek',
            title: 'Collection Description',
            type: 'blockContent',
        }),
        defineField({
            name: 'interviewTitle',
            title: 'Interview Title',
            type: 'blockContent'
        }),
        defineField({
            name: 'interview',
            title: 'Interview',
            type: 'blockContent'
        }),
        defineField({
            name: 'essayTitle',
            title: 'Essay title',
            type: 'blockContent'
        }),
        defineField({
            name: 'essayDek',
            title: 'Essay description/blurb',
            type: 'blockContent'
        }),
        defineField({
            name: 'essay',
            title: 'Essay',
            type: 'blockContent'
        }),
        defineField({
            name: 'photos',
            title: 'Photos',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    name: 'photo',
                    to: [
                        {
                            type: 'collectionImage'
                        }
                    ]

                }
            ]

        })
        
    ]

})