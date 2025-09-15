import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const enhancedImageAPI = async (file) => {
    try {

        const taskId = await uploadImage(file);
        console.log("Image Uploaded Successfully, Task ID: ", taskId);

        const enhancedImageData = await pollForEnhancedImage(taskId);
        console.log("Enhanced Image Data: ", enhancedImageData);

        return enhancedImageData;

    } catch (error) {
        console.log("Error enhancing image: ", error.message);
        console.log(error)
    }
}

const uploadImage = async (file) => {

    const formData = new FormData();
    formData.append("image_file", file);


    const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_KEY
        }
    });

    // console.log(data);

    const taskId = data.data.task_id;

    if (!data?.data?.task_id) {
        throw new Error("Failed to upload image! Task ID not found.");
    }

    return taskId;
}



const fetchEnhancedImage = async (taskId) => {

    const { data } = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`, {
        headers: {
            "X-API-KEY": API_KEY
        }
    });

    console.log(data);

    return data.data;
}

const pollForEnhancedImage = async (taskId, retries = 0, maxRetries = 20) => {
  const result = await fetchEnhancedImage(taskId);

  // Assuming: state = 4 → processing, state = 5 → done
  if (result.state === 4) {
    console.log(`⏳ Processing... retry ${retries + 1}/${maxRetries}`);

    if (retries >= maxRetries) {
      throw new Error("Max retries reached. Please try again later.");
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));
    return pollForEnhancedImage(taskId, retries + 1, maxRetries);
  }

  if (!result.image) {
    throw new Error("Enhanced image not available in response.");
  }

  return result.image;
};