/* ============================================
   GANDHI SILK MILLS - JAVASCRIPT
   Smooth Scrolling, Gallery Lightbox, Mobile Menu
   ============================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // NAVBAR FUNCTIONALITY
    // ============================================
    
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // ============================================
    // SMOOTH SCROLLING
    // ============================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ============================================
    // GALLERY ACCORDION
    // ============================================
    
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const carouselContainer = item.querySelector('.carousel-container');
        
        header.addEventListener('click', function() {
            const isActive = header.classList.contains('active');
            
            // Close all accordion items
            accordionItems.forEach(otherItem => {
                const otherHeader = otherItem.querySelector('.accordion-header');
                const otherContent = otherItem.querySelector('.accordion-content');
                otherHeader.classList.remove('active');
                otherContent.classList.remove('active');
                otherHeader.setAttribute('aria-expanded', 'false');
            });
            
            // Toggle current item
            if (!isActive) {
                header.classList.add('active');
                content.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
                
                // Reinitialize carousel when accordion opens (in case it wasn't initialized)
                if (carouselContainer) {
                    const track = carouselContainer.querySelector('.carousel-track');
                    if (track) {
                        // Reset carousel to first slide when opening
                        const slides = carouselContainer.querySelectorAll('.carousel-slide');
                        if (slides.length > 0) {
                            track.style.transform = 'translateX(0%)';
                            const indicators = carouselContainer.querySelectorAll('.indicator');
                            indicators.forEach((indicator, index) => {
                                if (index === 0) {
                                    indicator.classList.add('active');
                                } else {
                                    indicator.classList.remove('active');
                                }
                            });
                        }
                    }
                }
            }
        });
    });
    
    // ============================================
    // CAROUSEL FUNCTIONALITY
    // ============================================
    
    function initializeCarousel(carouselContainer) {
        const track = carouselContainer.querySelector('.carousel-track');
        const slides = carouselContainer.querySelectorAll('.carousel-slide');
        const prevBtn = carouselContainer.querySelector('.carousel-prev');
        const nextBtn = carouselContainer.querySelector('.carousel-next');
        const indicators = carouselContainer.querySelectorAll('.indicator');
        
        let currentSlide = 0;
        const totalSlides = slides.length;
        
        // Update carousel position
        function updateCarousel() {
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Update indicators
            indicators.forEach((indicator, index) => {
                if (index === currentSlide) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        }
        
        // Go to specific slide
        function goToSlide(slideIndex) {
            if (slideIndex < 0) {
                currentSlide = totalSlides - 1;
            } else if (slideIndex >= totalSlides) {
                currentSlide = 0;
            } else {
                currentSlide = slideIndex;
            }
            updateCarousel();
        }
        
        // Previous button
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                goToSlide(currentSlide - 1);
            });
        }
        
        // Next button
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                goToSlide(currentSlide + 1);
            });
        }
        
        // Indicator clicks
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', function() {
                goToSlide(index);
            });
        });
        
        // Initialize
        updateCarousel();
    }
    
    // Initialize all carousels
    const carouselContainers = document.querySelectorAll('.carousel-container');
    carouselContainers.forEach(container => {
        initializeCarousel(container);
    });
    
    // ============================================
    // GALLERY LIGHTBOX
    // ============================================
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    
    let currentImageIndex = 0;
    let galleryImages = [];
    
    // Initialize gallery from all carousel images
    function initializeGallery() {
        // Get all carousel slides
        const allSlides = document.querySelectorAll('.carousel-slide');
        const allImages = [];
        
        allSlides.forEach(slide => {
            const img = slide.querySelector('img');
            if (img) {
                allImages.push(img);
            }
        });
        
        if (allImages.length === 0) {
            return;
        }
        
        // Store all image sources
        galleryImages = Array.from(allImages).map(img => img.src);
        
        // Add click event to each image
        allImages.forEach((img, index) => {
            img.addEventListener('click', function() {
                openLightbox(index);
            });
        });
    }
    
    // Open lightbox with specific image
    function openLightbox(index) {
        if (galleryImages.length === 0) return;
        
        currentImageIndex = index;
        lightboxImage.src = galleryImages[currentImageIndex];
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    
    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
    
    // Navigate to previous image
    function showPreviousImage() {
        if (galleryImages.length === 0) return;
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        lightboxImage.src = galleryImages[currentImageIndex];
    }
    
    // Navigate to next image
    function showNextImage() {
        if (galleryImages.length === 0) return;
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        lightboxImage.src = galleryImages[currentImageIndex];
    }
    
    // Event listeners for lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPreviousImage);
    lightboxNext.addEventListener('click', showNextImage);
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation for lightbox
    document.addEventListener('keydown', function(e) {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                showPreviousImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            }
        }
    });
    
    // Initialize gallery on page load
    initializeGallery();
    
    // ============================================
    // VIDEO HANDLING
    // ============================================
    
    const promoVideo = document.getElementById('promo-video');
    
    // Auto-play video on desktop (muted, loop)
    // On mobile, show controls for user interaction
    if (promoVideo) {
        const isMobile = window.innerWidth <= 768;
        
        if (!isMobile) {
            // Desktop: autoplay, muted, loop
            promoVideo.setAttribute('autoplay', '');
            promoVideo.setAttribute('muted', '');
            promoVideo.setAttribute('loop', '');
            promoVideo.muted = true;
        } else {
            // Mobile: show controls, no autoplay
            promoVideo.setAttribute('controls', '');
        }
        
        // Handle video loading
        promoVideo.addEventListener('loadedmetadata', function() {
            // Video metadata loaded
        });
        
        // Handle video errors
        promoVideo.addEventListener('error', function() {
            console.log('Video file not found. Please add promo-video.mp4 to assets/video/ folder.');
            // Optionally show a placeholder message
            const videoWrapper = promoVideo.parentElement;
            if (videoWrapper) {
                videoWrapper.innerHTML = '<p style="text-align: center; padding: 2rem; color: var(--text-light);">Video will be displayed here. Please add promo-video.mp4 to the assets/video/ folder.</p>';
            }
        });
    }
    
    // ============================================
    // LAZY LOADING FOR IMAGES (Optional Enhancement)
    // ============================================
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        // Observe all images with data-src attribute
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ============================================
    // CONTACT FORM ENHANCEMENT (if needed in future)
    // ============================================
    
    // Phone number click tracking (analytics placeholder)
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', function() {
            // Could add analytics tracking here
            console.log('Phone number clicked:', this.textContent);
        });
    });
    
    // Email link tracking
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
        link.addEventListener('click', function() {
            // Could add analytics tracking here
            console.log('Email link clicked');
        });
    });
    
    // ============================================
    // PERFORMANCE: Debounce scroll events
    // ============================================
    
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debounce to scroll-heavy functions if needed
    // window.addEventListener('scroll', debounce(highlightNavLink, 10));
    
});

// ============================================
// UTILITY: Add sample gallery images function
// ============================================
// This function can be called to add images programmatically
// For static sites, images should be added manually to HTML

function addGalleryImage(imagePath, altText = 'Product Image') {
    const galleryGrid = document.getElementById('gallery-grid');
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = altText;
    img.loading = 'lazy';
    
    galleryItem.appendChild(img);
    galleryGrid.appendChild(galleryItem);
    
    // Re-initialize gallery to include new image
    // This would need to be called after adding images
}

