import React, { useState } from "react";
import axios from 'axios'
function SignUp() {
  // State variables to handle form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    passWord: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit =   async(e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
       let data=  await axios.post('http://localhost:7000/create',formData)
       console.log(data);
       
    // You can add your API call or validation logic here
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ width: '300px' }}>
        <h2>Sign Up</h2>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        <br />

        <label htmlFor="passWord">Password:</label>
        <input
          type="password"
          id="password"
          name="passWord"
          value={formData.passWord}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
        <br />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
