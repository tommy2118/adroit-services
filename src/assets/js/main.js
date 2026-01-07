// Mobile menu toggle
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

// Make toggleMenu available globally
window.toggleMenu = toggleMenu;

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', entry.target.dataset.animation);
        }
    });
}, {
    threshold: 0.1
});

// Observe elements with data-animation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-animation]').forEach((element) => {
        observer.observe(element);
    });
});

// Dynamic tool pattern generation
function createToolPatterns() {
    const container = document.createElement('div');
    container.className = 'fixed inset-0 pointer-events-none opacity-5';
    container.style.zIndex = '-1';

    for(let i = 0; i < 20; i++) {
        const pattern = document.createElement('div');
        pattern.className = 'tool-pattern';
        pattern.style.left = `${Math.random() * 100}%`;
        pattern.style.top = `${Math.random() * 100}%`;
        container.appendChild(pattern);
    }

    document.body.appendChild(container);
}

createToolPatterns();
