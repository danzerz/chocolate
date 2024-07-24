document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with the class "animated-image"
  const images = document.querySelectorAll(".animated-image");

  // Iterate over each selected image
  images.forEach((image) => {
    // Add an event listener for the "mouseover" event
    image.addEventListener("mouseover", () => {
      // Add the "hover" class when the mouse is over the image
      image.classList.add("hover");
    });

    // Add an event listener for the "mouseout" event
    image.addEventListener("mouseout", () => {
      // Remove the "hover" class when the mouse leaves the image
      image.classList.remove("hover");
    });
  });
});
