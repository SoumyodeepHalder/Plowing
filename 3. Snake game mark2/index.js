function goRight(){
    console.log("now i is "+i+" going right")
    document.getElementsByClassName('box')[i].style.background = "rgb(234,234,234)";
    console.log("box no:"+i+" is coloured white")
    i += 1;
    if (i%34==0){
        console.log('now i= '+i+ " so making it 0 again" )
        i=i-34
    };
    document.getElementsByClassName('box')[i].style.background = "black";
    console.log("box no:"+i+"is coloured black")
}
function goLeft(){
    console.log("now i is "+i+" going left")
    document.getElementsByClassName('box')[i].style.background = "rgb(234,234,234)";
    console.log("box no:"+i+" is coloured white")
    i -= 1;
    if (i%34==33||i==-1){
        console.log('now i= '+i+ " so making it 0 again" )
        i=i+34
    };
    document.getElementsByClassName('box')[i].style.background = "black";
    console.log("box no:"+i+"is coloured black")
}
function goDown(){
    console.log("now i is "+i+" going down")
    document.getElementsByClassName('box')[i].style.background = "rgb(234,234,234)";
    console.log("box no:"+i+" is coloured white")
    i += 34;
    if (i>=612){
        console.log('now i= '+i+ " so making it 0 again" )
        i=i-612
    };
    document.getElementsByClassName('box')[i].style.background = "black";
    console.log("box no:"+i+"is coloured black")
}
function goUp(){
    console.log("now i is "+i+" going right till i<33 ")
    document.getElementsByClassName('box')[i].style.background = "rgb(234,234,234)";
    console.log("box no:"+i+" is coloured white")
    i -= 34;
    if (i<0){
        console.log('now i= '+i+ " so making it 0 again" )
        i=i+612
    };
    document.getElementsByClassName('box')[i].style.background = "black";
    console.log("box no:"+i+"is coloured black")
}

var i = 0;
var fps = 300;
var move;
document.getElementsByClassName('box')[i].style.background = "black"
addEventListener('keydown', e => {
    console.log(e.key, "event happened")
    clearInterval(move)
    if (e.key == "ArrowRight") {
        console.log('ArrowRight have been pressed')
        move = setInterval(goRight, fps)
    }
    else if (e.key == "ArrowLeft") {
        console.log('ArrowLeft have been pressed')
        move = setInterval(goLeft, fps);
    }
    else if (e.key == "ArrowDown") {
        console.log('ArrowDown have been pressed')
        move = setInterval(goDown, fps);
    }
    else if (e.key == "ArrowUp") {
        console.log('ArrowUp have been pressed')
        move = setInterval(goUp, fps);
    }
})