// This program reads a sentence from the user, analyzes it, and prints the results.
// It counts the number of characters, words, and vowels in the sentence.
function analyzeSentence(sentence) {
  const length = sentence.length;
  const wordsArr = sentence.trim().split(' ').filter(word => word !== '');
  const wordCount = wordsArr.length;
  const vowels = 'aeiouAEIOU';
  let vowelCount = 0;

  for (let char of sentence) {
      if (vowels.includes(char)) {
          vowelCount++;
      }
  }

  return {
      length,
      wordCount,
      vowelCount
  };
}

console.log("Please enter a sentence that ends with a period ('.'):");

function readSentence() {
  let sentence = '';

  process.stdin.setRawMode(true);

  process.stdin.on('data', (chunk) => {
      const char = chunk.toString();

      sentence += char;

      process.stdout.write(char);

      if (char === '.') {
          process.stdin.setRawMode(false);
          process.stdin.pause();

          const result = analyzeSentence(sentence);

          console.log('\n\nAnalysis Result:');
          console.log(`Length of the sentence: ${result.length}`);
          console.log(`Number of words: ${result.wordCount}`);
          console.log(`Number of vowels: ${result.vowelCount}`);
      }
  });
}

readSentence();