/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*======= Change BG Header======*/

function scrollHeader(){
    const nav=document.getElementById('header')
    if(this.scrollY >=200) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)

/*======= Show Scorll Top======*/
function scrollTop(){
    const scrollTop =document.getElementById('scroll-top')
    if(this.scrollY >=260) scrollTop.classList.add('scroll-top');else scrollTop.classList.remove('scroll-top')
}
window.addEventListener('scroll',scrollTop)


/*Dark theme*/
const themeButton = document.getElementById('theme-button')
const darktheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//Validating Theme
const getCurrentTheme = () => document.body.classList.contains(darktheme) ?'dark':'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme)?'bx-moon':'bx-sun'
//check If active or not
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove' ](darktheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove' ](iconTheme)
}

/*Active / dective */
themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darktheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme() )
    localStorage.setItem('selected-icon', getCurrentIcon() )
})

/*Animation */

const sr = ScrollReveal({
    origin:'top',
    distance: '50px',
    duration:2000,
    reset:true
});
sr.reveal(`.home__data, .home__img , .about__data, .about__img, 
.services__content, .menu__content, .contact__data, .contact__button, .footer__content`,{
    interval:200
})