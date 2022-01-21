import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import { ImagesQuery } from './Api';

const App = () => {
  const [images, setImages] = useState();
  const { isLoading, error, data, isFetching } = ImagesQuery();

  if(isLoading) return (
    <div className="w-100 d-flex justify-content-center spinner-container align-items-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  return (
    <>
    <div className='app w-100 d-flex flex-wrap'>
      {
        data && data.map(img => (
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
