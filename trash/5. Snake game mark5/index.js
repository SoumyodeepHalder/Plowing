function execute(){
    console.log('execution started')
    if (todo[0]=="ArrowRight" && i==0){
        console.log('ArrowRight pressed to going right')
        stop=setInterval(goRight, 1)
    }
    if (todo[0]=="ArrowLeft" && i==0){
        console.log('ArrowLeft pressed to going left')
        stop=setInterval(goLeft, 1)
    }
    if (todo[0]=="ArrowDown" && i==0){
        console.log('ArrowDown pressed to going Down')
        stop=setInterval(goDown, 1)
    }
    if (todo[0]=="ArrowUp" && i==0){
        console.log('ArrowUp pressed to going Up')
        stop=setInterval(goUp, 1)
    }
}

function goRight(){
    console.log('goRight func started')
    left+=1
    box.style.left=String(left)+"px";
    i+=1
    if (i>=25){
        console.log('going right done')
        clearInterval(stop)
        todo.shift()
        console.log('event removed')
        console.log(todo)
        i=0
        if (todo.length>0){
            execute()
        }
    }
}
function goLeft(){
    console.log('goRight func started')
    left-=1
    box.style.left=String(left)+"px";
    i+=1
    if (i>=25){
        console.log('going right done')
        clearInterval(stop)
        todo.shift()
        console.log('event removed')
        console.log(todo)
        i=0
        if (todo.length>0){
            execute()
        }
    }
}
function goDown(){
    console.log('goDown func started')
    topp+=1
    box.style.top=String(topp)+"px";
    i+=1
    if (i>=25){
        console.log('going down done')
        clearInterval(stop)
        todo.shift()
        console.log('event removed')
        console.log(todo)
        i=0
        if (todo.length>0){
            execute()
        }
    }
}
function goUp(){
    console.log('goRight func started')
    topp-=1
    box.style.top=String(topp)+"px";
    i+=1
    if (i>=25){
        console.log('going top done')
        clearInterval(stop)
        todo.shift()
        console.log('event removed')
        console.log(todo)
        i=0
        if (todo.length>0){
            execute()
        }
    }
}
// ---------------------------------------------
var topp=0;
var left=0;
var i=0;
var emer=0;
var todo=[]
var box=document.getElementsByClassName('box')[0]
addEventListener('keydown',e=>{
    console.log("inside event listener due to:"+e.key)
    todo.push(e.key)
    console.log('event pushed')
    console.log(todo)
    execute()
})