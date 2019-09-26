const filter = document.querySelector('#btns .btn:first-child')
const info = document.querySelector('#btns .btn:nth-child(2)')

const img = document.querySelector('#img')
const icons = document.querySelectorAll('.icon')
const allImg = ['./picture/0101.svg', './picture/0102.svg', './picture/0103.svg', './picture/0104.svg', './picture/0105.svg', './picture/0106.svg']
const titles = ['KEDVENC', 'TIPP', 'VONZALOM', 'NEHÉZ', 'JÓ', 'IZGI']
const title = document.querySelector('#box h1')
const text = document.querySelector('#text')
const textTitle = document.querySelector('#text h2')
const textContent = document.querySelector('#text p')
const texts = ['A kerek számokat kevésbé szívleljük. A tíz prostituálja magát, mintha kerekítés vagy becslés lenne. A személyes kötődés szerinti számválasztást is befolyásolja a kerek számokkal szembeni averzió: ha valamelyik hónap 10. napján születsz, hatszor kevésbé választod a születésnapod számát kedvencednek, mintha más napon. A kedvencek választásánál 60% : 40% arányban a páratlan számok inkább preferáltak.',
 'Ha egy egyjegyű számra kell gondolni az emberek legtöbbször a hétre gondolnak. Ha az első 20 számból kell választani egyet, akkor a választás jellemzően a tizenhetesre esik: az emberek először kiszórják azokat a számokat amelyek nem spontánnak tűnnek: a párosokat, a három többszöröseit. A nulla, egy, és az öt is kiesik mivel a ciklus elején, közepén foglalnak helyet.',
  'A piros mezők a felső sorban tömörülnek, bizonyítván hogy az alacsony számok kedveltebbek. A kétjegyűek közül azok a szimpatikusabbak,  amelyek azonos számokat tartalmaznak. A népszerűtlenek 1, 3, 7, 9-re végződnek. A kezelhetőbb számok - vagyis amelyekkel kényelmesebben végzünk műveleteket - kedvesebbek is számunkra. A párosok és az 5-re végződőek márpedig mindig oszthatóak lesznek, más páratlan végződésű számok pedig gyakran nem.',
   'Minél nagyobb egy szám, annál súlyosabbnak véljük.',
    'Az eredmények alapján a 3, 7, 9 végződésű számokat kevésbé tartjuk jónak.',
     'A páratlanokat izgalmasnak, a párosakat nyugodtnak gondoljuk, különösen ha kerek.']


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
        icons.forEach(function(item) {
            item.setAttribute('class', 'icon')
        })
        icon.setAttribute('class', 'icon selected')
        title.textContent = titles[num-1]
        textTitle.innerHTML = titles[num-1]
        textContent.innerHTML = texts[num-1]
        text.style.visibility = 'hidden'
        console.log(text)
    })
})

info.addEventListener('click', function() {
    text.style.visibility === 'hidden' ? text.style.visibility = 'visible' : text.style.visibility = 'hidden'
})