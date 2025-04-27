# Yinon's Property Master Portfolio Website - README

## Overview
This website serves as a professional portfolio showcasing Yinon's decade of experience as a Property Master in the film and television industry, while also highlighting the transition to a new career in QA analysis. The site follows a single-page layout with multiple sections that display various aspects of Yinon's work and expertise.

## Site Structure

### 1. Navigation
- Fixed-top navigation bar with logo
- Mobile-responsive collapsible menu
- Smooth scrolling to different sections

### 2. Hero Section
- Full-width banner with parallax effect
- Animated text rotation showcasing different professional roles
- Introduction text that establishes the purpose of the portfolio

### 3. About Section
- Personal introduction explaining career transition
- Brief explanation of the Property Master role
- Profile image and CV download button

### 4. Promo Section
- Background image with overlay
- Explanatory text about the significance of props in storytelling
- Embedded YouTube video showcasing work

### 5. Services Section
- Grid layout showcasing six key service areas:
  - Graphic Design
  - Sourcing
  - Prop Design
  - Weaponry
  - Food Styling
  - Running Set
- Each service features a custom icon and interactive overlay with detailed descriptions

### 6. Portfolio Section
- Main category filter system with buttons for:
  - Special Props
  - Graphic Design
  - Food
  - Sets
  - Weapons
  - Behind the Scenes
- Subcategory filters for Special Props (PEZ, Toy, Award, Hook, Bloody, Other)
- Subcategory filters for Graphic Design (Newspapers, Leaflets, Concept, Brands)
- Gallery overlay displaying thumbnails when a category is selected
- Fullsize viewer for individual items with navigation controls
- Support for both image and video content

### 7. Blog Section
- Preview of blog posts with featured images
- Date, title, and excerpt information

### 8. Contact Section
- Contact form with validation
- Name, email, phone, and message fields

### 9. Footer
- Copyright information
- Navigation links

## Technical Components

### Frameworks and Libraries
- Bootstrap 4.1 (CSS framework)
- jQuery (JavaScript library)
- Modernizr (Feature detection)
- Font Awesome (Icon library)

### CSS Files
- bootstrap.min.css - Core Bootstrap framework
- style.css - Main website styling
- responsive.css - Responsive design adjustments
- portfolio.css - Portfolio section specific styling
- custom.css - Additional custom styling

### JavaScript Files
- jquery.*.js - jQuery core and plugins
- modernizr.js - Feature detection
- all.js - Combined JavaScript libraries
- custom.js - Site-wide functionality
- portfolio.js - Portfolio section functionality
- headline.js - Text animation for hero section

### Media Folders
- images/ - Site-wide images and icons
- uploads/ - Content media (profile photos, portfolio items)
- uploads/portfolio/ - Organized portfolio media by category
  - pez/ - PEZ creation process images
  - toy/ - Toy creation images and videos
  - award/ - Custom award creation media
  - hook/ - Custom pirate hook creation
  - bloody/ - Special effects props
  - special/ - Miscellaneous special props
  - graphic/ - Graphic design examples
  
## Portfolio System

The portfolio section uses a custom-built gallery system with several key features:

1. **Main Categories**: Top-level filters for different types of work
2. **Subcategories**: Secondary filters that appear contextually based on the main category
3. **Gallery Overlay**: Displays thumbnails in a grid layout when a category is selected
4. **Fullsize Viewer**: Shows individual items with navigation controls
5. **Media Support**: Handles both images and videos with proper thumbnails
6. **Responsive Design**: Works on mobile, tablet, and desktop devices
7. **Enhanced Navigation**: Keyboard shortcuts, touch gestures, and UI controls

The portfolio data is stored in the `portfolioGalleryData` object in portfolio.js, organized by categories and subcategories. Each item includes metadata like type (image/video), source path, title, and description.

## Services Overlay System

The services section features an interactive overlay system:
1. Service boxes display basic information
2. Clicking a service shows a modal overlay with:
   - Detailed description
   - Related imagery
   - Close button
3. Modal can be closed by clicking outside the content or the close button

## Responsive Design

The website is fully responsive across devices:
- Desktop: Full layout with hover effects and animations
- Tablet: Adjusted spacing and element sizes
- Mobile: Collapsible menu, stacked content, touch-optimized interactions

## Browser Compatibility

- Chrome, Firefox, Safari, Edge (latest versions)
- IE11 with fallbacks via Modernizr
- Mobile browsers on iOS and Android
