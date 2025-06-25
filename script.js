function toggleSection(event) {
    const header = event.currentTarget;
    if (window.innerWidth < 768) {
        const content = header.nextElementSibling;
        if (content) {
            if (content.style.display === 'block') {
                content.style.display = 'none';
                header.classList.remove('is-expanded');
            } else {
                const parentGrid = header.closest('.grid');
                if (parentGrid) {
                    parentGrid.querySelectorAll('.footer-section-header.is-expanded').forEach(openHeader => {
                        if (openHeader !== header) {
                            const openContent = openHeader.nextElementSibling;
                            if (openContent) {
                                openContent.style.display = 'none';
                                openHeader.classList.remove('is-expanded');
                            }
                        }
                    });
                }

                content.style.display = 'block';
                header.classList.add('is-expanded');
            }
        }
    }
}

function resetFooterLayout() {
    if (window.innerWidth >= 768) {
        document.querySelectorAll('.mobile-collapsible-content').forEach(el => {
            el.style.display = 'block';
        });
        document.querySelectorAll('.footer-section-header').forEach(header => {
            header.classList.remove('is-expanded');
        });
    } else {
        document.querySelectorAll('.mobile-collapsible-content').forEach(el => {
            el.style.display = 'none';
        });
        document.querySelectorAll('.footer-section-header').forEach(header => {
            header.classList.remove('is-expanded');
        });
    }
}

window.onload = function() {
    document.querySelectorAll('.footer-section-header').forEach(header => {
        header.addEventListener('click', toggleSection);
    });

    resetFooterLayout();
};

window.addEventListener('resize', resetFooterLayout);
