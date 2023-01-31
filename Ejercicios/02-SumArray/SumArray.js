function SumArray(arr, n) {
    // Your code here:
    // console.log(`arr: ${arr}, n: ${n}`)
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            // console.log(`${arr[i]} + ${arr[j]} === ${n}`)
            if ((arr[i] + arr[j]) === n) return true
        }
    }
    // si no cumple devolvemos false
    return false
}

function SumArrayOrder(arr, n) {
    // tomo ambos extremos del array
    let i = 0
    let j = arr.length - 1
    // mientras no sean el mismo indice
    while (i < j) {
        // sumo ambas posiciones del array
        const sum = arr[i] + arr[j]
        // si cumple devuelvo true
        if (sum === n) return true
        // si el numero es mayor se reduce el extremo derecho
        if (sum > n) j--
        else i--
        // sino se aumanta el extremo izq
    }
    // si no cumple devolvemos false
    return false
}

module.exports = SumArray
