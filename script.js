document.addEventListener('DOMContentLoaded', function () {
    const navigate = (link) => { 
        link.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }

    const scrollButton = document.querySelector('div.footer-section3 > button');
    if (scrollButton) {
        navigate(scrollButton)
    }
    
    const footerLinks = document.querySelectorAll('div.footer-section2 > div');
    footerLinks.forEach((link) =>{
        navigate(link);
    })

    const mediaIcons = document.querySelectorAll('section.author-section > div > a');
    mediaIcons.forEach((icon) => {
        navigate(icon);
    })

    const navLinks = document.querySelectorAll('ul.navBar > li > a');
    navLinks.forEach((link)=> {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let target;
            const href = link.getAttribute("href");
            if(href==="#home") {
                target = document.querySelector('.hero-section1');
            }
            if(href==="#about") {
                target = document.querySelector('.hero-section3');
            }
            if(href==="#blog") {
                target = document.querySelector('.hero-section4');
            }
            if(href==="#testimonials") {
                target = document.querySelector('.testimonials-section');
            }
            if(href==="#contacts") {
                target = document.querySelector('.quality-section');
            }
            target.scrollIntoView({ behavior: "smooth" });
        });
    })

    const aboutUsBtn = document.querySelector('.about-us-btn');
    if (aboutUsBtn) {
        aboutUsBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector('.hero-section-2');
            target.scrollIntoView({ behavior: "smooth" });
        });
    }

    const readMoreBtn = document.querySelector('.hero-section3-text4');
    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector('.testimonials-section');
            target.scrollIntoView({ behavior: "smooth" });
        });
    }

    const historyBtn = document.querySelector('.historyBtn');
    if (historyBtn) {
        historyBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector('.history-section');
            target.scrollIntoView({ behavior: "smooth" });
        });
    }

    const aboutBtns = document.querySelectorAll('div.hero-section3-text > div > button');
    console.log(aboutBtns)
    aboutBtns.forEach((btn) =>{
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector('.history-section');
            target.scrollIntoView({ behavior: "smooth" });
        });
    })

    const headerSection = document.querySelector('div.hero-section1-text');
    const aboutUsSection1 = document.querySelector('div.herosection2-content');
    const aboutUsSection2 = document.querySelector('div.hero-section3-text');
    const qualityImageSection = document.querySelector('div.quality-section-images');
    const historySection = document.querySelector('div.history-text-section');
    let scrollSections= [headerSection, aboutUsSection1, aboutUsSection2, historySection, qualityImageSection];
    window.addEventListener('scroll', checkBoxes);
    checkBoxes();

    function checkBoxes() {
        scrollSections.forEach((section)=> {
            const triggerHeight = window.innerHeight;
            const boxTop = section.getBoundingClientRect().top;
            
            if(boxTop < triggerHeight) {
                (section == aboutUsSection1 || section == historySection) ?  section.classList.add('slideRight') : section.classList.add('slideLeft');
            }
        })
    }
})