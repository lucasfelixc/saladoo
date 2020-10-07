const saladsBtn = document.querySelector('.saladsBtn')
const soupsBtn = document.querySelector('.soupsBtn')
const drinksBtn = document.querySelector('.drinksBtn')

let show = true

saladsBtn.addEventListener('click', e => {
    if(!saladsBtn.classList.contains('select')) {
        if(soupsBtn.classList.contains('select') || drinksBtn.classList.contains('select')) {
            soupsBtn.classList.remove('select')
            drinksBtn.classList.remove('select')
        }

        saladsBtn.classList.add('select')
    }
})

soupsBtn.addEventListener('click', e => {
    if(!soupsBtn.classList.contains('select')) {
        if(saladsBtn.classList.contains('select') || drinksBtn.classList.contains('select')) {
            saladsBtn.classList.remove('select')
            drinksBtn.classList.remove('select')
        }

        soupsBtn.classList.add('select')
    }
})

drinksBtn.addEventListener('click', e => {
    if(!drinksBtn.classList.contains('select')) {
        if(soupsBtn.classList.contains('select') || saladsBtn.classList.contains('select')) {
            soupsBtn.classList.remove('select')
            saladsBtn.classList.remove('select')
        }

        drinksBtn.classList.add('select')
    }
})