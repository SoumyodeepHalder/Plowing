function push(key){
    for(i=0;i<=5;i++){
        path[i].push(key);
        console.log(path[i])
    }
    console.log('input pushed')
}
function execute(){
    console.log('exucuting')
    if(stop==0){
        console.log('starting setInterval')
        stop=setInterval(oneStep, 10)
    }
    else{
        console.log('wait')
    }
}
function oneStep(){
    for(j=0; j<=5; j++){
        console.log("j="+j)
        if(path[j][0]=="ArrowRight"){
            console.log('moving snake '+j+", 1px right")
            left[j]++;
            snake[j].style.left=String(left[j])+"px";
            console.log('posi of snake'+j+' left:'+left[j])
        }
        else if(path[j][0]=="ArrowLeft"){
            console.log('moving snake '+j+", 1px left")
            left[j]--;
            snake[j].style.left=String(left[j])+"px";
            console.log('posi of snake'+j+'  left:'+left[j])
        }
        else if(path[j][0]=="ArrowDown"){
            console.log('moving snake '+j+", 1px down")
            topp[j]++;
            snake[j].style.top=String(topp[j])+"px";
            console.log('posi of snake'+j+'  top:'+topp[j])
        }
        else if(path[j][0]=="ArrowUp"){
            console.log('moving snake '+j+", 1px up")
            topp[j]--;
            snake[j].style.top=String(topp[j])+"px";
            console.log('posi of snake'+j+'  top:'+topp[j])
        }
    }
    siStopper++
    if(siStopper>=25){
        siStopper=0;
        clearInterval(stop);
        stop=0;
        for(i=0;i<=5;i++){
            path[i].shift();
            console.log(path[i])
        }
        console.log('input removed')
        if(path[0].length==0){
            push(lastDirection)
            execute()
        }
        else if(path[0].length>=0) {
            execute()
        }
    }
}

var snake=document.getElementsByClassName('box')
var colours6=["violet","indigo","blue","green","yellow","red"]
var topp=[25, 25, 25, 25, 25, 25];
var left=[150, 125, 100, 75, 50, 25];
var path=[[]];
var stop=0;
var siStopper=0;
var lastDirection;
for(i=0;i<=5;i++){
    snake[i].style.top=String(topp[i])+"px";
    snake[i].style.left=String(left[i])+"px";
    snake[i].style.background=colours6[i];
}
path[1]=["ArrowRight"]
path[2]=["ArrowRight","ArrowRight"]
path[3]=["ArrowRight","ArrowRight","ArrowRight"]
path[4]=["ArrowRight","ArrowRight","ArrowRight","ArrowRight"]
path[5]=["ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight"]
addEventListener('keydown',e=>{
    console.log(e.key+" key have been pressed")
    if(e.key==" "){
        clearInterval(stop)
    }
    else{
        push(e.key);
        lastDirection=e.key;
        execute()
    }
})