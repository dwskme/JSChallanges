function countOccurrences(word,find) {
let flag = 0;
for(let i =0; i<word.length; i++){
	if(word[i] === find){
	 flag++ 	
	}
}
	return flag;
}

module.exports = countOccurrences;
