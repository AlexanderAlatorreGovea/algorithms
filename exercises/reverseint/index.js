// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

///parsedInt turns a string into a number
///toString turns somethingin to a string

/*
function reverseInt(n) {
   const reversed = n.toString().split('').reverse().join('');
   if( n < 0 ) {
        return parseInt(reversed) * -1;
   }
   return parseInt(reversed)
}*/

function reverseInt(n) {
    const reversed = n
      .toString()
      .split('')
      .reverse()
      .join('');
  
    return parseInt(reversed) * Math.sign(n);
  }


module.exports = reverseInt;
