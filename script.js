let nav = document.querySelector('nav')
let Upbtn = document.querySelector('.Upbtn')
let process = document.querySelector('.process');
window.addEventListener('scroll', function () {
    if (scrollY > 40) {
        nav.classList.add('nav-scroll-bg')
        Upbtn.classList.add('show')
    }
    else {
        nav.classList.remove('nav-scroll-bg')
        Upbtn.classList.remove('show')
    }

    let scroll = window.scrollY;
    let height = document.body.offsetHeight - window.innerHeight;
    let percentage = (scroll / height) * 100;
    process.style.width = `${percentage}%`;
})
// Helper function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Counter animation
function startCounter(counterElement) {
    const target = +counterElement.getAttribute("data-target");
    const increment = Math.ceil(target / 100); // Adjust increment for smoother animation
    let count = 0;

    const updateCounter = () => {
        count += increment;
        if (count > target) {
            counterElement.textContent = target;
        } else {
            counterElement.textContent = count;
            requestAnimationFrame(updateCounter);
        }
    };
    updateCounter();
}

// Scroll listener to trigger counters
let countersStarted = false;

window.addEventListener("scroll", () => {
    const counterSection = document.querySelector(".child2");
    if (!countersStarted && isInViewport(counterSection)) {
        countersStarted = true;
        const counters = document.querySelectorAll(".counter");
        counters.forEach(counter => startCounter(counter));
    }
});
