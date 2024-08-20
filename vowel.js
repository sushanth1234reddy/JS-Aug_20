function vow(input){
    input=input.toLowerCase();
    for(let i=0;i<input.length;i++){
        if(input[i]=="a" || input[i]=="e" || input[i]=="i" || input[i]=="o" || input[i]=="u" ){
               input=input.replace(input[i],"")
        }
    }
  console.log(input);
}
vow("hellO");
vow("WOrld");
vow("Aviel");