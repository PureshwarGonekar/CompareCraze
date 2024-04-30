import React from 'react';
import 'devextreme/dist/css/dx.light.css';
 
import { Gallery } from 'devextreme-react/gallery';

const ImageSlidShow = ({dataSource}) => {
  return (
    <div className='w-[190px]'>
       <Gallery
          dataSource={dataSource}
          height={200}
          loop={true}
          slideshowDelay={1500}
          
        />
    </div>
  )
}

export default ImageSlidShow