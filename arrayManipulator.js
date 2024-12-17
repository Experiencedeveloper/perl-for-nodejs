const StringManipulator = require('./stringManipulator');

class ArrayManipulator {
    constructor() {
        this.array = [];
        this.stringManipulator = new StringManipulator();
    }

    addElement(element) {
        this.array.push(element);
        console.log(`Added ${element} to the array.`);
    }

    removeElement(element) {
        const index = this.array.indexOf(element);
        if (index !== -1) {
            this.array.splice(index, 1);
            console.log(`Removed ${element} from the array.`);
        } else {
            console.log(`${element} not found in the array.`);
        }
    }

    getElement(index) {
        if (index >= 0 && index < this.array.length) {
            return this.array[index];
        } else {
            console.log("Index out of range.");
            return null;
        }
    }

    displayArray() {
        console.log("Current array:", this.array);
    }

    sortArray() {
        this.array.sort((a, b) => a - b);
        console.log("Sorted the array.");
    }

    reverseArray() {
        this.array.reverse();
        console.log("Reversed the array.");
    }

    insertElementAt(element, index) {
        if (index >= 0 && index <= this.array.length) {
            this.array.splice(index, 0, element);
            console.log(`Inserted ${element} at index ${index}.`);
        } else {
            console.log("Index out of range.");
        }
    }

    mergeArray(newArray) {
        this.array = this.array.concat(newArray);
        console.log("Merged array:", this.array);
    }

    findMax() {
        if (this.array.length > 0) {
            return Math.max(...this.array);
        } else {
            console.log("Array is empty.");
            return null;
        }
    }

    findMin() {
        if (this.array.length > 0) {
            return Math.min(...this.array);
        } else {
            console.log("Array is empty.");
            return null;
        }
    }

    removeDuplicates() {
        this.array = [...new Set(this.array)];
        console.log("Removed duplicates:", this.array);
    }

    mapArray(callback) {
        this.array = this.array.map(callback);
        console.log("Mapped array:", this.array);
        return this.array;
    }

    reduceArray(callback, initialValue) {
        const result = this.array.reduce(callback, initialValue);
        console.log("Reduced array result:", result);
        return result;
    }

    filterArray(callback) {
        this.array = this.array.filter(callback);
        console.log("Filtered array:", this.array);
        return this.array;
    }

    toUpperCase(str) {
        return this.stringManipulator.toUpperCase(str);
    }

    toLowerCase(str) {
        return this.stringManipulator.toLowerCase(str);
    }

    capitalizeFirstLetter(str) {
        return this.stringManipulator.capitalizeFirstLetter(str);
    }

    reverseString(str) {
        return this.stringManipulator.reverseString(str);
    }

    isPalindrome(str) {
        return this.stringManipulator.isPalindrome(str);
    }

    trimWhitespace(str) {
        return this.stringManipulator.trimWhitespace(str);
    }

    replaceSubstring(str, searchValue, newValue) {
        return this.stringManipulator.replaceSubstring(str, searchValue, newValue);
    }

    countOccurrences(str, substring) {
        return this.stringManipulator.countOccurrences(str, substring);
    }

    containsSubstring(str, substring) {
        return this.stringManipulator.containsSubstring(str, substring);
    }

    splitString(str, delimiter) {
        return this.stringManipulator.splitString(str, delimiter);
    }

    toCamelCase(str) {
        return this.stringManipulator.toCamelCase(str);
    }

    toSnakeCase(str) {
        return this.stringManipulator.toSnakeCase(str);
    }

    findLongestWord(str) {
        return this.stringManipulator.findLongestWord(str);
    }

    findShortestWord(str) {
        return this.stringManipulator.findShortestWord(str);
    }

    countVowelsAndConsonants(str) {
        return this.stringManipulator.countVowelsAndConsonants(str);
    }

    removeNonAlphanumeric(str) {
        return this.stringManipulator.removeNonAlphanumeric(str);
    }

    shuffleCharacters(str) {
        return this.stringManipulator.shuffleCharacters(str);
    }

    countWords(str) {
        return this.stringManipulator.countWords(str);
    }
}

// Example usage
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

// String manipulation examples
console.log(arrManip.toUpperCase("hello"));  // Outputs: HELLO
console.log(arrManip.reverseString("world"));  // Outputs: dlrow
console.log(arrManip.isPalindrome("racecar"));  // Outputs: true
console.log(arrManip.trimWhitespace("  hello world  "));  // Outputs: hello world
console.log(arrManip.replaceSubstring("hello world", "world", "there"));  // Outputs: hello there
console.log(arrManip.countOccurrences("hello world", "l"));  // Outputs: 3
console.log(arrManip.containsSubstring("hello world", "world"));  // Outputs: true
console.log(arrManip.splitString("hello world", " "));  // Outputs: [ 'hello', 'world' ]
console.log(arrManip.toCamelCase("hello_world-example"));  // Outputs: helloWorldExample
console.log(arrManip.toSnakeCase("helloWorldExample"));    // Outputs: hello_world_example
console.log(arrManip.findLongestWord("Find the longest word in this sentence"));  // Outputs: sentence
console.log(arrManip.findShortestWord("Find the shortest word"));  // Outputs: the
console.log(arrManip.countVowelsAndConsonants("Hello World!"));  // Outputs: { vowels: 3, consonants: 7 }
console.log(arrManip.removeNonAlphanumeric("Hello, World!"));  // Outputs: Hello World
console.log(arrManip.shuffleCharacters("abcdef"));  // Outputs: Randomly shuffled characters of "abcdef"
console.log(arrManip.countWords("Hello world! This is an example."));  // Outputs: 6
