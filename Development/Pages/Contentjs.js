// Remove the script from head and place this in your Contentjs.js file
document.addEventListener('DOMContentLoaded', function() {
    let items = document.querySelectorAll('.slider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let thumbnails = document.querySelectorAll('.thumbnail .item');
    let countItem = items.length;
    let itemActive = 0;

    // Event Next Click
    next.onclick = function() {
        itemActive = itemActive + 1;
        if(itemActive >= countItem) {
            itemActive = 0;
        }
        showSlider();
    }

    // Event Prev Click
    prev.onclick = function() {
        itemActive = itemActive - 1;
        if(itemActive < 0) {
            itemActive = countItem - 1;
        }
        showSlider();
    }

    // Show Slider
    function showSlider() {
        // Remove active class from current items
        let itemActiveOld = document.querySelector('.slider .list .item.active');
        let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
        
        itemActiveOld.classList.remove('active');
        thumbnailActiveOld.classList.remove('active');

        // Add active class to new items
        items[itemActive].classList.add('active');
        thumbnails[itemActive].classList.add('active');
    }

    // Add click events to thumbnails
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.onclick = function() {
            itemActive = index;
            showSlider();
        }
    });
});