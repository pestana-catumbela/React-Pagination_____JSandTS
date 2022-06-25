import React, { useEffect } from 'react';
import usePhotos from './hooks/usePhotos';
import './App.css';

function App() {
  const {photos, fetchPhotos} = usePhotos(3)

  useEffect(() => {
    fetchPhotos(2)
  }, [])

  return (
    <>
      <div className="title">
        <h1>Bráulia</h1>
      </div>

      <section>
        <div className="imgs">
          {photos.map((photo) => (
            <img key={photo.id} src={photo.url} alt={photo.title}/>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
