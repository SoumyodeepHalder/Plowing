function push(key){
    for(i=0;i<=5;i++){
        path[i].push(key);
        // console.log(path[i])
    }
    console.log('input pushed')
}
function removeInput(){
    for(i=0;i<=5;i++){
        path[i].shift();
    }
    console.log('input removed')
    console.log('')
}
function space(){
    console.log('stopped')
    for(i=0;i<=5;i++){
        path[i].pop();
    }
    console.log('space input removed')
    // eleminateTurn()
}
function createTurn(){
    newE=document.createElement('div')
    newE.classList.add('box')
    newE.classList.add('whiteTurn')
    newE.style.top=String(topp[0])+"px";
    newE.style.left=String(left[0])+"px";
    canvas[0].appendChild(newE)
    console.log('creating turn')
    turnExist+=1;
}
function eleminateTurn(){
    console.log('eleminating Turn--------')
    canvas[0].removeChild(snake[6])
    turnExist-=1;
}
function oneStep(){
    console.log('going one step')
    if(stop==0){
        if(path[0][0]==" "){
            space()
        }
        else{
            // console.log('starting setInterval')
            stop=setInterval(onePixel, 10)
        }
    }
    else{
        console.log('wait')
    }
}
function onePixel(){
    for(j=0; j<=5; j++){
        // console.log("j="+j)
        if(path[j][0]=="ArrowRight"){
            // console.log('moving snake '+j+", 1px right")
            left[j]++;
            snake[j].style.left=String(left[j])+"px";
            // console.log('posi of snake'+j+' left:'+left[j])
        }
        else if(path[j][0]=="ArrowLeft"){
            // console.log('moving snake '+j+", 1px left")
            left[j]--;
            snake[j].style.left=String(left[j])+"px";
            // console.log('posi of snake'+j+'  left:'+left[j])
        }
        else if(path[j][0]=="ArrowDown"){
            // console.log('moving snake '+j+", 1px down")
            topp[j]++;
            snake[j].style.top=String(topp[j])+"px";
            // console.log('posi of snake'+j+'  top:'+topp[j])
        }
        else if(path[j][0]=="ArrowUp"){
            // console.log('moving snake '+j+", 1px up")
            topp[j]--;
            snake[j].style.top=String(topp[j])+"px";
            // console.log('posi of snake'+j+'  top:'+topp[j])
        }
    }
    sIntStop++
    if(sIntStop>=25){
        // setIntStopper()
        clearInterval(stop)
        stop=0;
        sIntStop=0;
        removeInput()
        if(path[0].length==0){
            console.log('last input pushed')
            push(lastDirection)
            oneStep()
        }
        else if(path[0].length>=0) {
            // createTurn()
            console.log('going new direction')
            if(path[0]!=" "){
                createTurn()
            }
            oneStep();
        }
        if(turnExist>=1 && snake[6].style.top==String(topp[5])+"px"&&snake[6].style.left==String(left[5])+"px"){
            console.log('eleminating turn----')
            eleminateTurn()
        }
    }
}


// Put the snake in position
console.log('putting the snake in position')
var snake=document.getElementsByClassName('box');
var topp=[25, 25, 25, 25, 25, 25];
var left=[150, 125, 100, 75, 50, 25];
for(i=0;i<=5;i++){
    snake[i].style.top=String(topp[i])+"px";
    snake[i].style.left=String(left[i])+"px";
}

// Listen to event
var path=[[]];
var stop=0;
var sIntStop=0;
var lastDirection=0;
var turnExist=0;
var canvas=document.getElementsByClassName('canvas');
path[1]=["ArrowRight"]
path[2]=["ArrowRight","ArrowRight"]
path[3]=["ArrowRight","ArrowRight","ArrowRight"]
path[4]=["ArrowRight","ArrowRight","ArrowRight","ArrowRight"]
path[5]=["ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight"]
addEventListener('keydown',e=>{
    console.log(e.key+" key have been pressed")
    push(e.key);
    if(lastDirection==0){
        createTurn()
    }
    lastDirection=e.key;
    oneStep()
})