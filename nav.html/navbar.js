document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

    function openMobileMenu() {
        mobileMenuOverlay.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileMenuOverlay.classList.remove('is-open');
        document.body.style.overflow = '';
    }

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', openMobileMenu);
    }

    if (closeMobileMenuButton) {
        closeMobileMenuButton.addEventListener('click', closeMobileMenu);
    }

    mobileNavItems.forEach(item => {
        const link = item.querySelector('.mobile-nav-link');
        const dropdown = item.querySelector('.mobile-dropdown-menu');
        const chevron = item.querySelector('.mobile-chevron');

        if (link && dropdown && chevron) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                link.classList.toggle('is-expanded');
                dropdown.classList.toggle('is-expanded');

                if (link.classList.contains('is-expanded')) {
                    chevron.style.transform = 'rotate(180deg)';
                } else {
                    chevron.style.transform = 'rotate(0deg)';
                }
            });
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            if (mobileMenuOverlay.classList.contains('is-open')) {
                closeMobileMenu();
            }
        }
    });
});
