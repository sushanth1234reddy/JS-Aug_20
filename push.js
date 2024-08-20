function Push(...input){
   
    let arr=["jdh",878,43];
    let j=arr.length;
    for(i of input){
        if(i*1==i){
          arr[j]=Number(i);
          j++;
            
        }
        else{
            arr[j]=i;
            j++
            
        }  
    }

    console.log(arr)

}

Push(1,2,3,"tt","yy","op");

// function Push(...input){
   
//     let arr=["jdh",878,43];
//     let j=arr.length;
//     for(i of input){
//         if(i*1==i){
//           arr[j]=Number(i);
//           j++;
            
//         }
//         else{
//             arr[j]=i;
//             j++
            
//         }  
//     }

//     console.log(arr)

// }
// let input=prompt("enter array values separated with comma(,):");
// Push(1,2,3,"tt","yy","op");