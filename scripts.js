let imgData = [{
    file: 'images/photo-of-a-pathway-in-a-forest-1496373.jpg',
    title: 'Pathway in a Forest',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}, {
    file: 'images/animal-bright-bunny-chamomile-372166.jpg',
    title: 'Bunny in a Chamomile Field',
    description: 'Pellentesque commodo lectus eget tempor sollicitudin.'
}, {
    file: 'images/alps-barn-clouds-country-358532.jpg',
    title: 'Countryside in the Alps',
    description: 'Vivamus consectetur est et nunc convallis sagittis.'
}, {
    file: 'images/pink-flowers-photograph-1083822.jpg',
    title: 'Shades of Pink',
    description: 'Nunc porttitor diam nec ornare tempor.'
}, {
    file: 'images/architecture-art-bridge-cliff-459203.jpg',
    title: 'Cliff Bridge',
    description: 'Cras id elit egestas, rhoncus nisl sit amet, venenatis mi.'
}, {
    file: 'images/close-up-of-tree-against-sky-255441.jpg',
    title: 'Heart',
    description: 'In vitae dui luctus, dapibus orci vitae, condimentum magna.'
}, {
    file: 'images/bird-s-eye-view-of-city-2246476.jpg',
    title: "Bird's Eye View of the City",
    description: 'Ut imperdiet dolor vitae tempor auctor.'
}, {
    file: 'images/seaport-during-daytime-132037.jpg',
    title: 'Seaport',
    description: 'In non nulla ultricies, posuere leo in, tincidunt justo.'
}, {
    file: 'images/blue-sea-under-clear-blue-sky-50594.jpg',
    title: 'Blue Cliffed Coast Under Clear Blue Sky',
    description: 'Aenean volutpat turpis in justo luctus congue.'
}, {
    file: 'images/animal-africa-zoo-lion-33045.jpg',
    title: 'Lion',
    description: 'Cras vitae eros varius, tincidunt odio vulputate, mollis turpis.'
}, {
    file: 'images/landscape-photography-of-snowy-mountain-1366919.jpg',
    title: 'Snowy Mountain Landscape',
    description: 'Integer pulvinar leo eget mi aliquet, sit amet tincidunt felis blandit.'
}, {
    file: 'images/close-up-of-leaf-326055.jpg',
    title: 'Glowing Treebark',
    description: 'Aenean dapibus sem non ligula rhoncus feugiat.'
}, {
    file: 'images/photography-of-fall-trees-1591447.jpg',
    title: 'Autumn Walkway',
    description: 'In ut arcu eu lorem eleifend elementum.'
}, {
    file: 'images/flight-landscape-nature-sky-36717.jpg',
    title: 'Hot Pink Twilight',
    description: 'Pellentesque dictum leo sed erat tempus, sed facilisis libero bibendum.'
}, {
    file: 'images/gray-bridge-and-trees-814499.jpg',
    title: 'Lake Bridge',
    description: 'Quisque vulputate dui non eros viverra euismod.'
}]

let thumbnailFrames = [{
    imgtagID: "#thumb-1",
    tooltipID: "#tooltip-1",
    assignedImage: 0
}, {
    imgtagID: "#thumb-2",
    tooltipID: "#tooltip-2",
    assignedImage: 1
}, {
    imgtagID: "#thumb-3",
    tooltipID: "#tooltip-3",
    assignedImage: 2
}, {
    imgtagID: "#thumb-4",
    tooltipID: "#tooltip-4",
    assignedImage: 3
}, {
    imgtagID: "#thumb-5",
    tooltipID: "#tooltip-5",
    assignedImage: 4
}, {
    imgtagID: "#thumb-6",
    tooltipID: "#tooltip-6",
    assignedImage: 5
}, {
    imgtagID: "#thumb-7",
    tooltipID: "#tooltip-7",
    assignedImage: 6
}]

/* Add a better modulo operator so it works with negative numbers as well. */
Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
};

/* Put image with index 'num' into the viewer frame. */
let changeImage = (num) => {
    $('#viewed-img').attr('src', imgData[num].file);
    $('#img-title').text(imgData[num].title);
    $('#img-desc').text(imgData[num].description);
    currentImageIndex = num;
    
    /* Search thumbnailFrames if any of them features the currently viewed image, if yes, apply 'selected' style on that thumbnail. */
    let currentThumbnails = [];
    thumbnailFrames.forEach(frame => {
        currentThumbnails.push(frame.assignedImage)
    });
    let currentImagePosition = -1;
    currentImagePosition = currentThumbnails.indexOf(currentImageIndex)
    if (currentImagePosition !== -1) {
        $(thumbnailFrames[currentImagePosition].imgtagID).parent('div').addClass('selected');
        currentThumbnails.splice(currentImagePosition, 1);
        currentThumbnails.forEach((element) => {
            $(thumbnailFrames[element].imgtagID).parent('div').removeClass('selected');
        });
    } else {
        currentThumbnails.forEach((element) => {
            $(thumbnailFrames[element].imgtagID).parent('div').removeClass('selected');
        });
    }
};

/* Function to change thumbnails to 7 consecutive images starting from 'thumbnailedPosition'. */
function changeThumbnail(frame, index) {
    let imageIndex = index + thumbnailedPosition;
    $(frame.imgtagID).attr('src', imgData[imageIndex].file);
    $(frame.tooltipID).text(imgData[imageIndex].title);
    
    /* This feeds back imageIndex into the thumbnail array. */
    frame.assignedImage = imageIndex
    
    /* This adds changeImage functionality to the thumbnails. */
    $(frame.imgtagID).parent().on('click', function() {
        $('#viewed-img').attr('src', imgData[imageIndex].file);
        $('#img-title').text(imgData[imageIndex].title);
        $('#img-desc').text(imgData[imageIndex].description);
        currentImageIndex = imageIndex;
    });
}

/* Change currently viewed image, its title and description to the first one. */
let currentImageIndex = 0;
$(document).ready(changeImage(currentImageIndex));
/* Change current thumbnails to the first 7 image. */
let thumbnailedPosition = 0;
$(document).ready(thumbnailFrames.forEach(changeThumbnail));

/* Pressing a button on the side switches to the previous/next image. 
It also restores visibility to the image info box. */
$('#left-arrow').click(() => {
    currentImageIndex = (--currentImageIndex).mod(imgData.length);
    changeImage(currentImageIndex);

    $('.image-info-box').css('visibility', 'visible');
    $('#close-button').css('visibility', 'visible');
});

$('#right-arrow').click(() => {
    currentImageIndex = (++currentImageIndex).mod(imgData.length);
    changeImage(currentImageIndex);
    
    $('.image-info-box').css('visibility', 'visible');
    $('#close-button').css('visibility', 'visible');
});

/* Hide image info box on clicking the x. */
$('#close-button').click(() => {
    $('.image-info-box').css('visibility', 'hidden');
    $('#close-button').css('visibility', 'hidden');
});

/* Pressing a button on the side of the thumbnail row scrolls the thumbnail frames by one. */
$('#thumb-left-arrow').click(() => {
    thumbnailedPosition = (--thumbnailedPosition).mod(thumbnailFrames.length);
    thumbnailFrames.forEach(changeThumbnail);
    console.log(thumbnailFrames[0].assignedImage, thumbnailFrames[1].assignedImage, thumbnailFrames[2].assignedImage, thumbnailFrames[3].assignedImage, thumbnailFrames[4].assignedImage, thumbnailFrames[5].assignedImage, thumbnailFrames[6].assignedImage);
});

$('#thumb-right-arrow').click(() => {
    thumbnailedPosition = (++thumbnailedPosition).mod(thumbnailFrames.length);
    thumbnailFrames.forEach(changeThumbnail);
    console.log(thumbnailFrames[0].assignedImage, thumbnailFrames[1].assignedImage, thumbnailFrames[2].assignedImage, thumbnailFrames[3].assignedImage, thumbnailFrames[4].assignedImage, thumbnailFrames[5].assignedImage, thumbnailFrames[6].assignedImage);
});