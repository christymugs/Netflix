function playVideo() {
  const imageContainer = document.getElementById('image-container');
  const video = document.getElementById('banner-video');

  // Hide the image container after 2 seconds
  setTimeout(() => {
    imageContainer.style.display = 'none';
    video.style.display = 'block';
    video.play();
  }, 2000);

  // Show the image container after the video ends
  video.onended = () => {
    video.style.display = 'none';
    imageContainer.style.display = 'flex';
  };
}
