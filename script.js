// Tailwind CSS Configuration
window.tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#004080',
                navy: {
                    800: '#001f3d',
                    900: '#001529',
                }
            },
            fontFamily: {
                sans: ['Manrope', 'Noto Sans JP', 'sans-serif'],
            },
        }
    }
};

/**
 * Scroll to contact section smoothly
 */
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Form Interaction
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data (for potential future API integration)
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            
            console.log('Form submission received:', data);
            
            // Provide feedback to user
            alert('お問い合わせを受け付けました。川合より折り返しご連絡いたします。');
            
            // Reset form
            this.reset();
        });
    }

    // Optional: Header background change on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-md');
        } else {
            header.classList.remove('shadow-md');
        }
    });
});