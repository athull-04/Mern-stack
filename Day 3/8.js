let a=[1,5,2,3,10,9,8,7,6];
let three=a.filter(num=>num%3==0);
let five=a.filter(num=>num%5==0);
let sum=51;
for(i=0;i<a.length;i++){
    if(i%2==0 && i%3==0){
        a[i]=sum;
    }
    else if(i%2==0){
        for(j=0;j<three.length;j++){
            a[i]=three[j];
        }
       
    }
    else if(i%3==0){
        for(j=0;j<five.length;j++){
            a[i]=five[j];
            
        }
    }
}
console.log(a);