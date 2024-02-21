function push(key){
    for(i=0;i<=5;i++){
        path[i].push(key);
        console.log(path[i])
    }
    console.log('input pushed')
}
function executePath(){
    console.log('exucuting path')
    for(i=0; i<=24; i++){
        console.log('moving snake 1px')
        for(j=0; j<=5; j++){
            console.log("j="+j+", i="+i)
            if(path[j][0]=="ArrowRight"){
                console.log('moving snake '+j+", 1px right")
                left[j]++;
                snake[j].style.left=String(left[j])+"px";
                console.log('posi of snake left:'+left[j])
            }
            else if(path[j][0]=="ArrowLeft"){
                console.log('moving snake '+j+", 1px left")
                left[j]--;
                snake[j].style.left=String(left[j])+"px";
                console.log('posi of snake left:'+left[j])
            }
            else if(path[j][0]=="ArrowDown"){
                console.log('moving snake '+j+", 1px down")
                topp[j]++;
                snake[j].style.top=String(topp[j])+"px";
                console.log('posi of snake top:'+topp[j])
            }
            else if(path[j][0]=="ArrowUp"){
                console.log('moving snake '+j+", 1px up")
                topp[j]--;
                snake[j].style.top=String(topp[j])+"px";
                console.log('posi of snake top:'+topp[j])
            }
        }
        j=0
    }
    for(i=0;i<=5;i++){
        path[i].shift();
        console.log(path[i])
    }
    console.log('input removed')
}

var snake=document.getElementsByClassName('box')
var colours6=["violet","indigo","blue","green","yellow","red"]
var topp=[25, 25, 25, 25, 25, 25];
var left=[150, 125, 100, 75, 50, 25];
var path=[[]];

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
    push(e.key);
    executePath();
})