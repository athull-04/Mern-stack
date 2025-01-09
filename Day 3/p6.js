let str="carac";
for(let i=0;i<str.length/2;i++){
    if(str[i]==str[str.length-1-i]){
        console.log("palindrome");
    }
    else{
        console.log("Not Palindrome")
    }
    break;
}