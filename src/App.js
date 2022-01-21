import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';

const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch('images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <>
    <div className='app w-100 d-flex flex-wrap'>
      {
        images && images.map(img => (
          <div className="gridImageCon" style={{
            backgroundColor: '5px solid ' + '#' + Math.floor(Math.random()*16777215).toString(16),
          }} key={img.id} >
            <img className="gridImage" src={`${img.url}.jpg`} alt=''/>
            <img className="gridThumb" src={`${img.user.profile_image}.webp`} alt=''/>
          </div>
        ))
      }
    </div>

    <Form/>
    </>
  );
}

export default App;
