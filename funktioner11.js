function eleven(inputMonth) {
    const output = document.getElementById(arguments.callee.name)
    const months = getMonths();
    if (months.find(month => month === inputMonth.toLowerCase())) {
        const date = new Date()
        date.setMonth(months.indexOf(inputMonth)+1)
        date.setDate(0)
        output.textContent = `${inputMonth} har ${date.getDate()} dagar.`
    } else {
        output.textContent = inputMonth ? `${inputMonth} är ingen månad.` : "Ingen månad inskriven."
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