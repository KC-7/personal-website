document.addEventListener("DOMContentLoaded", function() {
    // Burger Menu for Navbar
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");
    
    navbarToggler.addEventListener("click", function() {
        navbarCollapse.classList.toggle("show");
    });

    // Initialize fullpage.js
    new fullpage('#fullpage', {
        autoScrolling: true,
        afterLoad: function (origin, destination, direction) {
            // Get the ID of the destination section
            var sectionId = destination.item.id;

            // Remove 'active' class from all navigation links
            var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
            navLinks.forEach(function (link) {
                link.classList.remove('active');
            });

            // Add 'active' class to the corresponding navigation link
            var activeNavLink = document.querySelector('.navbar-nav .nav-link[href="#' + sectionId + '"]');
            if (activeNavLink) {
                activeNavLink.classList.add('active');
            }
        }
    });
});

