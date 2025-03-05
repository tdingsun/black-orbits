import {defineField, defineType} from 'sanity'

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
            type: 'string'
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
            name: 'year',
            title: 'Year',
            type: 'number'
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
                            name: 'content',
                            title: 'Hotspot content',
                            type: 'blockContent'
                        })
                    ]
                }
            ]

        })
        
    ]

})