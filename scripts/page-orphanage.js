const options = {
    dragging: false,
    touchZoom: false,
    doubleclickzoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create map
const map = L.map('mapid', options).setView([-27.222633,-49.6455874], 15)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)


function selectImage(event) {
    const button = event.currentTarget

    console.log(button.children)


    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    /* remove a classe active de cada botão */
    function removeActiveClass(button) {
        
        button.classList.remove("active")
        /* interessante obserbar que o objeto button acima nao é o mesmo
        do objeto da const button*/
    }

    // selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img ")


    // atualizar o container de image
    imageContainer.src = image.src

    // adicionar a classe .active para este botão
    button.classList.add('active')
    
}