function longestWord(str) {
    return str.split(' ').reduce((x, y) => Math.max(x, y.length), 0)
}


console.log(longestWord("What is the longest word in the current text"));