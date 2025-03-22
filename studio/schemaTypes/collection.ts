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
            name: 'isCurrent',
            title: 'Is Current Collection',
            description: 'set to true if this is the current collection',
            type: 'boolean',
            initialValue: false,
            validation: (Rule) => Rule.required(),
        }),
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
            type: 'string'
        }),
        defineField({
            name: 'interviewAuthor',
            title: 'Interview author',
            type: 'string'
        }),
        defineField({
            name: 'interviewAudio',
            title: 'Interview audio',
            type: 'file'
        }),
        defineField({
            name: 'interview',
            title: 'Interview',
            type: 'blockContent'
        }),
        defineField({
            name: 'essayTitle',
            title: 'Essay title',
            type: 'string'
        }),
        defineField({
            name: 'essayAuthor',
            title: 'Essay author',
            type: 'string'
        }),
        defineField({
            name: 'essayCoverImg',
            title: 'Essay Cover Image',
            type: 'reference',
            to: [
                { type: 'collectionImage'}
            ]
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