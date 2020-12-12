function showLargePreview(el) {
    console.log(el.src);

    let target = document.getElementById('large-img');
    target.src = el.src;

    let targetContainer = document.getElementById('large-preview');

    targetContainer.classList.add("previewed");
    targetContainer.classList.remove("invisible");
}

function closeLargePreview() {
    let targetContainer = document.getElementById('large-preview');

    targetContainer.classList.remove("previewed");
    targetContainer.classList.add("invisible");
}