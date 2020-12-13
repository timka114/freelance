var currentPhoto = 0;

function selectPhoto(index) {
	let photos = $('#photos-preview').children();

	for (let i = photos.length - 1; i >= 0; i--) {
		photos.eq(i).removeClass("previewed");
		photos.eq(i).addClass("invisible");
	}

	photos.eq(index).removeClass("invisible");
    photos.eq(index).addClass("previewed");
    
    currentPhoto = index;
}

function selectNext() {
	let photosNum = $('#photos-preview .preview-photo').length;
    currentPhoto++;
    currentPhoto %= photosNum;
    selectPhoto(currentPhoto);
}

window.onload = function () {
	let photosNum = $('#photos-preview .preview-photo').length;
    let switchesContainer = $('#preview-controls');
    switchesContainer.html("");

	for (let i = 1; i < photosNum + 1; i++) {
		let index =  i - 1;
		switchesContainer.append('<button onclick="selectPhoto(' + index + ')">' + i + '</button>');
	}
}