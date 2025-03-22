export const tagsState = $state({
    currCollectionTags: new Set(),
    currCollectionYears: new Set(),
    selectedTag: '',
    selectedYear: ''
})

export const collectionState = $state({
    currCollection: {},
    allCollections: {}
});

export const photoState = $state({
    xPos: 0,
    yPos: 0,
    showForm: false,
})