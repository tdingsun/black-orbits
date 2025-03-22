export const tagsState = $state({
    imgTags: {
        title: 'Tags',
        allTags: new Set(),
        selectedTag: ''
    },
    timeTags: {
        title: 'Time',
        allTags: new Set(),
        selectedTag: ''
    },
    colorTags: {
        title: 'Color',
        allTags: new Set(),
        selectedTag: ''
    }
})

export const collectionState = $state({
    currCollection: {},
    allCollections: {}
});

export const photoState = $state({
    xPos: 0,
    yPos: 0,
    xPixel: 0,
    yPixel: 0,
    showForm: false,
    formSubmitted: false,
    showFormError: false,
})