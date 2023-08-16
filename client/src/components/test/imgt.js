import React, { useState } from 'react';
import axios from 'axios';

function Appk() {
  const [file, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
                    // const formData = new FormData();
                    // formData.append('image', selectedFile);

                    // try {
                    // const response = await axios.post('/upload', formData, {
                    //     headers: {
                    //     'Content-Type': 'multipart/form-data',
                    //     },
                    // });

                    // setImageUrl(response.data.imageUrl);
                    // } catch (error) {
                    // console.error('Error uploading image:', error);
                    // console.log("HI")
                    // }
                    const formData = new FormData();
                    formData.append('file', file);
                    axios.post('/upload', formData)
                    .then(res=>console.log(res))
                    .catch(err=>console.log(err))
  };

  return (
    <div>
        <form action="http://localhost:9000/upload" method="post" encType="multipart/form-data">
            <input type="file" name="file" onChange={handleFileChange} />
            <button type="submit">Upload</button>
        </form>
      
    </div>
  );
}

export default Appk;