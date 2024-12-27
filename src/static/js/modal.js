  // Function to Handle Image Modal (For General Image Modals)
  document.querySelectorAll('.interactive-image').forEach(img => {
  img.addEventListener('click', function () {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');

    // Open the modal
    modal.style.display = "block";
    modalImg.src = this.src; // Set the modal image source
    captionText.innerHTML = this.alt; // Set the caption text
  });
});

// Close the modal when clicking the close button
document.querySelector('.close').addEventListener('click', function () {
  const modal = document.getElementById('imageModal');
  modal.style.display = "none";
});

// Close the modal when clicking outside the image
window.addEventListener('click', function (event) {
  const modal = document.getElementById('imageModal');
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */


  // Function to Portfolio Modal 
  function openPortfolioModal(title, imageSrc, description) {
  const modal = document.getElementById('portfolioModal');
  document.getElementById('portfolioModalTitle').innerText = title;
  document.getElementById('portfolioModalImage').src = imageSrc;
  document.getElementById('portfolioModalDescription').innerText = description;
  modal.style.display = 'block';
}

function closePortfolioModal(event) {
  if (event?.target === document.getElementById('portfolioModal') || !event) {
    document.getElementById('portfolioModal').style.display = 'none';
  }
}