function firstNonRepeatedChar(str) {
 // Write your code here
	let count = 0;
	for(let i = 0;i<str.length;i++){
		if(str[i] == str[i+1]){
			count++;
		}
	}
}
//const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
