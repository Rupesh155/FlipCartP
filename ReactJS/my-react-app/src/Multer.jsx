import React, { useState } from 'react';
import axios from 'axios';

const Multer = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:5000/upload', formData);
      setMessage(res.data);
    } catch (err) {
      console.error(err); 
      setMessage('Error uploading file.');
    }
  };

  return (
    <div>
      <h3>File Upload</h3>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload</button>
      <p>{message}</p>
    </div>             
  );
};

export default Multer;
