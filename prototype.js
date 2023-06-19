//METHOD 1 : WITH PROTO
// let user = {
//     getfullName : function(){
//         return this.name + " "+this.designation
//     }
// }
// let data = {
//     name : "Ankit",
//     designation : "SDE",
// }
// data.__proto__=user
// console.log(data.getfullName())

//METHOD 2 WITHOUT PROTO
// let user = {
//     getFullName: function () {
//         return data.name;
//     }
// };

// let data = {
//     name: "Ankir",
//     getData: user.getFullName
// };

// console.log(data.getData()); // Output: "Ankir"

//Creating our own prototype
// Object.prototype.data = {
//     name : "Ankit",
//     designation : "SDE"
// }
// let y = {random : "Text1546"};
// y=y.data
// console.log(y)
