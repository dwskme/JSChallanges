function countVowels(str) {
  const word= str.toLowerCase();
  let flag= 0;

  for (let i = 0; i < word.length; i++) {
    const char = word[i];

    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    ) {
      flag++;
    }
  }

  return flag;
}
module.exports = countVowels;
