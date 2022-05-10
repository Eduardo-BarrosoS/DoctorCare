/* 
import Swiper from 'swiper';

import 'swiper/css';
*/
const swiper = new Swiper('swiper', {
    slidesPerView: 1,
    pagination: {
        el: 'slide-pagination',
    },
    mousewheel: true,
    keyboard: true,

  });






window.addEventListener('scroll', onScroll)


function onScroll() {
    showNavOnscroll()
    showBackToTopButton()


    showMeIfItsBeenActive(home)
    showMeIfItsBeenActive(services)
    showMeIfItsBeenActive(evidence)
    showMeIfItsBeenActive(about)

}


function showMeIfItsBeenActive(section) {

    const TargetLine =  scrollY + innerHeight / 2  

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetLine = TargetLine >= sectionTop
    
    const sectionEndAt = sectionTop + sectionHeight 
    const sectionEndPassedTargetLine = sectionEndAt <= TargetLine

    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
    
    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
    
    menuElement.classList.remove('active')

    if (sectionBoundaries) {
    menuElement.classList.add('active')

    }
    console.log(sectionBoundaries)

}


function showNavOnscroll(){
    
    if (scrollY > 0) {
        navegation.classList.add("scroll")
    } else {
        navegation.classList.remove('scroll')
    }
    
}

function showBackToTopButton() {
    if (scrollY > 500) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}


function openMenu() {
    //const idBody = document.getElementById('#body')

    document.body.classList.add('menuExpended')

}

function closeMenu() {
    document.body.classList.remove('menuExpended')
}




ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 900,
}).reveal(`
#home, 
#home .woman, 
#home .information, 
#services, 
#services header, 
#services .card,
#about, 
#about header,
#about .content
#contatos,
#contatos header h2,
#contatos ul,
#contatos .man-with-celphone,
#contatos .content`)