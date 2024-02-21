function execute(){
    console.log('execution started')
    if (todo[0]=="ArrowRight" && i==0){
        console.log('ArrowRight pressed to going right')
        stop=setInterval(goRight, fps)
    }
    else if (todo[0]=="ArrowLeft" && i==0){
        console.log('ArrowLeft pressed to going left')
        stop=setInterval(goLeft, fps)
    }
    else if (todo[0]=="ArrowDown" && i==0){
        console.log('ArrowDown pressed to going Down')
        stop=setInterval(goDown, fps)
    }
    else if (todo[0]=="ArrowUp" && i==0){
        console.log('ArrowUp pressed to going Up')
        stop=setInterval(goUp, fps)
    }
    else if(todo[0]==' '){
        clearInterval(stop)
        console.log('stopped')
        todo.shift()
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
        else {
            todo.push("ArrowRight")
            execute()
        }
    }
}
function goLeft(){
    console.log('goLeft func started')
    left-=1
    box.style.left=String(left)+"px";
    i+=1
    if (i>=25){
        console.log('going left done')
        clearInterval(stop)
        todo.shift()
        console.log('event removed')
        console.log(todo)
        i=0
        if (todo.length>0){
            execute()
        }
        else {
            todo.push("ArrowLeft")
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
        else {
            todo.push("ArrowDown")
            execute()
        }
    }
}
function goUp(){
    console.log('goUp func started')
    topp-=1
    box.style.top=String(topp)+"px";
    i+=1
    if (i>=25){
        console.log('going UP done')
        clearInterval(stop)
        todo.shift()
        console.log('event removed')
        console.log(todo)
        i=0
        if (todo.length>0){
            console.log('changing direction from up')
            execute()
        }
        else {
            // console.log('going up againg')
            todo.push("ArrowUp")
            execute()
        }
    }
}
// ---------------------------------------------
var topp=0;
var left=0;
var i=0;
var fps=20;
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