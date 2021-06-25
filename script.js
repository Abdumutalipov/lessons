let txt = "Hell";
let tpt = txt.split("");
let text = "";
for(let i =0; i < tpt.length; i++) {
  console.log(tpt)
  
}
let  c = 0;
const displayCount = () =>{
  console.log(c)
c++;
}
let x =setInterval(displayCount,1000);