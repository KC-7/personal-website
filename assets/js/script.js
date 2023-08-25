document.addEventListener("DOMContentLoaded", function() {
    
    // Burger Menu for Navbar
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");
    
    navbarToggler.addEventListener("click", function(e) {
        // Preventing the default Bootstrap behavior (if any)
        e.stopPropagation();
        navbarCollapse.classList.toggle("show");
    });

    // Function to handle the custom click on horizontal navigation dots
    function handleHorizontalNavClick(event) {
        var clickedPosition = event.clientX;
        var navWidth = event.currentTarget.offsetWidth;
        var totalSlides = event.currentTarget.querySelectorAll('span').length;
        var slideToGo = Math.ceil((clickedPosition / navWidth) * totalSlides);
        
        // Assuming this is for the "About Me" section which is the 2nd section in your structure
        // Modify this if the order changes
        fullpage_api.moveTo(2, slideToGo);
    }

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
        },
        afterRender: function() {
            // This function gets called once FullPage.js has been initialized and rendered.

            // Add an ID to the horizontal navigation for targeting purposes.
            var horizontalNavs = document.querySelectorAll('.fp-slidesNav');
            horizontalNavs.forEach(function(nav, index) {
                nav.id = 'horizontalNav' + (index + 1);

                // Attach the click event to the horizontal navigation
                nav.addEventListener('click', handleHorizontalNavClick);
            });
        }
    });
});
