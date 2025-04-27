// Updated Portfolio Section JavaScript - Simplified Version (Skip Thumbnails)
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded - initializing simplified portfolio");
    initPortfolio();
});

// Portfolio Gallery Data Structure
// This will store all of your gallery items
const portfolioGalleryData = {
    // Special Props categories
    'pez': [
        {
            type: 'image',
            src: 'images/portfolio/pez/1.jpg',
            title: 'PEZ Creation',
            description: 'Actor Photographed'
        },
        {
            type: 'image',
            src: 'images/portfolio/pez/2.jpg',
            title: 'PEZ Creation',
            description: 'Actor after Hair & Makeup'
        },
        {
            type: 'image',
            src: 'images/portfolio/pez/3.jpg',
            title: 'PEZ Creation',
            description: '3D Modeling Process'
        },
        {
            type: 'image',
            src: 'images/portfolio/pez/4.jpg',
            title: 'PEZ Creation',
            description: 'Size tests after 3D print'
        },
        {
            type: 'image',
            src: 'images/portfolio/pez/5.jpg',
            title: 'PEZ Creation',
            description: '3D Prints after paint job'
        },
        {
            type: 'image',
            src: 'images/portfolio/pez/6.jpg',
            title: 'PEZ Creation',
            description: 'Final Props Ready for Shoot'
        }
    ],
    'toy': [
        {
            type: 'image',
            src: 'images/portfolio/toy/ref.jpg',
            title: 'Custom Toy Creation',
            description: 'Reference Selection'
        },
        {
            type: 'image',
            src: 'images/portfolio/toy/toyman.jpg',
            title: 'Custom Toy Creation',
            description: 'Custom doll manufacturing'
        },
        {
            type: 'image',
            src: 'images/portfolio/toy/toyred.jpg',
            title: 'Custom Toy Creation',
            description: 'Check box for size'
        },
        {
            type: 'image',
            src: 'images/portfolio/toy/box.jpg',
            title: 'Custom Toy Creation',
            description: 'Apply new brand graphics onto Box'
        },
        {
            type: 'image',
            src: 'images/portfolio/toy/onset.jpg',
            title: 'Custom Toy Creation',
            description: 'Final Product placed on Set ready to shoot'
        },
        {
            type: 'video',
            src: 'videos/portfolio/toyvid.mp4',
            thumbnail: 'images/portfolio/toy/play.jpg',
            title: 'Custom Toy Creation',
            description: 'Final Product in action'
        }
    ],
    // Other categories
    'award': [
        {
            type: 'image',
            src: 'images/portfolio/award/sktc.jpg',
            title: 'Custom Award Creation',
            description: 'Reference sketch'
        },
        {
            type: 'image',
            src: 'images/portfolio/award/job.jpg',
            title: 'Custom Award Creation',
            description: 'Manufactured by perspex professional'
        },
        {
            type: 'image',
            src: 'images/portfolio/award/add.jpg',
            title: 'Custom Award Creation',
            description: 'Add bells and plates'
        },
        {
            type: 'image',
            src: 'images/portfolio/award/onset.jpg',
            title: 'Custom Award Creation',
            description: 'The awards placed on the prop cart ready to shoot'
        },
        {
            type: 'video',
            src: 'videos/portfolio/awardvid.mp4',
            thumbnail: 'images/portfolio/toy/play.jpg',
            title: 'Custom Award',
            description: 'Final Product in action'
        }

        // Add more items as needed
    ],
    'hook': [
        {
            type: 'image',
            src: 'images/portfolio/hook/ref.jpg',
            title: 'Custom Pirate Hook Creation',
            description: 'Reference Selection'
        },
		{
            type: 'image',
            src: 'images/portfolio/hook/3d.jpg',
            title: 'Custom Pirate Hook Creation',
            description: '3D Modelling'
        },
		{
            type: 'image',
            src: 'images/portfolio/hook/paint.jpg',
            title: 'Custom Pirate Hook Creation',
            description: ' Assemble and Spray paint the 3D model'
        },
		{
            type: 'image',
            src: 'images/portfolio/hook/fnsh.jpg',
            title: 'Custom Pirate Hook Creation',
            description: 'We added a custom leather sleeve'
        },
		{
            type: 'image',
            src: 'images/portfolio/hook/onset.jpg',
            title: 'Custom Pirate Hook Creation',
            description: 'The finished prop worn by the actor on set'
        },
        // Add more items as needed
    ],
    'bloody': [
        {
            type: 'image',
            src: 'images/portfolio/bloody/bar.jpg',
            title: 'Bloody',
            description: 'Prop assistant working on a bloody scenes'
        },
		{
            type: 'image',
            src: 'images/portfolio/bloody/gut.jpg',
            title: 'Bloody',
            description: 'Contraband Cocaine bricks inside fake Cow Guts'
        },
		 {
            type: 'video',
            src: 'videos/portfolio/gutvid.mp4',
            thumbnail: 'images/portfolio/toy/play.jpg',
            title: 'Final shot:',
            description: 'The actor extracts the cocaine from inside the prop cow Guts'
        }

        // Add more items as needed
    ],
    'cool-stuff': [
        {
            type: 'image',
            src: 'images/portfolio/special/helmets.jpg',
            title: 'Special Props',
            description: 'Custom helmets for BROS (NETFLIX)'
        },
		 {
            type: 'video',
            src: 'videos/portfolio/dry.mp4',
            thumbnail: 'images/portfolio/toy/play.jpg',
            title: 'Magic Potion',
            description: 'Dry Ice SFX for magic potion making scene'
        },
		{
            type: 'video',
            src: 'videos/portfolio/neck.mp4',
            thumbnail: 'images/portfolio/toy/play.jpg',
            title: 'Necklace',
            description: 'Special necklace crafted for Yekomot comedy bit'
        },
		{
            type: 'video',
            src: 'videos/portfolio/wiper.mp4',
            thumbnail: 'images/portfolio/toy/play.jpg',
            title: 'Memory Wiper',
            description: 'functioning prop camera test before shoot'
        }

        // Add more items as needed
    ],
    'newspapers': [
        {
            type: 'image',
            src: 'images/portfolio/graphic/news1.jpg',
            title: 'Newspaper Design',
            description: 'Custom newspaper for period drama'
        },
		{
            type: 'image',
            src: 'images/portfolio/graphic/news2.jpg',
            title: 'Newspaper Design',
            description: 'Custom newspaper for period drama'
        },
		{
            type: 'image',
            src: 'images/portfolio/graphic/aids.jpg',
            title: 'Newspaper Design',
            description: 'Custom newspaper for period drama'
        },
		{
            type: 'image',
            src: 'images/portfolio/graphic/magcover.jpg',
            title: 'Newspaper Design',
            description: 'Custom magazine covers for period drama'
        }
		
    ],
    'leaflets': [
        {
            type: 'image',
            src: 'images/portfolio/graphic/leaf1.jpg',
            title: 'Botany convention Leaflet Design',
            description: 'leaflet prop from Kramel Season 4'
        },
		{
            type: 'image',
            src: 'images/portfolio/graphic/kr1.jpg',
            title: 'Botany convention Leaflet Design',
            description: 'Botany leaflet prop insert shot'
        },
		{
            type: 'image',
            src: 'images/portfolio/graphic/leaf2.jpg',
            title: 'Theatre program leaflet design',
            description: 'Custom theatre program for Hazarot (חזרות)'
        },
		{
            type: 'image',
            src: 'images/portfolio/graphic/leaf3.jpg',
            title: 'Boutique Hotel leaflet design',
            description: 'Italian hotel leaflet for Yekumot'
        }
    ],
    'concept': [
        {
            type: 'image',
            src: 'images/portfolio/graphic/conc1.jpg',
            title: 'Concept Design',
            description: 'Dressing concept artwork'
        },
		{
            type: 'image',
            src: 'images/portfolio/graphic/map.jpg',
            title: 'Concept Design',
            description: 'Magic Map concept design'
        },
		{
            type: 'image',
            src: 'images/portfolio/graphic/conc2.jpg',
            title: 'Concept Design',
            description: 'Dressing concept artwork'
        },
		{
            type: 'image',
            src: 'images/portfolio/graphic/conc3.jpg',
            title: 'Concept Design',
            description: 'Dressing concept artwork'
        },
		{
            type: 'image',
            src: 'images/portfolio/graphic/lavender.jpg',
            title: 'Concept Design',
            description: 'Dressing concept artwork'
        }
    ],
    'brands': [
        {
            type: 'image',
            src: 'images/portfolio/graphic/milk.jpg',
            title: 'Brand Design',
            description: 'Custom milk brand creation'
        },
		{
            type: 'image',
            src: 'images/portfolio/graphic/parf.jpg',
            title: 'Brand Design',
            description: 'Custom parfume brand creation'
        }
    ],
    'food': [
        {
            type: 'image',
            src: 'images/portfolio/food/f1.jpg',
            title: 'Food Styling',
            description: 'Professional food styling for film'
        },
		 {
            type: 'image',
            src: 'images/portfolio/food/f2.jpg',
            title: 'Food Styling',
            description: 'Fake unmelting Ice cream'
        },
		 {
            type: 'image',
            src: 'images/portfolio/food/f3.jpg',
            title: 'Food Styling',
            description: 'Professional food styling for film'
        },
		 {
            type: 'image',
            src: 'images/portfolio/food/f4.jpg',
            title: 'Food Styling',
            description: 'Professional food styling for film'
        },
		 {
            type: 'image',
            src: 'images/portfolio/food/f5.jpg',
            title: 'Food Styling',
            description: 'Professional food styling for film'
        },
		 {
            type: 'image',
            src: 'images/portfolio/food/f6.jpg',
            title: 'Food Styling',
            description: 'Professional food styling for film'
        },
		 {
            type: 'image',
            src: 'images/portfolio/food/f7.jpg',
            title: 'Food Styling',
            description: 'Professional food styling for film'
        },
		 {
            type: 'image',
            src: 'images/portfolio/food/f8.jpg',
            title: 'Food Styling',
            description: 'Professional food styling for film'
        }
    ],
    'sets': [
        {
            type: 'image',
            src: 'images/portfolio/sets/s1.jpg',
            title: 'Set Design',
            description: 'Prop arrangement on set'
        },
		{
            type: 'image',
            src: 'images/portfolio/sets/s2.jpg',
            title: 'Set Design',
            description: 'Prop arrangement on set'
        },
		{
            type: 'image',
            src: 'images/portfolio/sets/s3.jpg',
            title: 'Set Design',
            description: 'Prop arrangement on set'
        },
		{
            type: 'image',
            src: 'images/portfolio/sets/s4.jpg',
            title: 'Set Design',
            description: 'Prop arrangement on set'
        },
		{
            type: 'image',
            src: 'images/portfolio/sets/s5.jpg',
            title: 'Set Design',
            description: 'Prop arrangement on set'
        },
		{
            type: 'image',
            src: 'images/portfolio/sets/s6.jpg',
            title: 'Set Design',
            description: 'Prop arrangement on set'
        },
		{
            type: 'image',
            src: 'images/portfolio/sets/s7.jpg',
            title: 'Set Design',
            description: 'Prop arrangement on set'
        },
		{
            type: 'image',
            src: 'images/portfolio/sets/s8.jpg',
            title: 'Set Design',
            description: 'Prop arrangement on set'
        },
		{
            type: 'image',
            src: 'images/portfolio/sets/s9.jpg',
            title: 'Set Design',
            description: 'Prop arrangement on set'
        },
		{
            type: 'video',
            src: 'videos/portfolio/path.mp4',
            thumbnail: 'images/portfolio/toy/play.jpg',
            title: 'Pathway prop arrangement',
            description: ''
        },
		{
            type: 'video',
            src: 'videos/portfolio/dress.mp4',
            thumbnail: 'images/portfolio/toy/play.jpg',
            title: 'Dressin Room',
            description: 'Dressin Room prop arrangement'
        }
		
    ],
    'weapons': [
        {
            type: 'image',
            src: 'images/portfolio/weapons/w1.jpg',
            title: 'Prop Weapons',
            description: 'Gangster gun prop'
        },
		{
            type: 'image',
            src: 'images/portfolio/weapons/w2.jpg',
            title: 'Prop Weapons',
            description: 'Stunt soldier head to toe'
        },
		{
            type: 'image',
            src: 'images/portfolio/weapons/w3.jpg',
            title: 'Prop Weapons',
            description: 'Glock17 in safe'
        },
		{
            type: 'image',
            src: 'images/portfolio/weapons/w4.jpg',
            title: 'Prop Weapons',
            description: 'Custom Gangster Gun'
        },
		{
            type: 'image',
            src: 'images/portfolio/weapons/cupid.jpg',
            title: 'Prop Weapons',
            description: 'Cupid Bow and Arrows'
        }
    ],
    'behind-scenes': [
        {
            type: 'image',
            src: 'images/portfolio/behind/b1.jpg',
            title: 'Behind the Scenes',
            description: 'Prop team working on set'
        },
		{
            type: 'image',
            src: 'images/portfolio/behind/b2.jpg',
            title: 'Behind the Scenes',
            description: 'Working on set'
        },
		{
            type: 'image',
            src: 'images/portfolio/behind/b3.jpg',
            title: 'Behind the Scenes',
            description: 'Working on set'
        },
		{
            type: 'image',
            src: 'images/portfolio/behind/b4.jpg',
            title: 'Behind the Scenes',
            description: 'Working on set'
        },
		{
            type: 'image',
            src: 'images/portfolio/behind/b5.jpg',
            title: 'Behind the Scenes',
            description: 'Working on set'
        },
		{
            type: 'image',
            src: 'images/portfolio/behind/b6.jpg',
            title: 'Behind the Scenes',
            description: 'Working on set'
        },
		{
            type: 'image',
            src: 'images/portfolio/behind/b7.jpg',
            title: 'Behind the Scenes',
            description: 'Working on set'
        },
		{
            type: 'image',
            src: 'images/portfolio/behind/b1.jpg',
            title: 'Behind the Scenes',
            description: 'Working on set'
        }
    ]
};

// Global variables for the gallery state
let currentCategory = 'pez'; // Default category to show
let currentItems = []; // Current items being displayed
let currentItemIndex = 0; // Current item in fullsize view
let touchStartX = 0; // For swipe detection

// Initialize the portfolio functionality
function initPortfolio() {
    console.log("Portfolio initialization started");
    
    // Set up main category filtering
    const categoryButtons = document.querySelectorAll('#portfolio .filter-button-group button');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            console.log("Main category selected:", category);
            
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all submenus
            document.querySelectorAll('.submenu-container').forEach(submenu => {
                submenu.style.display = 'none';
            });
            
            // Show appropriate submenu if available
            const submenu = document.getElementById(`${category}-submenu`);
            if (submenu) {
                submenu.style.display = 'block';
                
                // Select first subcategory by default
                const firstSubButton = submenu.querySelector('.submenu button');
                if (firstSubButton) {
                    firstSubButton.click();
                }
            } else {
                // If no submenu, show first item from this category directly
                showFullsizeGallery(category);
            }
        });
    });
    
    // Set up submenu filtering
    const submenuButtons = document.querySelectorAll('#portfolio .submenu button');
    submenuButtons.forEach(button => {
        button.addEventListener('click', function() {
            const subcategory = this.getAttribute('data-subcategory');
            console.log("Subcategory selected:", subcategory);
            
            // Remove active class from siblings
            const siblings = Array.from(this.parentNode.children);
            siblings.forEach(sib => sib.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show fullsize gallery for this subcategory
            showFullsizeGallery(subcategory);
        });
    });
    
    // Add click handlers to preview items
    const previewItems = document.querySelectorAll('.portfolio-item-preview');
    previewItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Find and click the corresponding category button
            const categoryButton = document.querySelector(`.filter-button-group button[data-category="${category}"]`);
            if (categoryButton) {
                categoryButton.click();
            } else {
                // If category button not found, try submenu button
                const submenuButton = document.querySelector(`.submenu button[data-subcategory="${category}"]`);
                if (submenuButton) {
                    // First click parent category
                    const parentSubmenu = submenuButton.closest('.submenu-container');
                    const parentCategory = parentSubmenu.id.replace('-submenu', '');
                    const parentButton = document.querySelector(`.filter-button-group button[data-category="${parentCategory}"]`);
                    
                    if (parentButton) {
                        parentButton.click();
                        
                        // Then click the submenu button
                        setTimeout(() => {
                            submenuButton.click();
                        }, 100);
                    }
                } else {
                    // Fallback to direct gallery display
                    showFullsizeGallery(category);
                }
            }
        });
    });
    
    // Set up fullsize viewer navigation
    const prevButton = document.getElementById('prev-item');
    const nextButton = document.getElementById('next-item');
    
    if (prevButton) {
        prevButton.addEventListener('click', showPreviousItem);
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', showNextItem);
    }
    
    // Close fullsize viewer
    const closeFullsize = document.querySelector('.close-fullsize');
    if (closeFullsize) {
        closeFullsize.addEventListener('click', function() {
            document.getElementById('fullsize-viewer').style.display = 'none';
        });
    }
    
    // Close fullsize viewer when clicking outside content area
    const fullsizeViewer = document.getElementById('fullsize-viewer');
    if (fullsizeViewer) {
        fullsizeViewer.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    }
    
    // Add keyboard navigation for fullsize viewer
    document.addEventListener('keydown', function(e) {
        const fullsizeViewer = document.getElementById('fullsize-viewer');
        
        if (fullsizeViewer && fullsizeViewer.style.display === 'flex') {
            if (e.key === 'ArrowLeft') {
                showPreviousItem();
            } else if (e.key === 'ArrowRight') {
                showNextItem();
            } else if (e.key === 'Escape') {
                fullsizeViewer.style.display = 'none';
            }
        }
    });
    
    // Add touch swipe support for mobile devices
    if (fullsizeViewer) {
        fullsizeViewer.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        fullsizeViewer.addEventListener('touchend', function(e) {
            const touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            
            // Detect swipe (with a threshold of 50px)
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    // Swiped left, show next
                    showNextItem();
                } else {
                    // Swiped right, show previous
                    showPreviousItem();
                }
            }
        });
    }
    
    // Update preview images with first image from each category
    updatePreviewImages();
    
    console.log("Portfolio initialization complete");
}

// Function to show the fullsize gallery for a selected category
function showFullsizeGallery(category) {
    console.log(`Loading fullsize gallery for category: ${category}`);
    
    // Set current category
    currentCategory = category;
    
    // Get items for this category
    const items = portfolioGalleryData[category] || [];
    currentItems = items;
    
    // Display first item or show error if no items
    if (items.length > 0) {
        showFullsizeItem(0);
    } else {
        alert(`No items available for ${getCategoryTitle(category)}`);
    }
}

// Function to show a full-size item
function showFullsizeItem(index) {
    console.log(`Showing fullsize item at index: ${index}`);
    
    // Set current item index
    currentItemIndex = index;
    
    // Get the item
    const item = currentItems[index];
    
    // Clear existing content
    const container = document.getElementById('fullsize-media-container');
    if (!container) {
        console.error("Fullsize media container not found");
        return;
    }
    
    container.innerHTML = '';
    
    // Create appropriate element based on type
    if (item.type === 'image') {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.description;
        
        // Add loading indicator
        const loader = document.createElement('div');
        loader.className = 'item-loader';
        container.appendChild(loader);
        
        // Replace loader with image when loaded
        img.onload = function() {
            container.innerHTML = '';
            container.appendChild(img);
        };
        
        img.onerror = function() {
            container.innerHTML = '';
            const errorMsg = document.createElement('div');
            errorMsg.textContent = `Image could not be loaded: ${item.src}`;
            errorMsg.style.color = 'white';
            errorMsg.style.padding = '20px';
            container.appendChild(errorMsg);
            console.error(`Failed to load image: ${item.src}`);
        };
    } else if (item.type === 'video') {
        const video = document.createElement('video');
        video.src = item.src;
        video.controls = true;
        video.autoplay = true;
        video.playsInline = true; // Important for iOS
        container.appendChild(video);
        
        video.onerror = function() {
            container.innerHTML = '';
            const errorMsg = document.createElement('div');
            errorMsg.textContent = `Video could not be loaded: ${item.src}`;
            errorMsg.style.color = 'white';
            errorMsg.style.padding = '20px';
            container.appendChild(errorMsg);
            console.error(`Failed to load video: ${item.src}`);
        };
    }
    
    // Update caption
    const captionElement = document.getElementById('fullsize-caption');
    if (captionElement) {
        captionElement.textContent = `${item.title}: ${item.description} (${index + 1}/${currentItems.length})`;
    }
    
    // Update the category title
    document.getElementById('gallery-title').textContent = getCategoryTitle(currentCategory);
    
    // Show the fullsize viewer
    const fullsizeViewer = document.getElementById('fullsize-viewer');
    if (fullsizeViewer) {
        fullsizeViewer.style.display = 'flex';
    }
    
    // Preload adjacent items for smoother navigation
    preloadAdjacentItems(index);
}

// Helper function to create media element
function createNewMediaElement(container, item) {
    // Clear existing content
    container.innerHTML = '';
    
    // Add loading indicator
    const loader = document.createElement('div');
    loader.className = 'item-loader';
    container.appendChild(loader);
    
    if (item.type === 'image') {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.description;
        img.style.opacity = '0'; // Start invisible
        
        // Replace loader with image when loaded
        img.onload = function() {
            // First fade out the loader
            loader.classList.add('fade-out');
            
            setTimeout(() => {
                container.innerHTML = '';
                container.appendChild(img);
                
                // Give the browser a moment to render before starting transition
                setTimeout(() => {
                    img.classList.add('fade-in');
                }, 30);
            }, 300); // Match this timing with CSS transition
        };
        
        img.onerror = function() {
            container.innerHTML = '';
            const errorMsg = document.createElement('div');
            errorMsg.textContent = `Image could not be loaded: ${item.src}`;
            errorMsg.style.color = 'white';
            errorMsg.style.padding = '20px';
            container.appendChild(errorMsg);
            console.error(`Failed to load image: ${item.src}`);
        };
    } else if (item.type === 'video') {
        const video = document.createElement('video');
        video.src = item.src;
        video.controls = true;
        video.autoplay = true;
        video.playsInline = true; // Important for iOS
        video.style.opacity = '0'; // Start invisible
        
        // When video can play, remove the loader
        video.oncanplay = function() {
            // First fade out the loader
            loader.classList.add('fade-out');
            
            setTimeout(() => {
                container.innerHTML = '';
                container.appendChild(video);
                
                // Give the browser a moment to render before starting transition
                setTimeout(() => {
                    video.classList.add('fade-in');
                }, 30);
            }, 300); // Match this timing with CSS transition
        };
        
        video.onerror = function() {
            container.innerHTML = '';
            const errorMsg = document.createElement('div');
            errorMsg.textContent = `Video could not be loaded: ${item.src}`;
            errorMsg.style.color = 'white';
            errorMsg.style.padding = '20px';
            container.appendChild(errorMsg);
            console.error(`Failed to load video: ${item.src}`);
        };
        
        // Append video to start loading
        container.appendChild(video);
    }
}

// Function to preload adjacent items
function preloadAdjacentItems(index) {
    const prevIndex = index > 0 ? index - 1 : currentItems.length - 1;
    const nextIndex = index < currentItems.length - 1 ? index + 1 : 0;
    
    [prevIndex, nextIndex].forEach(idx => {
        const item = currentItems[idx];
        if (item.type === 'image') {
            const preloadImg = new Image();
            preloadImg.src = item.src;
        }
    });
}

// Function to show the previous item in fullsize view
function showPreviousItem() {
    let newIndex = currentItemIndex - 1;
    if (newIndex < 0) {
        newIndex = currentItems.length - 1;
    }
    showFullsizeItem(newIndex);
}

// Function to show the next item in fullsize view
function showNextItem() {
    let newIndex = currentItemIndex + 1;
    if (newIndex >= currentItems.length) {
        newIndex = 0;
    }
    showFullsizeItem(newIndex);
}

// Update preview images with first image from each category
function updatePreviewImages() {
    const previewItems = document.querySelectorAll('.portfolio-item-preview');
    
    previewItems.forEach(item => {
        const category = item.getAttribute('data-category');
        
        // Get the first image from this category
        const categoryData = portfolioGalleryData[category];
        
        if (categoryData && categoryData.length > 0) {
            // Find the first image item
            const firstImageItem = categoryData.find(item => item.type === 'image');
            
            if (firstImageItem) {
                // Update the preview image source
                const previewImg = item.querySelector('img');
                if (previewImg) {
                    // Add loading handler for troubleshooting
                    previewImg.onerror = function() {
                        console.error(`Failed to load preview image: ${firstImageItem.src}`);
                        // Fallback to placeholder
                        this.src = 'images/placeholder.jpg';
                    };
                    
                    // Set the source
                    previewImg.src = firstImageItem.src;
                    previewImg.alt = firstImageItem.title;
                    
                    // Also update the title in the overlay
                    const titleElement = item.querySelector('.preview-overlay h4');
                    if (titleElement) {
                        titleElement.textContent = getCategoryTitle(category);
                    }
                }
            }
        }
    });
}

// Helper function to get a formatted title for a category
function getCategoryTitle(category) {
    // Convert category ID to a nice title
    switch(category) {
        case 'pez': return 'PEZ Creations';
        case 'toy': return 'Custom Toy Creations';
        case 'award': return 'Custom Award Creations';
        case 'hook': return 'Custom Pirate Hook Creations';
        case 'bloody': return 'Bloody Props & Effects';
        case 'cool-stuff': return 'Special Props & Effects';
        case 'newspapers': return 'Newspaper Designs';
        case 'leaflets': return 'Leaflet Designs';
        case 'concept': return 'Concept Art';
        case 'brands': return 'Brand Designs';
        case 'food': return 'Food Styling';
        case 'sets': return 'Set Designs';
        case 'weapons': return 'Weapon Props';
        case 'behind-scenes': return 'Behind the Scenes';
        default: return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
}