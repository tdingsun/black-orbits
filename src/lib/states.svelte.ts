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
    hotspotHover: 0,
    showAllHotspots: true,
});

export const highlightHotspot = (hotspotID: number) => {
    photoState.hotspotHover = hotspotID + 1; //1 indexed, so 0 means no hover
};

export const dehighlightHotspot = () => {
    photoState.hotspotHover = 0; //1 indexed, so 0 means no hover
};

export const toggleForm = (e: MouseEvent) => {
    e.preventDefault();
    photoState.showForm = !photoState.showForm;
};

export const toggleHotspots = () => {
    photoState.showAllHotspots = !photoState.showAllHotspots
}

export const siteState = $state({
    showColophon: false,
    modalIsVisible: false,
    nextAnnotationLeft: false,

})