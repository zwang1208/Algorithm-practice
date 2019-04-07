const toLowerCase = (str) => {
    const DIFF = ('a'.charCodeAt() - 'A'.charCodeAt())

    return Array
        .from(str)
        .map(ch => (ch >= 'A' && ch <= 'Z')? String.fromCharCode(ch.charCodeAt() + DIFF): ch)
        .join('')
}
