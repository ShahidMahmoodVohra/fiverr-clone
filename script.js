// Dropdown functionality on click
document.querySelectorAll(".dropdown-icon, .nav-item").forEach(function (icon) {
  icon.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent click from immediately propagating to document
    const dropdown = this.closest(".dropdown");
    const content = dropdown.querySelector(".dropdown-content");
    const iconDown = this.querySelector(".fa-angle-down");

    // Toggle current dropdown
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
      iconDown.classList.add("rotate-icon");
    } else {
      content.style.display = "none";
      iconDown.classList.remove("rotate-icon");
    }

    // Close other dropdowns and reset their icons
    document.querySelectorAll(".dropdown").forEach(function (otherDropdown) {
      if (otherDropdown !== dropdown) {
        otherDropdown.querySelector(".dropdown-content").style.display = "none";
        otherDropdown
          .querySelector(".fa-angle-down")
          .classList.remove("rotate-icon");
      }
    });
  });
});

// Dropdown functionality on click (Event listener for clicking anywhere on the page)
document.addEventListener("click", function () {
  document.querySelectorAll(".dropdown-content").forEach(function (content) {
    if (content.style.display === "block") {
      content.style.display = "none";
      const iconDown = content
        .closest(".dropdown")
        .querySelector(".fa-angle-down");
      iconDown.classList.remove("rotate-icon");
    }
  });
});

// user-image navbar hover a window appear showing Shahid Vohra functionality
document.querySelectorAll(".user-image .image-wrapper").forEach((wrapper) => {
  wrapper.addEventListener("mouseenter", () => {
    const info = wrapper.querySelector(".hover-info");
    info.style.opacity = 0;
    info.style.display = "block";
    setTimeout(() => {
      info.style.opacity = 1;
    }, 10); // Delay to allow CSS transition
  });

  wrapper.addEventListener("mouseleave", () => {
    const info = wrapper.querySelector(".hover-info");
    info.style.opacity = 0;
    setTimeout(() => {
      info.style.display = "none";
    }, 300); // Match the duration of the fade effect
  });
});

//   dropdown active order btn on click functionality

document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.querySelector(".dropdown-btn");
  const rotateIcon = dropdownButton.querySelector(".rotate-icon");
  const dropdownContent = dropdownButton.nextElementSibling;

  dropdownButton.addEventListener("click", function (event) {
    // Toggle the dropdown visibility
    dropdownContent.style.display =
      dropdownContent.style.display === "flex" ? "none" : "flex";

    // Rotate the icon
    rotateIcon.classList.toggle("rotated");

    // Stop propagation to document
    event.stopPropagation();
  });

  document.addEventListener("click", function (event) {
    // Check if the click is outside the dropdown
    if (!dropdownButton.contains(event.target)) {
      dropdownContent.style.display = "none";
      rotateIcon.classList.remove("rotated");
    }
  });
});

// banner carousel slider functionality

document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const slides = document.querySelector(".slides");
  const slideCount = document.querySelectorAll(".slide").length;

  setInterval(() => {
    if (currentIndex < slideCount - 1) {
      // Move to the next slide
      currentIndex++;
      slides.style.transition = "transform 0.5s ease";
      slides.style.transform = `translateX(-${
        (currentIndex * 100) / slideCount
      }%)`;
    } else {
      // Jump back to the first slide without animation
      slides.style.transition = "none"; // Disable transition for instant jump
      slides.style.transform = "translateX(0%)";
      setTimeout(() => {
        // Restart the sliding from the first to the second slide with animation
        currentIndex = 1;
        slides.style.transition = "transform 0.5s ease"; // Re-enable transition
        slides.style.transform = `translateX(-${
          (currentIndex * 100) / slideCount
        }%)`;
      }, 50); // Short delay before sliding to the next slide
    }
  }, 4000); // Change slide every 4000 milliseconds (4 seconds)
});

// logo bottom to top functionality
document.addEventListener("scroll", function () {
  var scrollPercentage =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  var logo = document.getElementById("logo-container");
  if (scrollPercentage > 99) {
    logo.style.opacity = 0;
  } else {
    logo.style.opacity = 1;
  }
});

// 6/9/2024
document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".modal").style.display = "block";
});

document.querySelector(".modal").addEventListener("click", function (event) {
  if (event.target === this) {
    this.style.display = "none";
  }
});

document.querySelectorAll(".dropdown-modal").forEach(function (dropdown) {
  dropdown.addEventListener("click", function () {
    this.querySelector(".dropdown-content-modal").style.display = "block";
  });
});

// Dropdown-modal  functionality
document.querySelectorAll(".dropdown-modal").forEach(function (dropdown) {
  dropdown.addEventListener("click", function () {
    let content = this.nextElementSibling;
    let icon = this.querySelector(".dropdown-icon-modal i");

    // Toggle display of the dropdown content
    if (content.style.display === "block") {
      content.style.display = "none";
      icon.classList.remove("active");
    } else {
      // Close all other dropdowns
      document
        .querySelectorAll(".dropdown-content-modal")
        .forEach(function (otherContent) {
          otherContent.style.display = "none";
        });
      document
        .querySelectorAll(".dropdown-icon-modal i")
        .forEach(function (otherIcon) {
          otherIcon.classList.remove("active");
        });

      content.style.display = "block";
      icon.classList.add("active");

      // Scroll to the dropdown
      content.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });
});

// Ensure the CSS for .dropdown-content-modal includes overflow-y: scroll to keep the scrollbar visible
document
  .querySelectorAll(".dropdown-content-modal")
  .forEach(function (content) {
    content.style.overflowY = "scroll"; // This will ensure the scrollbar is always visible
  });
