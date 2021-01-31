function modifyArray(array, callback){
    const newArr = [];
    for(let i = 0; i < array.length;i++){
        newArr.push(callback(array[i], function(x){
            return x*2;
        }));

    }
    return newArr;

}
function doSomething(num, callback){
    return callback(num+2);
}

console.log(modifyArray([1,2,3], doSomething));