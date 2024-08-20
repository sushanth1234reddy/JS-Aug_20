function vow(input){
    input=input.toLowerCase();
    let arr=["a","e","i","o","u"];
    for(let i=0;i<input.length;i++){
        for(let j=0;j<arr.length;j++){
            if(input[i]==arr[j]){
                input=input.replace(input[i],"")
            }
            
        }
        
    }
  console.log(input);
}
vow("hellO");
vow("WOrld");
vow("sushanth");