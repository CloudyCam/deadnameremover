const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')

for (let i = 0; i < text.length; i++) {
    if (text.innerHTML.includes('Kenan Delahoutre')) {
        text[i].innerHTML = text[i].innerHTML.replace('Kenan Delahoutre', 'Camille')
    } else if (text[i].innerHTML.includes('Kenan')) {
        text[i].innerHTML = text[i].innerHTML.replace('Kenan', 'Camille')
    }
}