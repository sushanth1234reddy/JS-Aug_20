function rev(num){
    let res="";
    if(num[0]=="-"){
        for(i=num.length-1;i>=1;i--){
            res=res+num[i];
        }
        res="-"+res;
        console.log(Number(res))
    }
    else{
        num=String(Number(num));

    for(i=num.length-1;i>=0;i--){
        res=res+num[i];
        
    }
    console.log(Number(res));
}

}
rev(String(450));
rev(String(-123));
rev(String(-130));
