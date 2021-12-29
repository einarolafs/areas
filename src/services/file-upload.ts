const fileUpload = async (file: File) => {
  if (!file) {
    return null;
  }

  const formData = new FormData();

  formData.append('File', file);

  const response = await fetch('http://localhost:3001/api/v1/polygons',
    {
      method: 'POST',
      body: formData,
    }
  )
  
  if (!response.ok) {
    console.error('Error:', response.statusText);
  }

  const data = await response.json();

  return data;
};

export default fileUpload;