jQuery(document).ready(function($) {
    // Clear any previous bindings
    $('.filter-button-group button').off('click');
    $('.submenu button').off('click');
    
    // Hide submenus initially
    $('#special-props-submenu').hide();
    $('#graphic-design-submenu').hide();
    
    // Main category button clicks
    $('.filter-button-group button').on('click', function() {
        var category = $(this).data('category');
        console.log('Clicked category:', category);
        
        // Hide all submenus
        $('#special-props-submenu').hide();
        $('#graphic-design-submenu').hide();
        
        // Show appropriate submenu
        if (category === 'special-props') {
            $('#special-props-submenu').slideDown();
        } else if (category === 'graphic-design') {
            $('#graphic-design-submenu').slideDown();
        }
    });
});