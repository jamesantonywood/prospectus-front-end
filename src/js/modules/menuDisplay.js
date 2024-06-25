export default  () => {
    const menuBtn = document.querySelector('.menu-btn')
    const hamburger = menuBtn.querySelector('.hamburger')
    menuBtn.addEventListener('click', () => {
        if (document.body.classList.contains('menu-open')) {
            document.body.classList.remove('menu-open')
            document.body.classList.add('menu-closed')
            hamburger.classList.remove('is-active')
        } else {
            document.body.classList.add('menu-open')
            document.body.classList.remove('menu-closed')
            hamburger.classList.add('is-active')
        }
    })
    
    const mq = window.matchMedia("(min-width: 768px)")
    const handleMenuClasses = () => {
        if (mq.matches) {
            document.body.classList.remove('menu-open', 'menu-closed')
            hamburger.classList.remove('is-active')
        }
    }
    handleMenuClasses()
    mq.addEventListener('change', handleMenuClasses)
}