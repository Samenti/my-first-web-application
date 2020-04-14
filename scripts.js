let imgData = [{
    file: 'images/photo-of-a-pathway-in-a-forest-1496373.jpg',
    title: 'Pathway in a Forest',
    description: 'Lorem ipsum'
}, {
    file: 'images/animal-bright-bunny-chamomile-372166.jpg',
    title: 'Bright Bunny Chamomile',
    description: 'Lorem ipsum'
}, {
    file: 'images/alps-barn-clouds-country-358532.jpg',
    title: 'Countryside in the Alps',
    description: 'Lorem ipsum'
}, {
    file: 'images/pink-flowers-photograph-1083822.jpg',
    title: 'Pink Flowers',
    description: 'Lorem ipsum'
}, {
    file: 'images/architecture-art-bridge-cliff-459203.jpg',
    title: 'Cliff Bridge',
    description: 'Lorem ipsum'
}, {
    file: 'images/close-up-of-tree-against-sky-255441.jpg',
    title: 'Tree Against Sky',
    description: 'Lorem ipsum'
}, {
    file: 'images/bird-s-eye-view-of-city-2246476.jpg',
    title: "Bird's Eye View of the City",
    description: 'Lorem ipsum'
}, {
    file: 'images/seaport-during-daytime-132037.jpg',
    title: 'Seaport During Daytime',
    description: 'Lorem ipsum'
}, {
    file: 'images/blue-sea-under-clear-blue-sky-50594.jpg',
    title: 'Blue Sea Under Clear Blue Sky',
    description: 'Lorem ipsum'
}, {
    file: 'images/animal-africa-zoo-lion-33045.jpg',
    title: 'Lion',
    description: 'Lorem ipsum'
}, {
    file: 'images/landscape-photography-of-snowy-mountain-1366919.jpg',
    title: 'Snowy Mountain Landscape',
    description: 'Lorem ipsum'
}, {
    file: 'images/close-up-of-leaf-326055.jpg',
    title: 'Leaf Close-up',
    description: 'Lorem ipsum'
}, {
    file: 'images/photography-of-fall-trees-1591447.jpg',
    title: 'Fall Trees',
    description: 'Lorem ipsum'
}, {
    file: 'images/flight-landscape-nature-sky-36717.jpg',
    title: '"Nature Sky"',
    description: 'Lorem ipsum'
}, {
    file: 'images/gray-bridge-and-trees-814499.jpg',
    title: 'Bridge and Trees',
    description: 'Lorem ipsum'
}]

/* Change currently viewed image, its title and description to the first one. */
currentImageIndex = 11
$('#viewed-img').attr('src', imgData[currentImageIndex].file);
$('#img-title').text(imgData[currentImageIndex].title);
$('#img-desc').text(imgData[currentImageIndex].description);

/* Hide image info box on clicking the x. */
$('#close-button').click(() => {
    $('.image-info-box').css('visibility', 'hidden');
    $('#close-button').css('visibility', 'hidden');
});