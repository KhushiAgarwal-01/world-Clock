

setInterval(myfunc,1000);

function myfunc(){
    let a=new Date();
 let h=a.getHours();
 let m=a.getMinutes();
 let s=a.getSeconds();
 let d=h>=12?"PM":"AM";
//  let time=h+":"+m+":"+s;
// document.getElementsByClassName('main')[0].innerHTML=time;
let z=document.getElementById("sec");
z.innerHTML=s;
 let x=document.getElementById("hrs");
 x.innerHTML=h;
 let y=document.getElementById("min");
y.innerHTML=m;
let ampm=document.getElementById("ampm");
ampm.innerHTML=d;

}