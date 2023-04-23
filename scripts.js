function showSection(sectionId) {
  // Get all of the sections
  const sections = document.querySelectorAll("main section");

  // Loop through each section
  sections.forEach((section) => {
    // If the section id matches the clicked id, show it
    if (section.id === sectionId) {
      section.style.display = "block";
    }
    // Otherwise, hide it
    else {
      section.style.display = "none";
    }
  });

  // Remove the "active" class from all navigation links
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Add the "active" class to the clicked navigation link
  const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
  activeLink.classList.add("active");
}

// Set the home section to be visible by default
const homeSection = document.querySelector("#home");
homeSection.style.display = "block";

// Add an "active" class to the "Home" navigation link by default
const homeLink = document.querySelector(`nav a[href="#home"]`);
homeLink.classList.add("active");
