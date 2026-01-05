import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {

    const [adminInformation, setAdminInformation] = useState(null);

useEffect(() => {
  console.log("Fetching website content...");
  axios.get('http://localhost:8000/api/admin/information')
    .then(res => {
      console.log("Website content received:", res.data);
      setAdminInformation(res.data);
    })
    .catch(err => {
      console.error('Failed to fetch website content:', err);
    });
}, []);

  return (
    <div>
      <div>
        <p>Name: {adminInformation.firstName} </p>
        <p>Name: {adminInformation.lastName} </p>
        <p>Name: {adminInformation.email} </p>
      </div>
    </div>
  )
}

export default AdminPanel