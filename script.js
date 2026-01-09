
        // Preloader
        window.addEventListener('load', function() {
            setTimeout(() => {
                document.getElementById('preloader').style.opacity = '0';
                document.getElementById('preloader').style.visibility = 'hidden';
                
                // Start typing animation after preloader
                setTimeout(() => {
                    startTypingAnimation();
                }, 500);
                
                // Show welcome toast
                Toastify({
                    text: "Welcome to my portfolio!",
                    duration: 3000,
                    gravity: "top",
                    position: "right",
                    style: {
                        background: "linear-gradient(to right, #4361ee, #7209b7)",
                        borderRadius: "8px",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
                    }
                }).showToast();
            }, 1000);
        });

        // Name Typing Animation
       function startTypingAnimation() {
    const typingText = document.getElementById('typingText');
    const cursor = document.getElementById('cursor');
    const fullName = "Joyonto Kumar Das ";
    let charIndex = 0;
    let isDeleting = false;
    let typingComplete = false;
    
    function type() {
        // If we're typing
        if (!isDeleting) {
            // Add next character
            typingText.textContent = fullName.substring(0, charIndex + 1);
            charIndex++;
            
            // If finished typing, switch to deleting mode after pause
            if (charIndex === fullName.length) {
                isDeleting = true;
                setTimeout(type, 2000); // Pause for 2 seconds
                return;
            }
            
            // Continue typing with normal speed
            setTimeout(type, 100);
        } 
        // If we're deleting
        else {
            // Remove last character
            typingText.textContent = fullName.substring(0, charIndex - 1);
            charIndex--;
            
            // If all deleted, switch back to typing after pause
            if (charIndex === 0) {
                isDeleting = false;
                setTimeout(type, 1000); // Pause for 1 second
                return;
            }
            
            // Continue deleting with faster speed
            setTimeout(type, 50);
        }
    }
    
    // Start typing animation
    setTimeout(type, 500);
}

        // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle.querySelector('i');
        
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            
            if (document.body.classList.contains('dark-theme')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                
                Toastify({
                    text: "Dark mode enabled",
                    duration: 2000,
                    gravity: "top",
                    position: "right",
                    style: {
                        background: "linear-gradient(to right, #4cc9f0, #9d4edd)",
                        borderRadius: "8px",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
                    }
                }).showToast();
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                
                Toastify({
                    text: "Light mode enabled",
                    duration: 2000,
                    gravity: "top",
                    position: "right",
                    style: {
                        background: "linear-gradient(to right, #4361ee, #7209b7)",
                        borderRadius: "8px",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
                    }
                }).showToast();
            }
        });

        // Mobile Menu
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');
        const menuIcon = mobileMenuBtn.querySelector('i');
        
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            if (mainNav.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function() {
                mainNav.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            });
        });

        // Resume Button Functionality
        // const resumeBtn = document.getElementById('resumeBtn');
        
        // resumeBtn.addEventListener('click', function(e) {
        //     e.preventDefault();
            
        //     // Show loading toast
        //     Toastify({
        //         text: "Downloading resume...",
        //         duration: 2000,
        //         gravity: "top",
        //         position: "right",
        //         style: {
        //             background: "linear-gradient(to right, #7209b7, #9d4edd)",
        //             borderRadius: "8px",
        //             boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
        //         }
        //     }).showToast();
            
        //     // Simulate download
        //     setTimeout(() => {
        //         Toastify({
        //             text: "Resume downloaded successfully!",
        //             duration: 3000,
        //             gravity: "top",
        //             position: "right",
        //             style: {
        //                 background: "linear-gradient(to right, #06d6a0, #118ab2)",
        //                 borderRadius: "8px",
        //                 boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
        //             }
        //         }).showToast();
        //     }, 1000);
        // });

        // Skill Buttons Functionality - TOGGLEABLE CARDS
        const skillButtons = document.querySelectorAll('.skill-btn');
        const skillCards = document.querySelectorAll('.skill-card');
        
        // Set Frontend as default active
        let activeSkill = 'frontend';
        
        // Add click event to skill buttons
        skillButtons.forEach(button => {
            button.addEventListener('click', function() {
                const skillType = this.getAttribute('data-skill');
                
                // Update active skill
                activeSkill = skillType;
                
                // Update button states
                skillButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Show/hide skill cards
                skillCards.forEach(card => {
                    if (card.id === `${skillType}-card`) {
                        card.classList.remove('hidden');
                        card.classList.add('active');
                    } else {
                        card.classList.add('hidden');
                        card.classList.remove('active');
                    }
                });
                
                // Show skill switch toast
                const skillName = skillType === 'frontend' ? 'Frontend Development' : 
                                skillType === 'devops' ? 'DevOps & Tools' : 'Professional Skills';
                Toastify({
                    text: `Showing: ${skillName} Skills`,
                    duration: 1500,
                    gravity: "top",
                    position: "right",
                    style: {
                        background: "linear-gradient(to right, #4361ee, #7209b7)",
                        borderRadius: "8px",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
                    }
                }).showToast();
            });
        });

        // Experience/Education Tab Functionality
        const experienceTabButtons = document.querySelectorAll('.experience-tab-btn');
        const experienceCategories = document.querySelectorAll('.experience-category');
        
        // Set Education as default active
        let activeExperienceTab = 'education';
        
        // Add click event to experience tab buttons
        experienceTabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // Update active tab
                activeExperienceTab = tabId;
                
                // Update button states
                experienceTabButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Show/hide experience categories
                experienceCategories.forEach(category => {
                    if (category.id === `${tabId}-category`) {
                        category.classList.add('active');
                    } else {
                        category.classList.remove('active');
                    }
                });
                
                // Show tab switch toast
                const tabName = tabId === 'education' ? 'Education' : 
                              tabId === 'work' ? 'Work Experience' : 'Certifications';
                Toastify({
                    text: `Now viewing: ${tabName}`,
                    duration: 1500,
                    gravity: "top",
                    position: "right",
                    style: {
                        background: "linear-gradient(to right, #4361ee, #7209b7)",
                        borderRadius: "8px",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
                    }
                }).showToast();
            });
        });

        // Scroll animations
        function revealOnScroll() {
            const reveals = document.querySelectorAll('.reveal');
            
            for (let i = 0; i < reveals.length; i++) {
                const windowHeight = window.innerHeight;
                const elementTop = reveals[i].getBoundingClientRect().top;
                const elementVisible = 100;
                
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add('active');
                }
            }
        }
        
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Initial check

        // Form submission
        const contactForm = document.getElementById('contactForm');
        const submitBtn = contactForm.querySelector('.btn');
        const btnText = submitBtn.querySelector('.btn-text');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            submitBtn.classList.add('btn-loading');
            
            // Show loading toast
            const loadingToast = Toastify({
                text: "Sending your message...",
                duration: 5000,
                gravity: "top",
                position: "right",
                style: {
                    background: "linear-gradient(to right, #4361ee, #7209b7)",
                    borderRadius: "8px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
                }
            });
            loadingToast.showToast();
            
            // Simulate API call
            setTimeout(() => {
                // Remove loading state
                submitBtn.classList.remove('btn-loading');
                
                // Show success toast
                Toastify({
                    text: "Message sent successfully! I'll get back to you soon.",
                    duration: 4000,
                    gravity: "top",
                    position: "right",
                    style: {
                        background: "linear-gradient(to right, #06d6a0, #118ab2)",
                        borderRadius: "8px",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
                    }
                }).showToast();
                
                // Get form input elements
                const nameInput = document.getElementById('name');
                const emailInput = document.getElementById('email');
                const messageInput = document.getElementById('message');
                
                // Clear form fields
                nameInput.value = '';
                emailInput.value = '';
                messageInput.value = '';
                
                // Remove any validation states
                nameInput.classList.remove('error', 'success');
                emailInput.classList.remove('error', 'success');
                messageInput.classList.remove('error', 'success');
                
                // Remove loading toast
                loadingToast.hideToast();
                
                // Add a small animation to confirm clearing
                contactForm.classList.add('submitted');
                setTimeout(() => {
                    contactForm.classList.remove('submitted');
                }, 1000);
                
            }, 2000);
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.padding = '10px 0';
                header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            } else {
                header.style.padding = '20px 0';
                header.style.boxShadow = 'none';
            }
        });
    