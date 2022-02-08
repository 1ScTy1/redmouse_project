let items = document.querySelectorAll('.works__img')
let dev = document.querySelector('.dev')
let web = document.querySelector('.web')
let brand = document.querySelector('.brand')
let all = document.querySelector('.all')
let film = document.querySelector('.films')

let item = [...items]

dev.addEventListener('click', function() {
    item.map((i) => {
        if (i.id !== 'dev'){
            i.style.cssText = 'display: none'
        }else{
            i.style.cssText = 'display: block'
        }
    })
})
web.addEventListener('click', function() {
    item.map((i) => {
        if (i.id !== 'web'){
            i.style.cssText = 'display: none'
        }else{
            i.style.cssText = 'display: block'
        }
    })
})
brand.addEventListener('click', function() {
    item.map((i) => {
        if (i.id !== 'brand'){
            i.style.cssText = 'display: none'
        }else{
            i.style.cssText = 'display: block'
        }
    })
})
film.addEventListener('click', function() {
    item.map((i) => {
        if (i.id !== 'films'){
            i.style.cssText = 'display: none'
        }else{
            i.style.cssText = 'display: block'
        }
    })
})
all.addEventListener('click', function() {
    item.map((i) => {
        i.style.cssText = 'display: block'
    })
})
