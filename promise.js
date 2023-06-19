// let data = new Promise((resolve,reject)=>{
// setTimeout(()=>{
// // throw new Error("Error has occured")
// resolve("Successfull") 
// reject("Error has occured Ankit") 
// },2000)
// })

// data.then((response)=>console.log(response)).catch((error)=>{
//     console.log("Error",error)
// })

//----------------//
let data = Promise.race(
    [
        new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("Success 1")
            },2000)
        }),
        new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("Success 2")
            },2000)
        }),
        new Promise((resolve,reject)=>{
            setTimeout(()=>{
                reject("Success 3")
            },3000)
        })        
    ]
)
data.then((res)=>console.log("Res from then",res)).catch((error)=>console.log("Error"))