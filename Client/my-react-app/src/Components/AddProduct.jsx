// import React from 'react'

// const AddProduct = () => {
//   return (
//     <div>
 
//         <input  type='text' placeholder='Enter your product name'/>
//         <br/>
//         <br/>
//         <input  type='text' placeholder='Enter your product desc'/>
//         <br/>
//         <br/>
//         <input  type='file' placeholder=''/>
//         <br/>
//         <br/>
//          <button> add</button>
   
    



//     </div>
//   )
// }

// export default AddProduct




// Rup@#12345&*pesh
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom'
// import { createClient } from '@supabase/supabase-js';
// const supabaseUrl = 'https://fzdfcdjjbsnwmdvxhfrh.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6ZGZjZGpqYnNud21kdnhoZnJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4ODI4MzUsImV4cCI6MjAyNDQ1ODgzNX0.9PKXQYWt1KcDrstMRzxdVrW0AfoLJWzsnXAheNStG7s';
// const supabase = createClient(supabaseUrl, supabaseKey);

const AddProduct = () => {

//    let {restroId} =   useParams()

  const [restaurantData, setRestaurantData] = useState({
    name: '',
    description: '',
    image: '',
    price:''


  });


  const handleImageChange = (e) => {
    console.log(e.target.files,"heheheh");
    const file = e.target.files[0];
    console.log(file);
    setRestaurantData({ ...restaurantData, image: file });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurantData({ ...restaurantData, [name]: value });
  };


   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Upload image to Supabase
//       const { data, error } = await supabase.storage.from('zomato').upload('product_images/' + restaurantData.image.name, restaurantData.image);
//       if (error) {
//         throw error;
//       }
//       // https://fzdfcdjjbsnwmdvxhfrh.supabase.co/storage/v1/object/public/zomato/restaurant_images/india-flag.jpg
//       // Get the URL of the uploaded image
//       const imageUrl = `${supabaseUrl}/storage/v1/object/public/zomato/product_images/${restaurantData.image.name}`;
//       console.log(imageUrl,"blocking zzzzzzz");
  
//       // Save restaurant data to MongoDB with image URL
//       const response = await axios.post('http://localhost:4000/api/product', { ...restaurantData, image:imageUrl ,restroId});
//       if (response) {
//         alert('Restaurant added successfully');
//         // Reset form fields
     
//       } else {
//         alert('Failed to add restaurant');
//       }
//     } catch (error) {
//       console.error('Error adding restaurant:', error);
//       alert('Failed to add restaurant');
//     }
  };

  return (
    <div>
      <h2>Add Products</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={restaurantData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="text" name="price" value={restaurantData.price} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input type="text" name="description" value={restaurantData.description} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input type="file" onChange={handleImageChange} accept="image/*" required />
        </div>
      
  
        <button type="submit">Add Product</button>
        {/* <img   src='https://fzdfcdjjbsnwmdvxhfrh.supabase.co/storage/v1/object/public/zomato/restaurant_images/india-flag.jpg'/> */}
        {/* <img  src='https://fzdfcdjjbsnwmdvxhfrh.supabase.co/storage/v1/object/public/zomato/restaurant_images/taro-ohtani-TWJnM9MQlt8-unsplash.jpg'/> */}
      </form>
    </div>
  );
};

export default AddProduct;
// const { data, error } = await supabase.storage.from('zomato').upload('restaurant_images/' + restaurantData.image.name, restaurantData.image);


// Rup@#12345&*pesh
import React, { useState } from 'react';
import './AddRestro.css'; // Import the CSS file
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://fzdfcdjjbsnwmdvxhfrh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6ZGZjZGpqYnNud21kdnhoZnJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4ODI4MzUsImV4cCI6MjAyNDQ1ODgzNX0.9PKXQYWt1KcDrstMRzxdVrW0AfoLJWzsnXAheNStG7s';
const supabase = createClient(supabaseUrl, supabaseKey);

const AddProduct = () => {                                       

   let {restroId} =   useParams()                    

  const [restaurantData, setRestaurantData] = useState({
    name: '',
    description: '',
    image: '',
    price:''


  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setRestaurantData({ ...restaurantData, image: file });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurantData({ ...restaurantData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Upload image to Supabase
      const { data, error } = await supabase.storage.from('zomato').upload('product_images/' + restaurantData.image.name, restaurantData.image);
      if (error) {
        throw error;
      }
      // https://fzdfcdjjbsnwmdvxhfrh.supabase.co/storage/v1/object/public/zomato/restaurant_images/india-flag.jpg
      // Get the URL of the uploaded image
      const imageUrl = `${supabaseUrl}/storage/v1/object/public/zomato/product_images/${restaurantData.image.name}`;
      console.log(imageUrl,"blocking zzzzzzz");
  
      // Save restaurant data to MongoDB with image URL
      const response = await axios.post('http://localhost:4000/api/product', { ...restaurantData, image:imageUrl ,restroId});
      if (response) {
        alert('Restaurant added successfully');
        // Reset form fields
     
      } else {
        alert('Failed to add restaurant');
      }
    } catch (error) {
      console.error('Error adding restaurant:', error);
      alert('Failed to add restaurant');
    }
  };

  return (
    <div>
      <h2>Add Products</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={restaurantData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="text" name="price" value={restaurantData.price} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input type="text" name="description" value={restaurantData.description} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input type="file" onChange={handleImageChange} accept="image/*" required />
        </div>
      
  
        <button type="submit">Add Product</button>
        {/* <img   src='https://fzdfcdjjbsnwmdvxhfrh.supabase.co/storage/v1/object/public/zomato/restaurant_images/india-flag.jpg'/> */}
        {/* <img  src='https://fzdfcdjjbsnwmdvxhfrh.supabase.co/storage/v1/object/public/zomato/restaurant_images/taro-ohtani-TWJnM9MQlt8-unsplash.jpg'/> */}
      </form>
    </div>
  );
};

export default AddProduct;
// const { data, error } = await supabase.storage.from('zomato').upload('restaurant_images/' + restaurantData.image.name, restaurantData.image);