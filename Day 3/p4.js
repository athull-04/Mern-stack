let a=1;
let b=2;
temp=0;
console.log("Fibinocci series");
for(i=1;i<10;i++){
    console.log(a);
    temp=a+b;
    a=b;
    b=temp;
}