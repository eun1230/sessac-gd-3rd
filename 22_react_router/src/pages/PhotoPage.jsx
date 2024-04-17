import { getData } from '../utils/getData';
import { useState, useEffect } from 'react';

export default function PhotoPage() {
  const [photos, setPhotos] = useState([]);

  //마운트할 때 한번만 실행하기 위한
  useEffect(() => {
    getData('https://jsonplaceholder.typicode.com/photos', setPhotos);
  }, []);

  return (
    <div>
      사진 페이지입니다.
      <div className="photos">
        {photos.map((photo) => {
          return (
            <div key={photo.id} className="photo-card">
              <h3>{photo.title}</h3>
              <img src={photo.url} alt="sample" width={150} />
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
}
