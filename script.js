// Dropdown functionality on click
document.querySelectorAll('.dropdown-icon, .nav-item').forEach(function(icon) {
    icon.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click from immediately propagating to document
        const dropdown = this.closest('.dropdown');
        const content = dropdown.querySelector('.dropdown-content');
        const iconDown = this.querySelector('.fa-angle-down');

        // Toggle current dropdown
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            iconDown.classList.add('rotate-icon');
        } else {
            content.style.display = 'none';
            iconDown.classList.remove('rotate-icon');
        }

        // Close other dropdowns and reset their icons
        document.querySelectorAll('.dropdown').forEach(function(otherDropdown) {
            if (otherDropdown !== dropdown) {
                otherDropdown.querySelector('.dropdown-content').style.display = 'none';
                otherDropdown.querySelector('.fa-angle-down').classList.remove('rotate-icon');
            }
        });
    });
});

// Dropdown functionality on click (Event listener for clicking anywhere on the page)
document.addEventListener('click', function() {
    document.querySelectorAll('.dropdown-content').forEach(function(content) {
        if (content.style.display === 'block') {
            content.style.display = 'none';
            const iconDown = content.closest('.dropdown').querySelector('.fa-angle-down');
            iconDown.classList.remove('rotate-icon');
        }
    });
});

// user-image navbar hover a window appear showing Shahid Vohra functionality 
document.querySelectorAll('.user-image .image-wrapper').forEach(wrapper => {
    wrapper.addEventListener('mouseenter', () => {
      const info = wrapper.querySelector('.hover-info');
      info.style.opacity = 0;
      info.style.display = 'block';
      setTimeout(() => {
        info.style.opacity = 1;
      }, 10); // Delay to allow CSS transition
    });
  
    wrapper.addEventListener('mouseleave', () => {
      const info = wrapper.querySelector('.hover-info');
      info.style.opacity = 0;
      setTimeout(() => {
        info.style.display = 'none';
      }, 300); // Match the duration of the fade effect
    });
  });

//   dropdown active order btn on click functionality

document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.querySelector('.dropdown-btn');
    const rotateIcon = dropdownButton.querySelector('.rotate-icon');
    const dropdownContent = dropdownButton.nextElementSibling;

    dropdownButton.addEventListener('click', function(event) {
        // Toggle the dropdown visibility
        dropdownContent.style.display = dropdownContent.style.display === 'flex' ? 'none' : 'flex';
        
        // Rotate the icon
        rotateIcon.classList.toggle('rotated');

        // Stop propagation to document
        event.stopPropagation();
    });

    document.addEventListener('click', function(event) {
        // Check if the click is outside the dropdown
        if (!dropdownButton.contains(event.target)) {
            dropdownContent.style.display = 'none';
            rotateIcon.classList.remove('rotated');
        }
    });
});


