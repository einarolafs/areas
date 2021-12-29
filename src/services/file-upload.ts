const fileUpload = (file: File) => {
  console.log(file);
  if (!file) {
    return null;
  }

  const formData = new FormData();

  formData.append('File', file);

  fetch('http://localhost:3001/api/v1/polygons',
    {
      method: 'POST',
      body: formData,
    }
  )
    .then((response) => response.json())
    .then((result) => {
      console.log('Success:', result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

export default fileUpload;