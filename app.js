
document.addEventListener("DOMContentLoaded",() =>{
    fetchData()
   
})

const fetchData = async () =>{
        try {
            loadingData(true)
            
            const res = await fetch("https://rickandmortyapi.com/api/character");
            const data = await res.json()
            showCard(data)


        } catch (error) {
            console.log(error)
        }finally{
            loadingData(false)
        }
}


const showCard = (item) =>{
    const cardDinamica = document.getElementById("card-dinamica")
    const templateCard = document.getElementById("template-card").content
    const fragment = document.createDocumentFragment()


    item.results.forEach((item) =>{
        const clone = templateCard.cloneNode(true)
        clone.querySelector("h5").textContent = item.name
        clone.querySelector("p").textContent = item.species
        clone.querySelector("img").setAttribute("src", item.image)

        fragment.appendChild(clone)

    })

    cardDinamica.appendChild(fragment)

}

const loadingData = state => {
    const loading = document.getElementById("loading")
    if(state){
        loading.classList.remove("d-none")
    }else{
        loading.classList.add("d-none")
    }
}