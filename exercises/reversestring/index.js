// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


//first solution
/*
function reverse(str) {
    return arr = str.split('')
    .reverse()
    .join('');
}*/


//second solution

/*
function reverse(str) {
    let reversed = '';

    for (let character of str) {
        reversd = character + reversed
    }
    return reversed
}*/

//str.split('') this turns any string into an array
//reduce condenses all values in a an array and condesnses 
//for reduce two arguments are passed, one is an initial value, in this case a '', the second is an arrow function



function reverse(str) {
    debugger;
    return str.split('').reduce((reversed, character) => {
        return character + reversed
    }, '')
}

reverse('adsf');

module.exports = reverse;
