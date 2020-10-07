const body = document.getElementById('body')
const btnAdj = document.querySelector('.adj')
const adjustments = document.querySelector('.adjustments')
const overlay = document.querySelector('.overlay')

btnAdj.addEventListener('click', e => {
    adjustments.classList.toggle('on')

    if(adjustments.classList.contains('on')) {
        adjustments.style.display = 'flex'
        adjustments.style.zIndex = '1000'

        btnAdj.style.zIndex = '1000'

        body.style.overflow = 'hidden'

        overlay.classList.add('on')
    } else {
        adjustments.style.display = 'none'
        body.style.overflow = 'auto'

        overlay.classList.remove('on')
    }
})