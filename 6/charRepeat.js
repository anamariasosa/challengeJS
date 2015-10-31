// aaaabbcdefffffffg
// aa[aa]bbcdeff[fffff]g
console.log('\n');
function brackets (stringToFind) {
    var exps = new RegExp(stringToFind[0],'gi'),
      arrayA = stringToFind.match( exps ),
      len = arrayA.length,
      bigLen = stringToFind.length;
  arrayA = arrayA.join('');

  if (arrayA.length > 2) {
    arrayA = arrayA.split('')
    arrayA.splice(2,0,'[').push(']').join('');
  }

  if (stringToFind.length > 2) {
    stringToFind = stringToFind.split('').splice(len, bigLen).join('');
    return arrayA + brackets(stringToFind);
  }else{
    return stringToFind;
  }
}

console.log(brackets('aafff'));