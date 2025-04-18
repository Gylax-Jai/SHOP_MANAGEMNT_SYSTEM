// Toggle sidebar on mobile
document.querySelector('.menu-toggle')?.addEventListener('click', function () {
    document.body.classList.toggle('sidebar-open');
});


document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;

    // Remove all existing active classes
    document.querySelectorAll('.sidebar ul li').forEach(item => {
        item.classList.remove('active');
    });

    let matched = false;

    document.querySelectorAll('.sidebar ul li a').forEach(link => {
        const href = link.getAttribute('href');
        const normalizedHref = new URL(href, window.location.origin).pathname;

        // 1. Exact path match (e.g. /dataentry)
        if (!matched && normalizedHref === currentPath) {
            link.parentElement.classList.add('active');
            matched = true;
        }

        // 2. Home match: when href is "/" and path is root or employeeweb.html
        else if (!matched && href === "/" && (currentPath === "/" || currentPath.endsWith("employeeweb.html") || currentPath.endsWith("index.html"))) {
            link.parentElement.classList.add('active');
            matched = true;
        }

        // 3. Hash match (e.g. #services)
        else if (!matched && href.startsWith('#') && href === currentHash) {
            link.parentElement.classList.add('active');
            matched = true;
        }

        // 4. Hash inside HTML page (e.g. employeeweb.html#services)
        else if (!matched && href.includes('.html#') && window.location.href.includes(href)) {
            link.parentElement.classList.add('active');
            matched = true;
        }
    });
});

// document.classList.remove("active");
// Sidebar navigation

// Manual highlight on click (in case of dynamic routes or JS routing)
document.querySelectorAll('.sidebar ul li a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.sidebar ul li').forEach(item => {
            item.classList.remove('active');
        });

        this.parentElement.classList.add('active');

        if (window.innerWidth <= 768) {
            document.body.classList.remove('sidebar-open');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

 


// Simple working animated counter
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    counters.forEach(counter => {
        // Get target value and suffix
        const raw = counter.getAttribute('data-target');
        const target = parseInt(raw.replace(/[^\d]/g, '')); // numeric part
        const suffix = raw.replace(/[\d]/g, ''); // symbol like + or %

        let count = 0;

        const update = () => {
            const current = parseInt(counter.innerText.replace(/[^\d]/g, '')) || 0;
            const increment = Math.ceil(target / speed);

            if (current < target) {
                count = current + increment;
                if (count > target) count = target;
                counter.innerText = count + suffix;
                setTimeout(update, 15);
            } else {
                counter.innerText = target + suffix;
            }
        };

        update();
    });
}

window.addEventListener('load', animateCounters);

