async function getData(input) {
    const request = await fetch("https://opendata-download-metobs.smhi.se/api/version/latest/parameter/1.json")

    const stations = (await request.json()).station

    const items = []
    for (const key in stations) {
        if (Object.hasOwnProperty.call(stations, key)) {
            const element = stations[key];
            
            if (element.name.toLowerCase().startsWith(input.toLowerCase())) {
                items.push(element)
            }
        }
    }

    const active = []

    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        if (element.active) {
            const url = containJSON(element.link)
            if (!url) continue
            active.push(await (await fetch(url)).json())
        }
    }

    const ul = document.createElement("ul")
    for (let i = 0; i < active.length; i++) {
        const element = active[i];
        let url = containJSON(element.period[0].link)
        if (!url) continue
        const item = (await (await fetch(url)).json())
        url = containJSON(item.data[0].link)
        if (!url) continue
        const temp = (await (await fetch(url)).json())
        if (temp.value) {
            const li = document.createElement('li')
            li.textContent = temp.station.name + ": " + temp.value[0].value
            ul.appendChild(li)
        }
    }
    if (document.getElementById(input)) {
        const div = document.getElementById(input)
        div.removeChild(div.lastChild)
        div.appendChild(ul)
    } else {
        if (!input) input = "all"
        const div = document.createElement('div')
        div.id = input
        div.classList.add('searchlist')
        const article = document.createElement('article')
        const title = document.createElement('h3')
        title.textContent = input
        article.appendChild(title)
        const button = document.createElement('button')

        button.addEventListener('click', () => {
            let element = button.parentElement.parentElement
            element.parentElement.removeChild(element)
        })

        button.textContent = "Stäng"
        article.appendChild(button)
        div.appendChild(article)
        div.appendChild(ul)
        output.appendChild(div)
    }
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

const btnSearch = document.getElementById('btnSearch')
btnSearch.addEventListener('click', () => {
    const input = document.getElementById('input')
    getData(input.value)
})