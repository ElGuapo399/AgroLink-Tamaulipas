document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a, .auth-buttons button');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetSection = this.getAttribute('data-section');

            document.querySelectorAll('main section').forEach(section => {
                section.classList.add('hidden');
            });

            if (targetSection) {
                const targetEl = document.getElementById(targetSection);
                if (targetEl) targetEl.classList.remove('hidden');

                document.querySelectorAll('nav a').forEach(navLink => {
                    navLink.classList.remove('active');
                });

                if (this.tagName.toLowerCase() === 'a') {
                    this.classList.add('active');
                } else {
                    const relatedNav = document.querySelector(`nav a[data-section="${targetSection}"]`);
                    if (relatedNav) relatedNav.classList.add('active');
                }
            }
        });
    });
});
