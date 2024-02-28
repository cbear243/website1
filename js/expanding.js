panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        panel.classList.add('active')
    })
})



function removeActiveClasses(){
    panels.forEacj(panel => {
        panel.classList.remove('active')
    })
}