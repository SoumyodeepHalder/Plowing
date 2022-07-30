bgChanger=()=>{
document.getElementsByClassName("box")[i].style.background="black";
if (i>=1){
    document.getElementsByClassName("box")[i-1].style.background="grey";
}
i+=1;
}
i=0;
setInterval(bgChanger, 1000)