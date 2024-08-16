import React, { useContext } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Data from './Data'
const Home = () => {


  return (
   <>



{/* <div className='container'>  
<div className='row'>
  <div className='col-4'>
  <div class="card" style={{width:"300px"}}>
  <img  height='300'  src="https://images.unsplash.com/photo-1722218530834-0f440f4db181?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

  </div>
  <div className='col-4'>
  <div class="card" style={{width:"300px"}}>
  <img  height='300'  src="https://images.unsplash.com/photo-1722218530834-0f440f4db181?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

</div>

<div className='col-4'>
<div class="card" style={{width:"300px"}}>
  <img  height='300'  src="https://images.unsplash.com/photo-1722218530834-0f440f4db181?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

</div>

</div>
</div> */}
<div  className='container'> 
<div  className='row'>



{

  Data.map((res,id)=>{
    return(<>
    <div className='col-4'>
    <div  key={id} class="card" style={{width:"400px"}}>
  <img src={res.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{res.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>

    </>)

  })
}
</div>
</div>
   </>
  )
}


export default Home