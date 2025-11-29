// function wait(n){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("waiting is done");

//         },n*1000);

//     });
// }

function wait(n){
    return new Promise((resolve)=>{
        setTimeout(resolve,n*1000);
    })
}
wait(3).then(()=>{
    console.log("waiting is over");
})