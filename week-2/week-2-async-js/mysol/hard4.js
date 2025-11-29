
function wait1(t) {
    return new Promise((resolve)=>{
        setTimeout(resolve,t*1000);
    })
}

function wait2(t) {
    return new Promise((resolve)=>{
        setTimeout(resolve,t*1000);
    })

}

function wait3(t) {
    return new Promise((resolve)=>{
        setTimeout(resolve,t*1000);
    })

}

async function calculateTime(t1, t2, t3) {
    const startti=Date.now();
    await wait1(t1);
    await wait2(t2);
    await wait3(t3);
    const tt=Date.now()-startti;
    return tt;

}
calculateTime(2,4,3).then(console.log);
