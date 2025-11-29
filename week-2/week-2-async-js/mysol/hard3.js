function wait1(n){
    return new Promise((resolve)=>{
        setTimeout(resolve,n*1000);
    })

}
function wait2(n){
    return new Promise((resolve)=>{
        setTimeout(resolve,n*1000);
    })
}
function wait3(n){
    return new Promise((resolve)=>{
        setTimeout(resolve,n*1000);

    })
}

async function proall(t1,t2,t3){
    const starttime=Date.now()
    await Promise.all([wait1(t1),wait2(t2),wait3(t3)]);

    const te=Date.now()-starttime;
    return te;
}
proall(2,1,4).then(console.log);
