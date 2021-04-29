function longestWord(str) {
    return Math.max(...str.split(' ').map(x => x.length))
}


console.log(longestWord("What is the longest word in the current text"));