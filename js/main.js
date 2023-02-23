const openBtn = document.querySelector('.open')
const closeBtn = document.querySelector('.close')
const headerMenu = document.querySelector('.header-tab')

openBtn.addEventListener('click', () => {
    headerMenu.classList.add('active')
    openBtn.style.display = 'none'
    closeBtn.style.display = 'block'
})

const closeMenu = () => {
    headerMenu.classList.remove('active')
    openBtn.style.display = 'block'
    closeBtn.style.display = 'none'
}

closeBtn.addEventListener('click', closeMenu)

