// This program reads a sentence character by character until a period ('.') is found.
// It then analyzes the sentence to find the length, number of words, and number of vowels.

// Function to analyze a sentence
function analyzeSentence(sentence) {
    // Length of the sentence (number of characters including the period)
    const length = sentence.length;
  
    // Number of words-assuming words are separated by single spaces.
    // Trim to remove leading/trailing spaces, then split by space, filter empty strings
    const wordsArr = sentence.trim().split(' ').filter(word => word !== '');
    const wordCount = wordsArr.length;
  
    // Number of vowels 
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
  
  // reading sentence character by character and analyzing
  const readline = require('readline');
  
  // Create interface to read input from the user
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  console.log("Please enter a sentence that ends with a period ('.'):");
  
  // Function to read input character by character until period is found
  function readSentence() {
    let sentence = '';
  
    // raw mode to read one character 
    process.stdin.setRawMode(true);
  
    process.stdin.on('data', (chunk) => {
      const char = chunk.toString();
  
      // Append character to sentence
      // sentence += char;
  
      process.stdout.write(char);
  
      // Check if last character is a period, then finish reading
      if (char === '.') {
        process.stdin.setRawMode(false);
        process.stdin.pause();
  
        // Analyze the sentence
        const result = analyzeSentence(sentence);
  
        console.log('\n\nAnalysis Result:');
        console.log(`Length of the sentence: ${result.length}`);
        console.log(`Number of words: ${result.wordCount}`);
        console.log(`Number of vowels: ${result.vowelCount}`);
  
        rl.close();
      }
    });
  }
  
  readSentence();
  