const MORSE = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

const uniqueMorseRepresentations = (words) => {
    let wordsSet = new Set()

    words.map(word => {
        let Morse = [...word].reduce((prev, curr)=> (
            prev + MORSE[curr.charCodeAt() - 'a'.charCodeAt()] //letter index to find in MORSE array
        ), '')

        wordsSet.add(Morse)
    })
    return wordsSet.size
}