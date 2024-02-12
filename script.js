document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".prev-page");
  const nextButton = document.querySelector(".next-page");
  const photos = document.querySelectorAll(".photo");
  let currentIndex = 0;

  // Function to show current photo
  function showPhoto(index) {
    photos.forEach((photo, i) => {
      if (i === index) {
        photo.style.display = "block";
      } else {
        photo.style.display = "none";
      }
    });
  }

  // Initially show the first photo
  showPhoto(currentIndex);

  // Function to show next photo
  function nextPhoto() {
    currentIndex++;
    if (currentIndex >= photos.length) {
      currentIndex = 0;
    }
    showPhoto(currentIndex);
  }

  // Function to show previous photo
  function prevPhoto() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = photos.length - 1;
    }
    showPhoto(currentIndex);
  }

  // Event listeners for next and previous buttons
  nextButton.addEventListener("click", nextPhoto);
  prevButton.addEventListener("click", prevPhoto);
});
