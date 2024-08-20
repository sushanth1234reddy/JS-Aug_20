function Pop(...input){
    let res=[];
    let j=0;
    for(i of input){
        if(i*1==i){
            res[j]=Number(i);
            j++;
        }
        else{
            res[j]=i;
            j++
        }
    }
    res.length=res.length-1;
    console.log(res);

}
Pop(1,2,3,"io","yy","rt",90)