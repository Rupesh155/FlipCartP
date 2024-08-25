
let canvas=  document.querySelector('canvas')
let pen=  canvas.getContext('2d')
let cell=50
let sCell=[[0,0]]
let directions='right'
let gameOver=false
let score=10
let foodCell=generateRandom()
console.log(gameOver,"heheh");
let id=  setInterval(()=>{
    draw()
    update()

},100)
document.addEventListener('keydown',(e)=>{
    // console.log(e,'heheheh');
    if(e.key==='ArrowLeft'){
        directions='left'
    }
    else if(e.key==='ArrowUp'){
        directions='up'
    }
    else if(e.key==='ArrowDown'){
        directions='down'
    }
    else{
        directions='right'
    }

})



function draw(){
   
    if(gameOver===true){
        pen.font='40px sans-sarif'
        pen.fillText('game Over', 400,200)
        console.log(gameOver,"ho jaa");
        clearInterval(id)
        return;
    }
    console.log('hello');
    pen.clearRect(0,0,1700,600)
    for(let i of sCell){

        pen.fillStyle='red'
        pen.fillRect(i[0],i[1],cell,cell)
    }
    pen.fillStyle='gray'
    pen.fillRect(foodCell[0],foodCell[1],cell,cell)
    pen.fillStyle='yellow'
    pen.font='30px sand-sarif'
    pen.fillText(`${score},`,100,100)


}
draw()

function update(){
  let headX=   sCell[sCell.length-1][0]
  let headY=   sCell[sCell.length-1][1]
 let newHeadX
  let newHeadY
  if(directions==='left'){
    newHeadX=headX-cell
    newHeadY=headY
    if(newHeadX===0){
        gameOver=true
    }
  
  }
  else if(directions==='right')
{ newHeadX=headX+cell
    newHeadY=headY
    if(newHeadX==1700){
        gameOver=true
        console.log(gameOver,"hghehe");
    }
   
}
else if( directions==='down'){

    newHeadX=headX
    newHeadY=headY+cell
    if(newHeadY==600){
        gameOver=true
    }
}
else{
    newHeadX=headX
    newHeadY=headY-cell
    if(newHeadY<0){
        gameOver=true
    }
 

}
 if(newHeadX===foodCell[0]  && newHeadY===foodCell[1]){
    foodCell=generateRandom()
    score+=1
 }
 else{
    sCell.shift()
 }
  

  sCell.push([newHeadX,newHeadY])




}


function generateRandom(){
    return[
      Math.floor(Math.random()*(1700-cell)/cell)*cell    ,
      Math.floor(Math.random()*(600-cell)/cell)*cell  ,

    ]
}


