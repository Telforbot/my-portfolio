// Create the button element
const backToTopButton = document.createElement('button');
backToTopButton.id = 'backToTop';
backToTopButton.textContent = '↑ Back to Top';
document.body.appendChild(backToTopButton);

// Add styles for the button
const style = document.createElement('style');
style.textContent = `
  #backToTop {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    font-size: 16px;
    background: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: none;
    z-index: 1000;
    transition: opacity 0.3s ease;
  }
  #backToTop:hover {
    background: #f4a261;
  }
`;
document.head.appendChild(style);

// Show/hide the button on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Scroll to top when the button is clicked
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
