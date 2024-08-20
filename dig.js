let srr=["Hello9","123","hi9","456","789","098","s9ome"];
let NotNum=[];
let num=[];
let j=0;
let k=0;
for(i in srr){
    if(Number(srr[i])*1==Number(srr[i])){
        num[j]=srr[i];
        j++;

    }
    else{
        NotNum[k]=srr[i];
        k++;
    }
}

console.log(num);
console.log(NotNum);