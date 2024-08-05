let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let slidingWindow = document.querySelector('.sliding-window');
let speed1 = 0.5;
let speed2 = 1;
let offset = 0;

/**
 * Function that creates a parallax effect for two images.
 * @param {HTMLImageElement} image1 - The first image element to apply the parallax effect to.
 * @param {HTMLImageElement} image2 - The second image element to apply the parallax effect to.
 * @param {HTMLElement} slidingWindow - The sliding window element that triggers the parallax effect.
 * @param {number} speed1 - The speed factor for the first image.
 * @param {number} speed2 - The speed factor for the second image.
 */
function parallaxEffect(image1, image2, slidingWindow, speed1, speed2) {
    /**
     * The offset variable is used to control the parallax effect.
     * @type {number}
     */
    let offset = 0;

    /**
     * Function that updates the parallax effect.
     */
    function updateParallax() {
        offset += 1;
        image1.style.transform = `translate(${offset * speed1}px, -50%)`;
        image2.style.transform = `translate(${offset * speed2}px, -50%)`;

        if (offset > window.innerWidth) {
            offset = 0;
        }

        // Request the next frame to continue the animation.
        requestAnimationFrame(updateParallax);
    }

    // Start the parallax effect.
    updateParallax();
}