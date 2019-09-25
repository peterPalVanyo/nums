const filter = document.querySelector('#btns .btn:first-child')
const info = document.querySelector('#btns .btn:nth-child(2)')

const img = document.querySelector('#img')
const icons = document.querySelectorAll('.icon')
const allImg = ['./picture/0101.svg', './picture/0102.svg', './picture/0103.svg', './picture/0104.svg', './picture/0105.svg', './picture/0106.svg']
const titles = ['KEDVENC', 'TIPP', 'VONZALOM', 'NEHÉZ', 'JÓ', 'IZGI']
const title = document.querySelector('#box h2')
const text = document.querySelector('#text')


filter.addEventListener('click', function() {
    const path = img.getAttribute('src')
    const num = img.getAttribute('src').slice(13, 14)
    num === '1' ? img.setAttribute('src', `${path.slice(0,13)}2.svg`) : img.setAttribute('src', `${path.slice(0,13)}1.svg`)
})

icons.forEach(function(icon) {
    icon.addEventListener('click', function() {
        const num = icon.getAttribute('id').slice(1)
        const path = `./picture/0${num}01.svg`
        img.setAttribute('src', path)

        title.textContent = titles[num-1]
    })
})

info.addEventListener('click', function() {
    text.style.visibility === 'hidden' ? text.style.visibility = 'visible' : text.style.visibility = 'hidden'
    console.log(text.getAttribute('visibility') === 'hidden')
})