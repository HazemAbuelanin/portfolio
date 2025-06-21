import { useEffect } from 'react';

const AutoScroll = () => {
  useEffect(() => {
    let isAutoScrolling = false;
    let scrollInterval: number | null = null;
    let lastMouseY = 0;

    const handleMouseDown = (e: MouseEvent) => {
      // Middle mouse button (button 1)
      if (e.button === 1) {
        e.preventDefault();
        isAutoScrolling = true;
        lastMouseY = e.clientY;
        
        // Change cursor to indicate auto-scroll mode
        document.body.style.cursor = 'grab';
        document.body.style.userSelect = 'none';
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (e.button === 1) {
        e.preventDefault();
        isAutoScrolling = false;
        
        // Reset cursor
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
        
        // Clear any ongoing scroll interval
        if (scrollInterval) {
          clearInterval(scrollInterval);
          scrollInterval = null;
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isAutoScrolling) {
        const deltaY = e.clientY - lastMouseY;
        const scrollSpeed = deltaY * 0.5; // Adjust sensitivity here
        
        // Clear previous interval
        if (scrollInterval) {
          clearInterval(scrollInterval);
        }
        
        // Start new scroll interval
        scrollInterval = window.setInterval(() => {
          window.scrollBy(0, scrollSpeed);
        }, 16); // ~60fps
        
        lastMouseY = e.clientY;
      }
    };

    const handleMouseLeave = () => {
      if (isAutoScrolling) {
        isAutoScrolling = false;
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
        
        if (scrollInterval) {
          clearInterval(scrollInterval);
          scrollInterval = null;
        }
      }
    };

    // Add event listeners
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Prevent default middle mouse button behavior
    document.addEventListener('auxclick', (e) => {
      if (e.button === 1) {
        e.preventDefault();
      }
    });

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('auxclick', handleMouseDown);
      
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
      
      // Reset styles
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AutoScroll; 