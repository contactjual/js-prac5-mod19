
const sntc = "I am learning web development.";


let rvrs = '';
for (const lettrr of sntc) {
    rvrs = lettrr + rvrs;
}
console.log(rvrs);





// ignore this solution

let rev = '';
for (i = 0; i < sntc.length; i++){
    // console.log(sntc[i])
    const lettrr = sntc[i];
    rvrs = lettrr + rev;
}
console.log(rev);



// shortcut solution

const rvr = sntc.split('').reverse().join('');
console.log(rvr);