window.onload = function () {
    setTimeout(function () {
        var loader = document.querySelector('.loader-container');
        var content = document.querySelector('.content');

        loader.classList.add('slide-up'); // Add class to slide loader up
        content.style.opacity = '1'; // Make content visible

        setTimeout(function () {
            loader.style.display = 'none'; // Hide loader after transition
        }, 1200); // Match this with CSS transition time
    }, 0);
};
