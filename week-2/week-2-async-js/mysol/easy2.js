let counter=0;
let count=()=>{
    counter++;
    console.log(counter);
    setTimeout(count,5000);
}
count();