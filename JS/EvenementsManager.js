/**
 * Initialize a marquee effect for an HTML element.
 *
 * @param {HTMLElement} element - The element to apply the marquee effect to.
 * @param {number} [repeatCount=7] - The number of times to repeat the element's content.
 * @param {number} [step=1] - The step size for the marquee animation.
 */

function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

const startMarquee = (element, repeatCount = 7, step = 1) => {
    /**
     * Function that animates the marquee effect.
     */
    let Txts = ["Next Saison in September: Saison 1", "Battle royal Event on Asterian", "New pack available in the Boutique"];
    current = 0;

    let start = 0;
    let end = 0;
    
    const animateMarquee = () => {
        if(position > width){
            current = current + 1;
            if(current >= Txts.length){
                current = 0;
            }
            element.innerHTML = Txts[current];
            start = getWidth() * 0.28 - element.offsetWidth/2;
            end = getWidth() * 0.42 + element.offsetWidth/2;
        }
        position = position < width ? position + step : start;
        element.style.marginLeft = `${position}px`;
        element.style.overflow = 'hidden';
        element.style.whiteSpace = 'nowrap';
        requestAnimationFrame(animateMarquee);
    };

    element.innerHTML = Txts[current];
    start = getWidth() * 0.28 - element.offsetWidth/2;
    end = getWidth() * 0.42 + element.offsetWidth/2;
    let position = start;
    const space = '';
    const content = element.innerHTML;
    const width = end;

    // Start the marquee animation
    animateMarquee();
};

// Example usages:
startMarquee(document.getElementById('EvenementsTxt'), 16, 2); // Customize repeatCount and step