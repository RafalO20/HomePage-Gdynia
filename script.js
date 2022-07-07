const buttons = document.querySelectorAll("[data-click-button")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.clickButton === "right" ? 1 : -1
        const slides = button.closest("[data-button]").querySelector('[data-slides]')

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0
        
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})


const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
});


