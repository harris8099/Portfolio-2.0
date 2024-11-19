// Show menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const projectLinks = {
    "project_1": "https://github.com/harris8099/Watermark",
    "project_2": "https://github.com/harris8099/Text-to-Morse-converter-",
    "project_3": "https://github.com/harris8099/Type-Master",
    "project_4": "https://github.com/harris8099/CTAE-MAP",
    "project_5": "https://github.com/harris8099/Portfolio",
    "project_6": "https://github.com/harris8099"
};

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    });
}

// projects link
document.querySelectorAll(".project").forEach(project => {
    project.addEventListener("click", function () {
        const projectId = this.id;
        const url = projectLinks[projectId];
        window.open(url, "_blank");
    });
});


// Remove menu mobile
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    navMenu.classList.remove('show-menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));

// Add blur header
const blurHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add("blur-header")
        : header.classList.remove("blur-header")
}
window.addEventListener("scroll", blurHeader);


// EMAIl JS
const contactForm = document.getElementById("contact-form"),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_ixz8ryz', 'template_rk4oc5n', '#contact-form', "YJQ0v27I9kAbXbYHK")
        .then(() => {
            contactMessage.textContent = "Message sent successfully"
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)
        })
    contactForm.reset()
}

contactForm.addEventListener('submit', sendEmail)

// Breakpoints
const widthMatch = window.matchMedia("(max-width: 1300px)");
var w = window.innerWidth;
if (w <= 1300) {
    rect(true);
}
function rect(x) {
    if (x) {
        document.getElementById("rect-one").classList.remove("rect_one");
        document.getElementById("rect-two").classList.remove("rect_two");
    }
    else {
        document.getElementById("rect-one").classList.add("rect_one");
        document.getElementById("rect-two").classList.add("rect_two");
    }
}
widthMatch.addEventListener("change", (mm) => {
    rect(mm.matches)
});
