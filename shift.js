function shi(...input){
let output=[];
let j=0;
for(let i=1;i<input.length;i++){
    output[j]=input[i];
    j++;

}
console.log(output);
}
shi(99,"op","rr",23,89);