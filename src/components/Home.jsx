import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'

import { enhancedImageAPI } from '../utils/enhancedImageAPI';

export default function Home() {

  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);


  const uploadImageHandler = async (file) =>{

    setUploadImage(URL.createObjectURL(file));
    console.log(URL.createObjectURL(file)); //use to convert file into link
    setLoading(true);

    // call API to enhance the image
    try{
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL);
      setLoading(false);
    }catch(err){
      console.log(err);
      alert("Error while enhancing the image. Please try again.")
    }
  }

  return (
    <>
        <ImageUpload uploadImageHandler={uploadImageHandler}/>
        <ImagePreview loading={loading} uploaded={uploadImage} enhanced={enhancedImage}/>
    </>
  )
}
