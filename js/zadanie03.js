function bigestSumOfTwoElements(array){
var newArray=array;
if (newArray.length==1){
    return newArray[0];
}
else if(newArray.length==0){
    return false;
}
else{
    newArray.sort();
    var suma=0;
    for(i=newArray.length-1;i>newArray.length-3;i--){
suma=suma+newArray[i]
    }
    return suma;
}
}
