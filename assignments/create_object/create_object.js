function CreateObject(arr) {
    // Write your code here
    const obj={};
    for (var i=0;i<arr.length-1;i+=2) {
        let key=arr[i]
        let value=arr[i+1]
        obj[key]=value;

    }
    return obj;
}

module.exports = CreateObject;
