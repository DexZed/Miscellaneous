// Function to scale and align items responsively
function scaleAndAlignItems() {
    // Get the viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Select the items you want to scale and align
    const items = document.querySelectorAll('.responsive-item');
    
    items.forEach(item => {
      // Get the initial dimensions and position of the item
      const initialWidth = item.getAttribute('data-initial-width');
      const initialHeight = item.getAttribute('data-initial-height');
      const initialLeft = item.getAttribute('data-initial-left');
      const initialTop = item.getAttribute('data-initial-top');
      
      // Calculate the new dimensions and position based on the viewport size
      const newWidth = initialWidth * (viewportWidth / initialViewportWidth);
      const newHeight = initialHeight * (viewportHeight / initialViewportHeight);
      const newLeft = initialLeft * (viewportWidth / initialViewportWidth);
      const newTop = initialTop * (viewportHeight / initialViewportHeight);
      
      // Apply the new dimensions and position to the item
      item.style.width = `${newWidth}px`;
      item.style.height = `${newHeight}px`;
      item.style.left = `${newLeft}px`;
      item.style.top = `${newTop}px`;
      
      // Adjust other styles as needed for responsiveness
      // For example, font size, padding, margin, etc.
      item.style.fontSize = `${newWidth / 10}px`; // Example of adjusting font size
      item.style.padding = `${newWidth / 20}px`; // Example of adjusting padding
      item.style.margin = `${newHeight / 20}px`; // Example of adjusting margin
    });
  }
  
  // Store the initial viewport dimensions
  const initialViewportWidth = window.innerWidth;
  const initialViewportHeight = window.innerHeight;
  
  // Store the initial dimensions and positions of the items
  document.querySelectorAll('.responsive-item').forEach(item => {
    const rect = item.getBoundingClientRect();
    item.setAttribute('data-initial-width', rect.width);
    item.setAttribute('data-initial-height', rect.height);
    item.setAttribute('data-initial-left', rect.left);
    item.setAttribute('data-initial-top', rect.top);
  });
  
  // Add an event listener for the resize event
  window.addEventListener('resize', scaleAndAlignItems);
  
  // Initial call to scale and align items based on the initial viewport size
  scaleAndAlignItems();
  