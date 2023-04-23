$(document).ready(function () {
  function showSection(sectionId) {
    // Hide all sections
    $("main section").hide();

    // Show the section with the specified ID
    $(`#${sectionId}`).show();

    // Remove the "active" class from all navigation links
    $("nav a").removeClass("active");

    // Add the "active" class to the clicked navigation link
    $(`nav a[href='#${sectionId}']`).addClass("active");
  }

  // Set the pricing section to be visible by default
  showSection("pricing");

  // Add click event listeners to navigation links
  $("nav a").on("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    const sectionId = $(this).attr("href").substring(1); // Get the section ID from the href attribute
    showSection(sectionId);
  });
});

}

// Set the pricing section to be visible by default
const pricingSection = document.querySelector("#pricing");
pricingSection.style.display = "block";

// Add an "active" class to the "Pricing" navigation link by default
const pricingLink = document.querySelector(`nav a[href="#pricing"]`);
pricingLink.classList.add("active");

