self.addEventListener('message', async event => {
  const imageURL = event.data

  var requestOptions = {
    method: 'GET',
    // mode: 'cors',
    // redirect: 'follow'
    // mode: "cors"
  };

  fetch(imageURL, requestOptions)
  .then(response => response.blob())
  .then(result => {
    // Send the image data to the UI thread!
    self.postMessage({
      imageURL: imageURL,
      blob: result,
    })
  })
  .catch(error => {
    // Send the image data to the UI thread!
    self.postMessage({
      imageURL: imageURL,
      error: error,
    })
  });
})