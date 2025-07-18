// components/ImageUpload.js
import React from 'react';

const ImageUpload = ({ onUpload }) => {
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/upload`,
        {
          method: 'POST',
          body: data,
        }
      );
      const result = await res.json();
      if (result.secure_url) {
        onUpload(result.secure_url);
      }
    } catch (err) {
      console.error('Cloudinary upload failed:', err);
    }
  };

  return (
    <div className="image-upload">
      <input type="file" accept="image/*" onChange={handleUpload} />
    </div>
  );
};

export default ImageUpload;
