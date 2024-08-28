let hrs= document.getElementById("hrs");
let min= document.getElementById("min");
let sec= document.getElementById("sec");
setinterval(()=>{
    let currenttime= new Date();
    hrs.innerHTML=
    (currenttime.getHours()< 10 ? "0": "")
        + currenttime.getHours();
        min.innerhtml=
        (currentTime.getMinutes() < 10 ? "0" :"")
        +currentTime.getminutes();
        sec.innerhtml=
        ( currentTime.getseconds() < 10 ? "0" : "")
        +currentTime.getseconds();
},1000);