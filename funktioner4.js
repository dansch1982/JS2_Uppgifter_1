function four() {
    const output = document.getElementById(arguments.callee.name)
    const months = getMonths();
    let month = prompt('Skriv in en månad')
    while (month && !months.find(item => item === month.toLowerCase())) {
        month = prompt('Skriv in en månad')
    }
    if (month) {
        output.textContent = `Månadens nummer är ${months.indexOf(month.toLowerCase())+1}`
    }
    function getMonths() {
        const months = Array.from({
            length: 12
        }, (item, i) => {
            return new Date(0, i).toLocaleString('sv-SE', {
                month: 'long'
            }).toString().toLowerCase()
        });
        return months
    }
}