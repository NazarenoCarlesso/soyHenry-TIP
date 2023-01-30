function FindNeedle(haystack, needle) {
    // Your code here:
    // console.log(`haystack: ${haystack}`)
    // console.log(`needle: ${needle}`)

    // recorre todos los caracteres de haystack
    for (let i = 0; i < haystack.length; i++) {
        // si el caracter coincide con el primer caracter de needle
        if (haystack[i] === needle[0]) {
            // por cada caracter de needle
            for (let j = 0; j < needle.length; j++) {
                // si terminamos de recorrer la palabra
                if (needle.length - 1 === j) return i // devolvemos el indice
                // si no coinciden los caracteres
                if (needle[j] !== haystack[i + j]) break // cortamos el bucle
            }
        }
    }

    return -1 // si no lo encuentra, devuelve -1
}

function FindNeedleSlice(haystack, needle) {
    // Your code here:

    // recorre todos los caracteres de haystack
    for (let i = 0; i < haystack.length; i++) {
        // si el caracter coincide con el primer caracter de needle
        if (needle[0] === haystack[i]) {
            // cortamos la misma cantidad de caracteres en el stack
            if (haystack.slice(i, i + needle.length) === needle) return i
            // si los strings son iguales devolve el indice de corte
        }
    }

    return -1 // si no lo encuentra, devuelve -1
}

module.exports = FindNeedle
