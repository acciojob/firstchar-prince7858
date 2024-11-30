function firstChar(text) {
  // your code here
	 if (text == "" || text ==" ") {
		 return "";
  } else if(text.charAt(0) == " "){
		return text.charAt(1) 
  }
	 else {
    return text.charAt(0); 
  }
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
