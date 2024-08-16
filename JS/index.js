
 let canvas=  document.querySelector('canvas')

 let pen=   canvas.getContext('2d')
pen.fillStyle='red'
let cell=50
let scell=[[0,0]]

function  draw(){
    pen.clearRect(0,0,1800,600)
    for(let i of scell){
        pen.fillRect(i[0],i[1],cell,cell)
    }

}
draw()

function update(){
    let headX=  scell[scell.length-1][0]
   let headY=  scell[scell.length-1][1]

   let newHeadX=headX+cell
   let newHeadY=headY

   scell.push([newHeadX,newHeadY])
   scell.shift()
}
setInterval(()=>{
    draw()
    update()
},100)


































































