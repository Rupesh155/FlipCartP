import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate=  useNavigate()
  // State variables to handle form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State for handling login status or error message
  const [loginStatus, setLoginStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data Submitted: ", formData);

    // Retrieve the stored user data from localStorage
    const storedUser = localStorage.getItem("user");

    // Check if stored user data exists
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      // Compare entered email and password with stored data
      if (
        formData.email === parsedUser.email &&
        formData.password === parsedUser.passWord
      ) {
        setLoginStatus("Login successful!");
        console.log("User authenticated successfully.");
        navigate('/')

      } else {
        setLoginStatus("Email or password is incorrect.");
        console.log("Authentication failed.");
      }
    } else {
      setLoginStatus("No user found. Please sign up first.");
      console.log("No user data found in localStorage.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <form onSubmit={handleSubmit} style={{ width: "300px" }}>
        <h2>Login</h2>

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

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
        <br />

        <button type="submit">Login</button>

        {/* Display login status */}
        {loginStatus && <p>{loginStatus}</p>}
      </form>
    </div>
  );
}

export default Login;



// {
//   "id":1,
//   "name":"raul"
// }

// {
//   id:1
// }