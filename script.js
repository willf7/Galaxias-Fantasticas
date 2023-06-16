function initTabNav() {
    const tabMenu = document.querySelectorAll('.js_tabmenu li');
    const tabContent = document.querySelectorAll('.js_content section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('active');

        function activeTab(i) {
            tabContent.forEach((section) => {
                section.classList.remove('active')
            });
            tabContent[i].classList.add('active')
        };

        tabMenu.forEach((itemMenu, i) => {
            itemMenu.addEventListener('click', () => {
                activeTab(i)
            });
        });
    };
}
initTabNav()

function initAccordion() {

    const accordionList = document.querySelectorAll('.js_accordion dt')
    if (accordionList.length) {
        accordionList[0].classList.add('active')
        accordionList[0].nextElementSibling.classList.add('active')

        function activeAccordion() {
            this.classList.toggle('active')
            this.nextElementSibling.classList.toggle('active')
        };


        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}

initAccordion()

function initScrollSmooth() {

    const linksInternos = document.querySelectorAll('.js_menu a[href^="#"]')

    function scrollToSection(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}

initScrollSmooth();

function initAnimateScroll() {
    const sections = document.querySelectorAll('.js_scroll')
    if (sections.length) {
        const windowMetade = window.innerHeight * 0.6

        function animateScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const inSectionVisible = (sectionTop - windowMetade) < 0;
                if (inSectionVisible)
                    section.classList.add('active')
                else
                    section.classList.remove('active')
            })
        }

        window.addEventListener('scroll', animateScroll)
    }
}

initAnimateScroll()