let obj1 = {
    name : "Soaib",
    age : 25,
    profession : "Developer",
    Mobile : 7046337596
}

let obj2 = {
    city : "Amalsad",
    pincode : 396310
}

console.log("Merge Objects::",{...obj1, ...obj2});