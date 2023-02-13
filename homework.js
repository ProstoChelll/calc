const word = ["The", "Tao", "gave", "birth", "to", "machine", "language.", "Machine", "language", "gave", "birth", "to", "the", "assemblar"]



const uniqueLetter = (txt) => {
    let filt = txt.filter((currentValue) => {
        const wordOnLetter = currentValue.split('')
        console.log(wordOnLetter)

        let a = 0
        let b = 1
        wordOnLetter.forEach((elem) =>{
            if (wordOnLetter[a] !== wordOnLetter[b]){
                console.log(wordOnLetter[a], wordOnLetter[b])
                b++
            } else {
                a++
                b = 1
            }
        })
    })
}

uniqueLetter(word)