function calculator(n1,n2,operator) {
switch(operator){
	case "+":
	 result = n1+n2;
	 break;
	case "-":
	 result = n1-n2;
	 break;
	case "*":
	 result = n1*n2;
	 break;
	case "/":
	 result = n1/n2;
	 break
}
return result
}


module.exports = calculator;
