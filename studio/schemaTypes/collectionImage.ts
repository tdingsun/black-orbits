import {defineField, defineType} from 'sanity'
import blockContent from './blockContent'

export default defineType({
    name: 'collectionImage',
    title: 'Photo',
    type: 'document',
    preview: {
        select: {
            title: 'title',
            subtitle: 'caption',
            media: 'image'
        }
    },
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
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
            name: 'collection',
            title: "Part of Collection",
            type: 'reference',
            to: [
                {type: 'collection'}
            ],
            validation: (Rule) => Rule.required(),

        }),

        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'imagebackside',
            title: 'Backside of Image',
            type: 'image',
        }),
        defineField({
            name: 'caption',
            title: 'Caption',
            type: 'blockContent'
        }),
        defineField({
            name: 'alt',
            title: 'Alt Text',
            type: 'string'
        }),
        defineField({
            name: 'attribution',
            title: 'Attribution',
            type: 'blockContent',
        }),
        defineField({
            name: 'size',
            title: 'Size',
            type: 'string',
        }),
        defineField({
            name: 'time',
            title: 'Time Period',
            type: 'tags',
            options: {
                includeFromRelated: 'time',
            }
        }),
        defineField({
            name: 'color',
            title: 'color',
            type: 'tags',
            options: {
                includeFromRelated: 'color',
                predefinedTags: [
                    {label: "Black and White", value: "bw"},
                    {label: "Sepia", value: "sepia"},
                    {label: "Color", value: "color"},
                ]
            }
        }),
        defineField({
            name: 'imgTags',
            title: 'Tags',
            type: 'tags',
            options: {
                includeFromRelated: 'imgTags'
            }
        }),
        defineField({
            name: 'hotspots',
            title: 'Hotspots',
            type: 'array',
            of: [
                {
                    name: 'hotspot',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'isPublished',
                            title: 'Is Published?',
                            type: 'boolean',
                            initialValue: false
                        }),
                        defineField({
                            name: 'xPos',
                            title: "x Position (percentage)",
                            type: 'number'
                        }),
                        defineField({
                            name: 'yPos',
                            title: "y Position (percentage)",
                            type: 'number'
                        }),
                        defineField({
                            name: 'title',
                            title: 'Hotspot title',
                            type: 'string'
                        }),
                        defineField({
                            name: 'attribution',
                            title: 'Attribution',
                            type: 'string'
                        }),
                        defineField({
                            name: 'email',
                            title: 'Contributor Email',
                            type: 'string'
                        }),
                        defineField({
                            name: 'content',
                            title: 'Hotspot content',
                            type: 'text'
                        }),
                        defineField({
                            name: 'userId',
                            title: 'userId',
                            type: 'string',
                            readOnly: true
                        }),
                        defineField({
                            name: 'timestamp',
                            title: 'timestamp',
                            type: 'string',
                            readOnly: true
                        })
                    ]
                }
            ]

        })
        
    ]

})