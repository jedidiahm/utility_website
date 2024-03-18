function countVowelsConsonants() {
    const str = document.getElementById('stringInput').value.toLowerCase();
    const vowels = str.match(/[aeiou]/gi);
    const consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    const vowelsCount = vowels ? vowels.length : 0;
    const consonantsCount = consonants ? consonants.length : 0;
    document.getElementById('stringResult').innerText = `Vowels: ${vowelsCount}, Consonants: ${consonantsCount}`;
}

function checkPalindrome() {
    const str = document.getElementById('numberInput').value;
    const isPalindrome = str === str.split('').reverse().join('');
    document.getElementById('palindromeResult').innerText = isPalindrome ? "It's a palindrome" : "It's not a palindrome";
}

function calculateTotal() {
    const subtotal = parseFloat(document.getElementById('subtotalInput').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentageInput').value);
    const tipAmount = subtotal * (tipPercentage / 100);
    const total = subtotal + tipAmount;
    document.getElementById('totalResult').innerText = `Total to be paid: $${total.toFixed(2)}`;
}
