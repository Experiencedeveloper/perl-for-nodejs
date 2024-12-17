class StringManipulator {
    constructor() {}

    toUpperCase(str) {
        return str.toUpperCase();
    }

    toLowerCase(str) {
        return str.toLowerCase();
    }

    capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    reverseString(str) {
        return str.split('').reverse().join('');
    }

    isPalindrome(str) {
        const normalizedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        return normalizedStr === this.reverseString(normalizedStr);
    }

    trimWhitespace(str) {
        return str.trim();
    }

    replaceSubstring(str, searchValue, newValue) {
        return str.replace(new RegExp(searchValue, 'g'), newValue);
    }

    countOccurrences(str, substring) {
        return (str.match(new RegExp(substring, 'g')) || []).length;
    }

    containsSubstring(str, substring) {
        return str.includes(substring);
    }

    splitString(str, delimiter) {
        return str.split(delimiter);
    }

    toCamelCase(str) {
        return str.replace(/([-_][a-z])/g, (group) =>
            group.toUpperCase().replace('-', '').replace('_', '')
        );
    }

    toSnakeCase(str) {
        return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
    }

    findLongestWord(str) {
        const words = str.split(' ');
        return words.reduce((longest, current) =>
            current.length > longest.length ? current : longest,
        );
    }

    findShortestWord(str) {
        const words = str.split(' ');
        return words.reduce((shortest, current) =>
            current.length < shortest.length ? current : shortest,
        );
    }

    countVowelsAndConsonants(str) {
        const vowels = str.match(/[aeiouAEIOU]/g) || [];
        const consonants = str.match(/[^aeiouAEIOU\s]/g) || [];
        return { vowels: vowels.length, consonants: consonants.length };
    }

    removeNonAlphanumeric(str) {
        return str.replace(/[^a-zA-Z0-9 ]/g, '');
    }

    shuffleCharacters(str) {
        const arr = str.split('');
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr.join('');
    }

    countWords(str) {
        return str.trim().split(/\s+/).length;
    }
}

module.exports = StringManipulator;
