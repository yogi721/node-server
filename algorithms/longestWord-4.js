function longestWord(str) {
    const words = str.split(' '); // split the string into words

    if (words.length == 1) {
        return words[0].length;
    }

    return Math.max(
        words[0].length,
        longestWord(words.slice(1).join(' '))
    )
}


console.log(longestWord("What is the longest word in the current text"));