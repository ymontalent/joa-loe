$(document).ready(function(){
    $('.gallery-slider').slick({
        slidesToShow: 2.5, // Shows 2 full + partial third image
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2.1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.3,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('playButton');
    const videoModal = document.getElementById('videoModal');
    const closeVideo = document.getElementById('closeVideo');
    const videoPlayer = document.getElementById('videoPlayer');

    // Play button click
    playButton.addEventListener('click', function() {
        videoModal.classList.add('active');
        
        // Fade in effect
        setTimeout(() => {
            videoModal.classList.add('show');
            // Auto-play the video when modal opens
            videoPlayer.play().catch(function(error) {
                console.log('Video autoplay failed:', error);
            });
        }, 10);
    });

    // Close video
    function closeVideoModal() {
        videoModal.classList.remove('show');
        
        // Pause and reset video
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        
        setTimeout(() => {
            videoModal.classList.remove('active');
        }, 300);
    }

    closeVideo.addEventListener('click', closeVideoModal);

    // Close on background click
    videoModal.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            closeVideoModal();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeVideoModal();
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Check if form is valid using native HTML5 validation
    if (!form.checkValidity()) {
        // This will show native browser error messages
        form.reportValidity();
        return;
    }
    
    // If form is valid, you can process the data
    console.log('Form submitted successfully!');
    console.log('Form data:', Object.fromEntries(formData));
    
    // Here you would typically send the data to a server
    alert('Thank you for your message! We will get back to you soon.');
    
    // Optional: Reset form after successful submission
    form.reset();
});