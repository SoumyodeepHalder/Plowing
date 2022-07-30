

var i=0;
var move;
document.getElementsByClassName('box')[i].style.background="black"
addEventListener('keydown', e=>{
    console.log(e.key, "pressed")
    if (e.key=="ArrowRight"){
        console.log('ArrowRight have been pressed')
        document.getElementsByClassName('box')[i].style.background="rgb(234,234,234)"
        i+=1
        document.getElementsByClassName('box')[i].style.background="black"
    }
    else if (e.key=="ArrowLeft"){
        console.log('ArrowLeft have been pressed')
        document.getElementsByClassName('box')[i].style.background="rgb(234,234,234)"
        i-=1
        document.getElementsByClassName('box')[i].style.background="black"
    }
    
    else if (e.key=="ArrowDown"){
        console.log('ArrowDown have been pressed')
        document.getElementsByClassName('box')[i].style.background="rgb(234,234,234)"
        i+=34
        document.getElementsByClassName('box')[i].style.background="black"
    }
    else if (e.key=="ArrowUp"){
        console.log('ArrowUp have been pressed')
        document.getElementsByClassName('box')[i].style.background="rgb(234,234,234)"
        i-=34
        document.getElementsByClassName('box')[i].style.background="black"
    }
})
// clearInterval(move)