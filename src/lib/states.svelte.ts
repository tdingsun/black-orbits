export const tagsState = $state({
    currCollectionTags: new Set(),
    currCollectionYears: new Set(),
    selectedTag: '',
    selectedYear: ''
})

export const collectionState = $state({
    currCollection: {}
});