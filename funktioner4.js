function four() {
    const months = getMonths();
    let month = prompt('SKriv in en månad')
    while (!months.find(item => item === month.toLowerCase())) {
        month = prompt('SKriv in en månad')
    }
    alert(`Månadens nummer är ${months.indexOf(month.toLowerCase())+1}`)
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