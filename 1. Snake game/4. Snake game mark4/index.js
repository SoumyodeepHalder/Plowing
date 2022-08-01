function goRight(){
    // console.log('goRight')
    crd.left+=1
    box.style.left=String(crd.left)+"px";
    // console.log(`box.style.left=String(crd.left)+"px";`)
    i+=1
    if (i==25){
        clearInterval(stop)
        i=0
    }
}
function goLeft(){
    crd.left-=1
    box.style.left=String(crd.left)+"px";
    i+=1
    if (i==25){
        clearInterval(stop)
        i=0
    }
}
function goDown(){
    crd.top+=1
    box.style.top=String(crd.top)+"px";
    i+=1
    if (i==25){
        clearInterval(stop)
        i=0
    }
}
function goUp(){
    crd.top-=1
    box.style.top=String(crd.top)+"px";
    i+=1
    if (i==25){
        clearInterval(stop)
        i=0
    }
}


var box = document.getElementsByClassName('box')[0]
crd={
    top:0,
    left:0
}
var stop;
var i=0
var LastDirection;
addEventListener('keydown', e=>{
    console.log(`addEventListener('keydown', e=>{`);
    console.log("e.key="+e.key)
    if (e.key=="ArrowRight"&&i==0){
        console.log(`if (e.key=="ArrowRight")`)
        LastDirection=e.key;
        stop=setInterval(goRight, 20)
        console.log(stop);
    }
    else if (e.key=="ArrowLeft"&&i==0){
        console.log(`else if (e.key=="ArrowLeft")`)
        LastDirection=e.key;
        stop=setInterval(goLeft, 20)
    }
    else if (e.key=="ArrowDown"&&i==0){
        console.log(`else if (e.key=="ArrowDown")`)
        LastDirection=e.key;
        stop=setInterval(goDown, 20)
    }
    else if (e.key=="ArrowUp"&&i==0){
        console.log('ArrowUp')
        LastDirection=e.key;
        stop=setInterval(goUp, 20)
    }
})