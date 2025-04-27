jQuery(document).ready(function($) {
    // Gallery data - simplified version with just a few essential categories
    var galleryData = {
        'pez': { 
            title: 'PEZ',
            description: 'Custom PEZ dispenser manufacturing process',
            items: [
                { type: 'image', src: 'uploads/pez/1.jpg', description: 'Original Actor photographed' },
                { type: 'image', src: 'uploads/pez/2.jpg', description: 'Actor in Character after Hair & Makeup' }
            ]
        },
        'toy': {
            title: 'TOY',
            description: 'Custom Toy manufacturing process',
            items: [
                { type: 'image', src: 'uploads/toy/ref.jpg', description: 'First reference toy' },
                { type: 'image', src: 'uploads/toy/box.jpg', description: 'Custom box design' }
            ]
        },
        'food': {
            title: 'FOOD',
            description: 'Food styling examples',
            items: [
                { type: 'image', src: 'uploads/placeholder1.jpg', description: 'Food styling example' }
            ]
        }
    };
    
    // Submenu button click handler
    $('.submenu button').on('click', function() {
        var subcategory = $(this).data('subcategory');
        showGallery(subcategory);
    });
    
    // Main category buttons that don't have submenus
    $('.filter-button-group button:not([data-category="special-props"]):not([data-category="graphic-design"])').on('click', function() {
        var category = $(this).data('category');
        showGallery(category);
    });
    
    // Function to display the gallery
    function showGallery(category) {
        console.log('Opening gallery for:', category);
        
        // Get category data or use defaults
        var data = galleryData[category] || {
            title: category.toUpperCase(),
            description: 'Gallery for ' + category,
            items: [{ 
                type: 'image', 
                src: 'uploads/placeholder1.jpg', 
                description: 'Placeholder image for ' + category 
            }]
        };
        
        // Build the gallery HTML
        var overlayHtml = '<div class="overlay-content">';
        overlayHtml += '<div class="overlay-header">';
        overlayHtml += '<h2 id="overlay-title">' + data.title + '</h2>';
        overlayHtml += '<span class="close-overlay">&times;</span>';
        overlayHtml += '</div>';
        overlayHtml += '<div class="overlay-description">';
        overlayHtml += '<p id="overlay-text">' + data.description + '</p>';
        overlayHtml += '</div>';
        overlayHtml += '<div class="gallery-container">';
        overlayHtml += '<div class="gallery-navigation">';
        overlayHtml += '<div class="nav-arrow prev">&lt;</div>';
        overlayHtml += '<div class="gallery-items">';
        
        // Add gallery items
        $.each(data.items, function(index, item) {
            var activeClass = index === 0 ? 'active' : '';
            overlayHtml += '<div class="gallery-item ' + activeClass + '">';
            overlayHtml += '<div class="item-media">';
            
            if (item.type === 'image') {
                overlayHtml += '<img src="' + item.src + '" alt="Item ' + (index + 1) + '">';
            } else if (item.type === 'video') {
                overlayHtml += '<video src="' + item.src + '" controls style="max-width: 300px;"></video>';
            }
            
            overlayHtml += '</div>';
            overlayHtml += '<div class="item-description"><p>' + item.description + '</p></div>';
            overlayHtml += '</div>';
        });
        
        overlayHtml += '</div>';
        overlayHtml += '<div class="nav-arrow next">&gt;</div>';
        overlayHtml += '</div></div></div>';
        
        // Update overlay content and show it
        $('#portfolio-overlay').html(overlayHtml).fadeIn();
        $('body').css('overflow', 'hidden');
        
        // Set up navigation handlers
        setupGalleryNavigation();
    }
    
    // Set up gallery navigation
    function setupGalleryNavigation() {
        // Current item index
        var currentIndex = 0;
        var totalItems = $('.gallery-item').length;
        
        // Close button handler
        $('.close-overlay').on('click', function() {
            $('#portfolio-overlay').fadeOut();
            $('body').css('overflow', 'auto');
        });
        
        // Outside click handler
        $('#portfolio-overlay').on('click', function(e) {
            if (e.target === this) {
                $(this).fadeOut();
                $('body').css('overflow', 'auto');
            }
        });
        
        // Previous arrow handler
        $('.nav-arrow.prev').on('click', function() {
            if (totalItems <= 1) return;
            
            $('.gallery-item').removeClass('active');
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            $('.gallery-item').eq(currentIndex).addClass('active');
        });
        
        // Next arrow handler
        $('.nav-arrow.next').on('click', function() {
            if (totalItems <= 1) return;
            
            $('.gallery-item').removeClass('active');
            currentIndex = (currentIndex + 1) % totalItems;
            $('.gallery-item').eq(currentIndex).addClass('active');
        });
        
        // Keyboard navigation
        $(document).on('keydown', function(e) {
            if ($('#portfolio-overlay').is(':visible')) {
                if (e.key === 'ArrowLeft' || e.keyCode === 37) {
                    $('.nav-arrow.prev').click();
                } else if (e.key === 'ArrowRight' || e.keyCode === 39) {
                    $('.nav-arrow.next').click();
                } else if (e.key === 'Escape' || e.keyCode === 27) {
                    $('.close-overlay').click();
                }
            }
        });
    }
});