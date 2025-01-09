let a=[1,5,2,3,10,9,8,7,6];
let b;
for(i=0;i<a.length;i++){
    if(a[i]>a[i+1]){
        b=a[i];
        a[i]=a[i+1];
        a[i+1]=b;
    }
}
console.log(a);