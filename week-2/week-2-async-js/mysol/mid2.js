let counter=0
let hh=7
let mm=0
let ss=0
let sscount=()=>{
    if(ss==60){
        ss=0;
    }
    ss++;
    console.log(hh+":"+mm+":"+ss)
}
let mmcount=()=>{

    mm++;
}
let hhcount=()=>{
    hh++;
}
setInterval(sscount,1000);
setInterval(mmcount,60000);
setInterval(hhcount,3600000);
// console.log(hh+":"+mm+":"+ss)
