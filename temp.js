async function getData(input) {
    
    let div = document.getElementById(input ? input : "All")

    if (div) {
        div.removeChild(div.lastChild)
    } else {
        div = document.createElement('div')
        div.id = input ? input : "All"
        div.classList.add('searchlist')
        
        const article = document.createElement('article')

        const title = document.createElement('h3')
        title.textContent = input ? input : "All"
        article.appendChild(title)

        const button = document.createElement('button')
        button.textContent = "Stäng"
        button.addEventListener('click', () => {
            let element = button.parentElement.parentElement
            element.parentElement.removeChild(element)
        })
        article.appendChild(button)

        div.appendChild(article)
        const output = document.getElementById('output')
        output.appendChild(div)
        
    }
    
    const p = document.createElement('p')
    p.textContent = "Hämtar data..."
    div.appendChild(p)

    const stations = await getStations()

    async function getStations() {
        const request = await fetch("https://opendata-download-metobs.smhi.se/api/version/latest/parameter/1.json")
        const stations = (await request.json()).station
        return stations
    }

    const filteredStations = filterStations(input, stations)

    function filterStations(string = "", stations = []) {
        const filteredStations = []
        for (const key in stations) {
            if (Object.hasOwnProperty.call(stations, key)) {
                const element = stations[key];
                if (element.name.toLowerCase().startsWith(string.toLowerCase())) {
                    filteredStations.push(element)
                }
            }
        }
        return filteredStations
    }

    const activeStations = getActiveStations(filteredStations)

    function getActiveStations(stations) {
        const activeStations = []

        for (let i = 0; i < stations.length; i++) {
            const element = stations[i];
            if (element.active) {
                const url = containJSON(element.link)
                if (!url) continue
                activeStations.push({name:element.name, id:element.id})
            }
        }
        return activeStations
    }
    const temperatures = await getTemperatures(activeStations)

    async function getTemperatures(stations) {
        const newArray = []
        for (let i = 0; i < stations.length; i++) {
            const element = stations[i];
            const {id} = element
            const url = `https://opendata-download-metobs.smhi.se/api/version/latest/parameter/1/station/${id}/period/latest-hour/data.json`
            const temp = await fetch(url)
            try {
                element.temperature = (await temp.json()).value[0].value
                newArray.push(element)
            } catch (error) {
                
            }
        }
        return newArray
    }
    
    const ul = createList(temperatures)

    function createList(temperatures) {
        const ul = document.createElement('ul')
        for (let i = 0; i < temperatures.length; i++) {
            const element = temperatures[i];
            const {name, temperature} = element
            const li = document.createElement('li')
            li.textContent = name + ": " + temperature
            ul.appendChild(li)
        }
        return ul
    }

    div.removeChild(div.lastChild)
    if (!ul.firstChild) {
        const li = document.createElement('li')
        li.textContent = "Inga träffar..."
        ul.appendChild(li)
    }
    div.appendChild(ul)
}

function containJSON(array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.href.toLowerCase().endsWith('.json')) {
            return element.href
        }
    }
    return false
}

const input = document.getElementById('input')
input.addEventListener('keyup', () => {
    if (event.keyCode === 13) {
        btnSearch.click()
    }
})

const btnSearch = document.getElementById('btnSearch')
btnSearch.addEventListener('click', () => {
    const input = document.getElementById('input')
    getData(input.value)
    input.value = null
})