# Perl for Node.js: Array and String Manipulation Kit

## Description
A powerful toolkit for robust array and string manipulation in Node.js, inspired by the text-processing capabilities of Perl.

## Installation
```bash
npm install perl-for-nodejs
```

## Usage

### Array Manipulation

```javascript
const ArrayManipulator = require('perl-for-nodejs');

const arrManip = new ArrayManipulator();
arrManip.addElement(10);
arrManip.addElement(5);
arrManip.displayArray();  // Outputs: Current array: [10, 5]
arrManip.sortArray();
arrManip.displayArray();  // Outputs: Current array: [5, 10]
arrManip.reverseArray();
arrManip.displayArray();  // Outputs: Current array: [10, 5]
arrManip.insertElementAt(20, 1);
arrManip.displayArray();  // Outputs: Current array: [10, 20, 5]
arrManip.mergeArray([7, 8, 9]);
arrManip.displayArray();  // Outputs: Current array: [10, 20, 5, 7, 8, 9]
console.log("Max element:", arrManip.findMax());  // Outputs: Max element: 20
console.log("Min element:", arrManip.findMin());  // Outputs: Min element: 5
arrManip.removeDuplicates();
arrManip.displayArray();  // Outputs: Current array: [10, 20, 5, 7, 8, 9]

// Array manipulation methods
arrManip.mapArray(x => x * 2);  // Outputs: Mapped array: [20, 40, 10, 14, 16, 18]
const sum = arrManip.reduceArray((acc, val) => acc + val, 0);  // Outputs: Reduced array result: 118
arrManip.filterArray(x => x > 15);  // Outputs: Filtered array: [20, 40, 16, 18]
```

### String Manipulation

```javascript
const StringManipulator = require('perl-for-nodejs/stringManipulator');

const strManip = new StringManipulator();
console.log(strManip.toUpperCase("hello"));  // Outputs: HELLO
console.log(strManip.reverseString("world"));  // Outputs: dlrow
console.log(strManip.isPalindrome("racecar"));  // Outputs: true
console.log(strManip.trimWhitespace("  hello world  "));  // Outputs: hello world
console.log(strManip.replaceSubstring("hello world", "world", "there"));  // Outputs: hello there
console.log(strManip.countOccurrences("hello world", "l"));  // Outputs: 3
console.log(strManip.containsSubstring("hello world", "world"));  // Outputs: true
console.log(strManip.splitString("hello world", " "));  // Outputs: [ 'hello', 'world' ]
console.log(strManip.toCamelCase("hello_world-example"));  // Outputs: helloWorldExample
console.log(strManip.toSnakeCase("helloWorldExample"));    // Outputs: hello_world_example
console.log(strManip.findLongestWord("Find the longest word in this sentence"));  // Outputs: sentence
console.log(strManip.findShortestWord("Find the shortest word"));  // Outputs: the
console.log(strManip.countVowelsAndConsonants("Hello World!"));  // Outputs: { vowels: 3, consonants: 7 }
console.log(strManip.removeNonAlphanumeric("Hello, World!"));  // Outputs: Hello World
console.log(strManip.shuffleCharacters("abcdef"));  // Outputs: Randomly shuffled characters of "abcdef"
console.log(strManip.countWords("Hello world! This is an example."));  // Outputs: 5
```

## Methods

### ArrayManipulator Methods
- **addElement(element)**: Adds an element to the array.
- **removeElement(element)**: Removes an element from the array.
- **getElement(index)**: Gets an element by its index.
- **displayArray()**: Displays the current array.
- **sortArray()**: Sorts the array in ascending order.
- **reverseArray()**: Reverses the order of the array.
- **insertElementAt(element, index)**: Inserts an element at a specified index.
- **mergeArray(newArray)**: Merges another array into the current array.
- **findMax()**: Finds the maximum element in the array.
- **findMin()**: Finds the minimum element in the array.
- **removeDuplicates()**: Removes duplicate elements from the array.
- **mapArray(callback)**: Applies a callback function to each element and returns the modified array.
- **reduceArray(callback, initialValue)**: Reduces the array to a single value using a callback function and an initial value.
- **filterArray(callback)**: Filters the array based on a callback function.

### StringManipulator Methods
- **toUpperCase(str)**: Converts a string to uppercase.
- **toLowerCase(str)**: Converts a string to lowercase.
- **capitalizeFirstLetter(str)**: Capitalizes the first letter of a string.
- **reverseString(str)**: Reverses a string.
- **isPalindrome(str)**: Checks if a string is a palindrome.
- **trimWhitespace(str)**: Trims leading and trailing whitespace from a string.
- **replaceSubstring(str, searchValue, newValue)**: Replaces all occurrences of a substring with a new value.
- **countOccurrences(str, substring)**: Counts the number of occurrences of a substring in a string.
- **containsSubstring(str, substring)**: Checks if a string contains a specific substring.
- **splitString(str, delimiter)**: Splits a string into an array based on a delimiter.
- **toCamelCase(str)**: Converts a string to camelCase.
- **toSnakeCase(str)**: Converts a string to snake_case.
- **findLongestWord(str)**: Finds and returns the longest word in a string.
- **findShortestWord(str)**: Finds and returns the shortest word in a string.
- **countVowelsAndConsonants(str)**: Counts the number of vowels and consonants in a string.
- **removeNonAlphanumeric(str)**: Removes non-alphanumeric characters from a string.
- **shuffleCharacters(str)**: Shuffles the characters of a string.
- **countWords(str)**: Counts the number of words in a string.
