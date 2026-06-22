// Initialize navigation dropdowns
document.addEventListener('DOMContentLoaded', function() {
    initializeDropdowns();
    initializeMobileMenu();
});

function initializeDropdowns() {
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    
    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.nav-btn');
        const menu = dropdown.querySelector('.nav-dropdown-menu');
        
        if (!button || !menu) return;
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close all other dropdowns
            dropdowns.forEach(d => {
                if (d !== dropdown) {
                    d.querySelector('.nav-dropdown-menu').style.display = 'none';
                }
            });
            
            // Toggle current dropdown
            menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'block' : 'none';
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-dropdown')) {
            dropdowns.forEach(dropdown => {
                const menu = dropdown.querySelector('.nav-dropdown-menu');
                if (menu) {
                    menu.style.display = 'none';
                }
            });
        }
    });
}

function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    if (!mobileMenuBtn) return;
    
    mobileMenuBtn.addEventListener('click', function() {
        // Toggle mobile menu visibility
        console.log('Mobile menu clicked');
    });
}

// Smooth scroll for buttons
document.querySelectorAll('button').forEach(button => {
    if (button.textContent.includes('SCHEDULE') || button.textContent.includes('FIND') || button.textContent.includes('Schedule') || button.textContent.includes('View')) {
        button.addEventListener('click', function() {
            console.log('Button clicked:', this.textContent);
        });
    }
});

// Add hover effects to service cards
document.querySelectorAll('[class*="from-gray-50"]').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    });
});

// News card link handling
document.querySelectorAll('.border-t-4').forEach(card => {
    const link = card.querySelector('a');
    if (link) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            window.location.href = link.href;
        });
    }
});

// Add animation to review count
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 16);
}

// Animate review counter on scroll into view
const reviewCount = document.querySelector('[class*="text-red-700"][class*="text-3xl"]');
if (reviewCount && reviewCount.textContent.includes('12')) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target, 12599);
                observer.unobserve(entry.target);
            }
        });
    });
    observer.observe(reviewCount);
}

// Navigation link handling
document.querySelectorAll('a[href="/"]:not([target])').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.href === '/') {
            e.preventDefault();
            console.log('Navigation to home or section');
        }
    });
});

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.src) {
                    img.loading = 'lazy';
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
}

// Performance: Add active state to current page nav
function setActiveNavLink() {
    const currentPath = window.location.pathname;
    document.querySelectorAll('a[href]').forEach(link => {
        if (link.href.endsWith(currentPath)) {
            link.style.fontWeight = '700';
            link.style.color = '#b91c1c';
        }
    });
}

setActiveNavLink();

// Call to action tracking (for analytics integration)
function trackCTA(ctaName) {
    if (window.gtag) {
        gtag('event', 'cta_click', {
            'cta_name': ctaName
        });
    }
    console.log('CTA tracked:', ctaName);
}

// Add tracking to important buttons
document.querySelectorAll('[class*="bg-red-700"]').forEach(button => {
    button.addEventListener('click', function() {
        const text = this.textContent.trim();
        trackCTA(text);
    });
});

console.log('RadNet Orange County website loaded successfully');
