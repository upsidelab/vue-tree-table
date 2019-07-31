export default function sortData(table, { key, asc = true }) {
    table.sort(function (a, b) {
        if (a[key] === b[key]) return 0

        const boolean =  asc ?
            a[key] > b[key] :
            a[key] < b[key]
        return boolean ? 1 : -1
    })
}