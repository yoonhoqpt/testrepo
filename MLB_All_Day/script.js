/* You can add JavaScript for interactivity here */

// Example: Add a simple alert when the CTA button is clicked
const ctaButton = document.querySelector(.cta-button);

if (ctaButton) {
    ctaButton.addEventListener(click, function(event) {
        event.preventDefault(); // Prevent the link from navigating
        alert(Exploring the Marketplace!);
    });
}
