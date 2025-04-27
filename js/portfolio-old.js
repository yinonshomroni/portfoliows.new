// Portfolio Section JavaScript - Copy the entire file
// Wait for the entire page to load completely
window.addEventListener('load', function() {
    initPortfolio();
});

// Initialize the portfolio functionality
function initPortfolio() {
    console.log("Portfolio initialization started");
    
    // Get references to key elements
    const portfolioOverlay = document.getElementById('portfolio-overlay');
    const specialPropsSubmenu = document.getElementById('special-props-submenu');
    const graphicDesignSubmenu = document.getElementById('graphic-design-submenu');
    
    // Make sure submenus are hidden at start
    if (specialPropsSubmenu) specialPropsSubmenu.style.display = 'none';
    if (graphicDesignSubmenu) graphicDesignSubmenu.style.display = 'none';
    
    // Gallery data structure - Replace with your actual content
    const galleryData = {
        // Special Props subcategories
        'pez': { 
            title: 'PEZ',
            description: 'Custom PEZ dispenser manufacturing process',
            items: [
                { type: 'image', src: 'uploads/pez/1.jpg', description: 'Original Actor photographed' },
                { type: 'image', src: 'uploads/pez/2.jpg', description: 'Actor in Character after Hair & Makeup' },
                { type: 'image', src: 'uploads/pez/3.jpg', description: '3D Modelling' },
                { type: 'image', src: 'uploads/pez/4.jpg', description: 'Size tests' },
                { type: 'image', src: 'uploads/pez/5.jpg', description: 'Heads painted' },
                { type: 'image', src: 'uploads/pez/6.jpg', description: 'Ready to Shoot Props' },
                { type: 'video', src: 'uploads/pez/peztest.mp4', description: 'PEZ head 3d print tested on dispenser' }
            ]
        },
        'toy': {
            title: 'TOY',
            description: 'Custom Toy manufacturing process',
            items: [
                { type: 'image', src: 'uploads/toy/ref.jpg', description: 'First thing is to choose a reference Toy to copy' },
                { type: 'image', src: 'uploads/toy/box.jpg', description: 'After brand design we print the new design and apply it to the reference box' },
                { type: 'image', src: 'uploads/toy/toyman.jpg', description: 'We design with director's input the custom toy and manufacture it' },
                { type: 'image', src: 'uploads/toy/toyred.jpg', description: 'Toy is ready to shoot' },
                { type: 'image', src: 'uploads/toy/onset.jpg', description: 'The custom Toy is placed on set' },
                { type: 'video', src: 'uploads/toy/shoot.mp4', description: 'The final shot on set' }
            ]
        },
        // Other categories
        'award': {
            title: 'AWARD',
            description: 'Custom award props created for film and television productions',
            items: [
                { type: 'image', src: 'uploads/placeholder1.jpg', description: 'Award item 1 description' },
                { type: 'image', src: 'uploads/placeholder2.jpg', description: 'Award item 2 description' },
                { type: 'image', src: 'uploads/placeholder3.jpg', description: 'Award item 3 description' }
            ]
        },
        'hook': {
            title: 'HOOK',
            description: 'Custom hook props created for film and television productions',
            items: [
                { type: 'image', src: 'uploads/placeholder1.jpg', description: 'Hook item 1 description' },
                { type: 'image', src: 'uploads/placeholder2.jpg', description: 'Hook item 2 description' },
                { type: 'image', src: 'uploads/placeholder3.jpg', description: 'Hook item 3 description' }
            ]
        },
        'bloody': {
            title: 'BLOODY',
            description: 'Blood and gore effects created for film and television productions',
            items: [
                { type: 'image', src: 'uploads/placeholder1.jpg', description: 'Bloody item 1 description' },
                { type: 'image', src: 'uploads/placeholder2.jpg', description: 'Bloody item 2 description' },
                { type: 'image', src: 'uploads/placeholder3.jpg', description: 'Bloody item 3 description' }
            ]
        },
        'cool-stuff': {
            title: 'COOL STUFF',
            description: 'Unique and interesting props from various productions',
            items: [
                { type: 'image', src: 'uploads/placeholder1.jpg', description: 'Cool Stuff item 1 description' },
                { type: 'image', src: 'uploads/placeholder2.jpg', description: 'Cool Stuff item 2 description' },
                { type: 'image', src: 'uploads/placeholder3.jpg', description: 'Cool Stuff item 3 description' }
            ]
        },
        
        // Graphic Design subcategories
        'newspapers': {
            title: 'NEWSPAPERS',
            description: 'Custom newspaper designs for film and television productions',
            items: [
                { type: 'image', src: 'uploads/placeholder1.jpg', description: 'Newspapers item 1 description' },
                { type: 'image', src: 'uploads/placeholder2.jpg', description: 'Newspapers item 2 description' },
                { type: 'image', src: 'uploads/placeholder3.jpg', description: 'Newspapers item 3 description' }
            ]
        },
        'leaflets': {
            title: 'LEAFLETS',
            description: 'Custom leaflet and flyer designs for productions',
            items: [
                { type: 'image', src: 'uploads/placeholder1.jpg', description: 'Leaflets item 1 description' },
                { type: 'image', src: 'uploads/placeholder2.jpg', description: 'Leaflets item 2 description' },
                { type: 'image', src: 'uploads/placeholder3.jpg', description: 'Leaflets item 3 description' }
            ]
        },
        'concept': {
            title: 'CONCEPT',
            description: 'Concept design work for props and graphics',
            items: [
                { type: 'image', src: 'uploads/placeholder1.jpg', description: 'Concept item 1 description' },
                { type: 'image', src: 'uploads/placeholder2.jpg', description: 'Concept item 2 description' },
                { type: 'image', src: 'uploads/placeholder3.jpg', description: 'Concept item 3 description' }
            ]
        },
        'brands': {
            title: 'BRANDS',
            description: 'Custom brand designs for film and television productions',
            items: [
                { type: 'image', src: 'uploads/placeholder1.jpg', description: 'Brands item 1 description' },
                { type: 'image', src: 'uploads/placeholder2.jpg', description: 'Brands item 2 description' },
                { type: 'image', src: 'uploads/placeholder3.jpg', description: 'Brands item 3 description' }
            ]
        },
        
        // Main categories
        'food': {
            title: 'FOOD',
            description: 'Food styling and food props for film and television productions',
            items: [
                { type: 'image', src: 'uploads/placeholder1.jpg', description: 'Food item 1 description' },
                { type: 'image', src: 'uploads/placeholder2.jpg', description: 'Food item 2 description' },
                { type: 'image', src: 'uploads/placeholder3.jpg', description: 'Food item 3 description' }
            ]
        },
        'sets': {
            title: 'SETS',
            description: 'Set design and prop placement for productions',
            items: [
                { type: 'image', src: 'uploads/placeholder1.jpg', description: 'Sets item 1 description' },
                { type: 'image', src: 'uploads/placeholder2.jpg', description: 'Sets item 2 description' },
                { type: 'image', src: 'uploads/placeholder3.jpg', description: 'Sets item 3 description' }
            ]
        },
        'weapons': {
            title: 'WEAPONS',
            description: 'Weapon props and effects for film and television',
            items: [
                { type: 'image', src: 'uploads/placeholder1.jpg', description: 'Weapons item 1 description' },
                { type: 'image', src: 'uploads/placeholder2.jpg', description: 'Weapons item 2 description' },
                { type: 'image', src: 'uploads/placeholder3.jpg', description: 'Weapons item 3 description' }
            ]
        },
        'behind-scenes': {
            title: 'BEHIND THE SCENES',
            description: 'Behind the scenes looks at the prop department in action',
            items: [
                { type: 'image', src: 'uploads/placeholder1.jpg', description: 'Behind the scenes item 1 description' },
                { type: 'image', src: 'uploads/placeholder2.jpg', description: 'Behind the scenes item 2 description' },
                { type: 'image', src: 'uploads/placeholder3.jpg', description: 'Behind the scenes item 3 description' }
            ]
        }
    };
    
    // Variables for gallery navigation
    let currentGalleryItems = [];
    let currentItemIndex = 0;
    
    // Set up main category buttons
    setupMainButtons();
    
    // Set up submenu buttons
    setupSubmenuButtons();
    
    // Set up click-outside-to-close for portfolio overlay
    setupOverlayClosing();
    
    // Set up keyboard navigation
    setupKeyboardNavigation();
    
    // Function to set up main category buttons
    function setupMainButtons() {
        const mainButtons = document.querySelectorAll('.filter-button-group button');
        if (!mainButtons.length) {
            console.error("Main category buttons not found");
            return;
        }
        
        mainButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const category = this.getAttribute('data-category');
                
                // Remove active class from all buttons
                mainButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Hide all submenus
                if (specialPropsSubmenu) specialPropsSubmenu.style.display = 'none';
                if (graphicDesignSubmenu) graphicDesignSubmenu.style.display = 'none';
                
                // Show appropriate submenu or open gallery
                if (category === 'special-props') {
                    if (specialPropsSubmenu) specialPropsSubmenu.style.display = 'block';
                } else if (category === 'graphic-design') {
                    if (graphicDesignSubmenu) graphicDesignSubmenu.style.display = 'block';
                } else {
                    openGallery(category);
                }
            });
        });
    }
    
    // Function to set up submenu buttons
    function setupSubmenuButtons() {
        const submenuButtons = document.querySelectorAll('.submenu button');
        if (!submenuButtons.length) {
            console.error("Submenu buttons not found");
            return;
        }
        
        submenuButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const subcategory = this.getAttribute('data-subcategory');
                
                // Remove active class from sibling buttons
                const siblings = this.closest('.submenu').querySelectorAll('button');
                siblings.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Open gallery for the subcategory
                openGallery(subcategory);
            });
        });
    }
    
    // Function to set up overlay closing
    function setupOverlayClosing() {
        if (!portfolioOverlay) {
            console.error("Portfolio overlay element not found");
            return;
        }
        
        // Close when clicking outside content
        portfolioOverlay.addEventListener('click', function(e) {
            if (e.target === portfolioOverlay) {
                closeGallery();
            }
        });
    }
    
    // Function to set up keyboard navigation
    function setupKeyboardNavigation() {
        document.addEventListener('keydown', function(e) {
            if (portfolioOverlay && portfolioOverlay.style.display === 'block') {
                if (e.key === 'ArrowLeft') {
                    navigateGallery(-1);
                } else if (e.key === 'ArrowRight') {
                    navigateGallery(1);
                } else if (e.key === 'Escape') {
                    closeGallery();
                }
            }
        });
    }
    
    // Function to open gallery for a specific category
    function openGallery(category) {
        if (!portfolioOverlay) {
            console.error("Portfolio overlay element not found");
            return;
        }
        
        // Get data for the category
        const data = galleryData[category];
        if (!data) {
            console.error("No data found for category:", category);
            return;
        }
        
        // Build gallery HTML
        let overlayHTML = `
            <div class="overlay-content">
                <div class="overlay-header">
                    <h2 id="overlay-title">${data.title}</h2>
                    <span class="close-overlay">&times;</span>
                </div>
                <div class="overlay-description">
                    <p id="overlay-text">${data.description}</p>
                </div>
                <div class="gallery-container">
                    <div class="gallery-navigation">
                        <div class="nav-arrow prev">&lt;</div>
                        <div class="gallery-items">
        `;
        
        // Build items HTML
        if (data.items && data.items.length > 0) {
            data.items.forEach((item, index) => {
                overlayHTML += `<div class="gallery-item ${index === 0 ? 'active' : ''}">`;
                overlayHTML += `<div class="item-media">`;
                
                if (item.type === 'image') {
                    overlayHTML += `<img src="${item.src}" alt="Item ${index + 1}">`;
                } else if (item.type === 'video') {
                    overlayHTML += `<video src="${item.src}" controls style="max-width: 300px;"></video>`;
                }
                
                overlayHTML += `</div>`;
                overlayHTML += `<div class="item-description"><p>${item.description}</p></div>`;
                overlayHTML += `</div>`;
            });
        } else {
            // Placeholder if no items
            overlayHTML += `
                <div class="gallery-item active">
                    <div class="item-media">
                        <img src="uploads/placeholder1.jpg" alt="Placeholder">
                    </div>
                    <div class="item-description"><p>Content coming soon...</p></div>
                </div>
            `;
        }
        
        // Close the HTML structure
        overlayHTML += `
                        </div>
                        <div class="nav-arrow next">&gt;</div>
                    </div>
                </div>
            </div>
        `;
        
        // Update overlay content
        portfolioOverlay.innerHTML = overlayHTML;
        
        // Store current gallery items for navigation
        currentGalleryItems = data.items || [];
        currentItemIndex = 0;
        
        // Show the overlay
        portfolioOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        
        // Set up close button
        const closeButton = portfolioOverlay.querySelector('.close-overlay');
        if (closeButton) {
            closeButton.addEventListener('click', closeGallery);
        }
        
        // Set up navigation arrows
        const prevArrow = portfolioOverlay.querySelector('.nav-arrow.prev');
        if (prevArrow) {
            prevArrow.addEventListener('click', function() {
                navigateGallery(-1);
            });
        }
        
        const nextArrow = portfolioOverlay.querySelector('.nav-arrow.next');
        if (nextArrow) {
            nextArrow.addEventListener('click', function() {
                navigateGallery(1);
            });
        }
    }
    
    // Function to close the gallery
    function closeGallery() {
        if (portfolioOverlay) {
            portfolioOverlay.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    }
    
    // Function to navigate through gallery items
    function navigateGallery(direction) {
        if (!currentGalleryItems || currentGalleryItems.length <= 1) return;
        
        const galleryItems = document.querySelectorAll('.gallery-item');
        if (!galleryItems.length) return;
        
        // Hide current item
        galleryItems[currentItemIndex].classList.remove('active');
        
        // Calculate new index with wraparound
        currentItemIndex = (currentItemIndex + direction + currentGalleryItems.length) % currentGalleryItems.length;
        
        // Show new item
        galleryItems[currentItemIndex].classList.add('active');
    }
    
    console.log("Portfolio initialization complete");
}
