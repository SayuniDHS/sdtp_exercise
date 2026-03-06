const selectBox = document.getElementById('select-box')
const characters = ['garfield','jon', 'nermal', 'odie', 'pookie','scooby','fred','velma'] 

characters.forEach({character} => {
    const optionE1 = document.createElement ('option')
    optionE1.value = character.toLowerCase()
    optionE1.textContent = character

    selectBox.appendChild(optionE1)
})

const initialImage = document.createElement('img')
initialImage.src = 'image/${selectBox.childNodes[0].value}.jpg'

imageContainer.appendChild(initialImage)

selectBox.addEventListener('change', (e) => {
    const imageE1 = document.createElement('img')
    imageE1.src = `/image/${e.target.value}.jpg`

    
})
