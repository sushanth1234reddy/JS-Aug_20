function pos(num){
    let a=0;
    let b=1;
    i=1;
    while(i<=num){
        if(i==num){
            console.log(a);
            break;
        }
        c=a+b;
        a=b;
        b=c;
        i++; 
    }

}
pos(7);
pos(8);
