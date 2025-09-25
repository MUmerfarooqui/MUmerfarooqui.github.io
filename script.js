// Courses data
const coursesData = {
    csc: {
        title: 'Computer Science',
        icon: 'fas fa-code',
        courses: [
            { code: 'CSC110Y1', name: 'Foundations of Computer Science I' },
            { code: 'CSC111H1', name: 'Foundations of Computer Science II' },
            { code: 'CSC207H1', name: 'Software Design' },
            { code: 'CSC209H1', name: 'Software Tools & Systems Programming' },
            { code: 'CSC236H1', name: 'Introduction to Theory of Computation' },
            { code: 'CSC258H1', name: 'Computer Organization' },
            { code: 'CSC263H1', name: 'Data Structures & Analysis' },
            { code: 'CSC301H1', name: 'Introduction to Software Engineering' },
            { code: 'CSC309H1', name: 'Programming on the Web' },
            { code: 'CSC311H1', name: 'Introduction to Machine Learning' },
            { code: 'CSC343H1', name: 'Introduction to Databases' },
            { code: 'CSC367H1', name: 'Parallel Programming' },
            { code: 'CSC369H1', name: 'Operating Systems' },
            { code: 'CSC373H1', name: 'Algorithm Design & Analysis' },
            { code: 'CSC384H1', name: 'Introduction to Artificial Intelligence' }
        ]
    },
    mat: {
        title: 'Mathematics',
        icon: 'fas fa-calculator',
        courses: [
            { code: 'MAT137Y1', name: 'Calculus with Proofs' },
            { code: 'MAT223H1', name: 'Linear Algebra I' },
            { code: 'MAT235Y1', name: 'Multivariable Calculus' }
        ]
    },
    sta: {
        title: 'Statistics',
        icon: 'fas fa-chart-bar',
        courses: [
            { code: 'STA237H1', name: 'Probability, Statistics & Data Analysis I' },
            { code: 'STA238H1', name: 'Probability, Statistics & Data Analysis II' },
            { code: 'STA302H1', name: 'Methods of Data Analysis' },
            { code: 'STA303H1', name: 'Data Analysis II' }
        ]
    },
    breadth: {
        title: 'Breadth Requirements',
        icon: 'fas fa-book-open',
        courses: [
            { code: 'ECO105Y1', name: 'Principles of Economics (Non-Specialist)' },
            { code: 'LIN102H1', name: 'Introduction to Linguistics: Sentence' },
            { code: 'NML110Y1', name: 'Elementary Arabic' },
            { code: 'RLG204H1', name: 'Islam' }
        ]
    }
};

// Scholarships data
const scholarshipsData = [
    {
        name: 'Mary Emily Pearson Scholarship',
        description: 'Awarded for academic excellence and leadership potential',
        icon: 'fas fa-medal'
    },
    {
        name: 'The Susan And Murray Armitage Scholarship I',
        description: 'Recognition of outstanding academic achievement in Computer Science',
        icon: 'fas fa-trophy'
    },
    {
        name: 'The Regents In-Course Scholarship',
        description: 'Merit-based scholarship for continuing students with exceptional performance',
        icon: 'fas fa-award'
    }
];

// Career data for modals
const careerData = {
    'incubella': {
        title: 'AI/SWE Intern',
        company: 'Incubella – <a href="https://mysentiment.ai" target="_blank" rel="noopener noreferrer">MySentiment.ai</a> / <a href="https://incubella.co" target="_blank" rel="noopener noreferrer">incubella.co</a>',
        location: 'Toronto, ON',
        duration: 'Jun 2025 – Sep 2025',
        description: 'Spearheaded development of cutting-edge sentiment analysis platform, transforming social media data into actionable business intelligence.',
        responsibilities: [
            'Spearheaded full-stack development of Sentiment AI using FastAPI and Next.js, delivering a robust and scalable web app that converts social media data into actionable sentiment snapshots',
            'Enabled users to track emerging trends, shifting sentiment, and long-term cultural cycles at the click of a button',
            'Integrated secure authentication using Clerk, streamlining login flows and ensuring zero-friction sign-in experience for beta users',
            'Implemented MongoDB database architecture for robust data integrity, ensuring reliable storage and retrieval of sentiment analysis results and user data across the platform',
            'Deployed Hugging Face fine-tuned NLP models for accurate classification alongside Grok-4 to generate high-accuracy sentiment scoring and meaningful keyword insights in real time',
            'Delivered and launched the MVP in open beta, engaging users and validating key product hypotheses'
        ],
        technologies: ['FastAPI', 'Next.js', 'MongoDB', 'Clerk Authentication', 'Hugging Face', 'Grok-4', 'NLP', 'Machine Learning', 'React', 'Python'],
        achievements: [
            'Successfully launched MVP in open beta with positive user engagement',
            'Built scalable architecture capable of real-time sentiment analysis',
            'Integrated advanced AI models for high-accuracy predictions',
            'Delivered zero-friction authentication system for seamless user experience'
        ]
    },
    'rabyt': {
        title: 'Developer Intern',
        company: 'Rabyt – <a href="https://rabyt.ai" target="_blank" rel="noopener noreferrer">Rabyt.ai</a>',
        location: 'Toronto, ON',
        duration: 'Jun 2025 – Present',
        description: 'Contributing to the development of innovative financial technology solutions with cross-platform desktop applications and AI-driven analysis.',
        responsibilities: [
            'Contributed to the development of Rabyt.ai\'s cross-platform desktop application using Electron.js, enhancing product stability and user interface responsiveness',
            'Integrated spreadsheet processing capabilities using Univer and SheetJS libraries, enabling dynamic data manipulation and financial data visualization within the app',
            'Collaborated with cross-functional teams to develop and refine React-based interfaces for financial data workflows, translating complex financial insights into intuitive user experiences',
            'Conducted in-depth research on emerging financial technologies to support the design of AI-driven financial analysis features and improve product-market fit'
        ],
        technologies: ['Electron.js', 'React', 'Univer', 'SheetJS', 'JavaScript', 'Node.js', 'Financial APIs', 'Data Visualization'],
        achievements: [
            'Enhanced application stability and user interface responsiveness',
            'Enabled dynamic financial data manipulation and visualization',
            'Improved user experience for complex financial workflows',
            'Contributed to AI-driven financial analysis feature design'
        ]
    },
    'fns': {
        title: 'Junior Part-Time Developer',
        company: 'FnS Consultancy Inc.',
        location: 'Pickering, ON',
        duration: 'Jul 2023 – July 2024',
        description: 'Developed enterprise-level applications and APIs while optimizing database performance and enhancing user experiences.',
        responsibilities: [
            'Collaborated with cross-functional teams to design and develop RESTful APIs and applications using C#, .NET and Java, ensuring seamless data integration across systems',
            'Improved productivity and feature delivery speed through efficient API design and implementation',
            'Engineered scalable solutions and optimized query systems using SQL, enhancing database performance and boosting application efficiency by 25%',
            'Improved Business Efficiency through Power BI and other Power Platform tools',
            'Enhanced UX with React and JavaScript, building a variety of responsive interfaces for improved client satisfaction'
        ],
        technologies: ['C#', '.NET', 'Java', 'SQL Server', 'React', 'JavaScript', 'Power BI', 'Power Platform', 'REST APIs'],
        achievements: [
            'Boosted application efficiency by 25% through database optimization',
            'Improved productivity and accelerated feature delivery',
            'Enhanced client satisfaction through responsive interface development',
            'Implemented seamless data integration across multiple systems'
        ]
    }
};

// Project data for modals
const projectData = {
    'trippy': {
        title: 'Trippy - AI Travel Planner',
        status: 'In Progress',
        description: 'A full-stack AI travel planner that creates personalized itineraries based on user preferences.',
        features: [
            'Intelligent flight and hotel search using multi-agent system',
            'Personalized itinerary generation with LangChain and Gemini Pro',
            'Secure user authentication with Supabase Auth',
            'Modern, responsive frontend with Next.js and Tailwind CSS',
            'Backend validation and SQL-based data management'
        ],
        technologies: ['Next.js', 'Tailwind CSS', 'FastAPI', 'LangChain', 'Gemini Pro', 'Supabase'],
        highlights: [
            'Architected modular multi-agent system for intelligent travel planning',
            'Integrated multiple APIs for comprehensive travel data',
            'Built responsive UI for seamless user experience'
        ]
    },
    'learnai': {
        title: 'LearnAI - Intelligent Learning Platform',
        status: 'In Progress',
        description: 'An innovative startup project empowering students with AI-powered learning tools, structured notes, and collaborative features.',
        features: [
            'AI chatbot for interactive learning conversations',
            'Automatic conversion of AI responses into structured notes',
            'Personalized learning path generation',
            'Social learning pods for collaboration',
            'Interactive quizzes and practice sessions'
        ],
        technologies: ['FastAPI', 'Next.js', 'LangChain', 'RAG Pipeline', 'Gemini', 'OpenAI', 'Supabase', 'Clerk'],
        highlights: [
            'Built advanced RAG pipelines for intelligent content generation',
            'Implemented secure authentication and user management',
            'Designed scalable database structures for learning data'
        ]
    },
    'uoft-messenger': {
        title: 'UofT-Messenger',
        status: 'Completed',
        description: 'A comprehensive Java-based social media chat application designed for seamless real-time communication.',
        features: [
            'Real-time messaging with Java Swing interface',
            'Friend management and profile updates',
            'Advanced friend recommendation system using external API',
            'Scalable MongoDB integration with REST APIs',
            'Maven-optimized development workflow'
        ],
        technologies: ['Java', 'Java Swing', 'MongoDB', 'REST APIs', 'Maven'],
        highlights: [
            'Led development of Java-based social media platform',
            'Implemented friend recommendation system boosting user engagement',
            'Optimized development workflows reducing deployment time by 20%',
            'Ensured scalability and reliability for heavy user activity'
        ]
    },
    'healthy': {
        title: 'Healthy - AI Health Monitor',
        status: 'Completed',
        description: 'A comprehensive C# WPF health monitoring application with AI-powered predictive analytics.',
        features: [
            'User-friendly health metrics collection and validation',
            'SQL database integration for historical tracking',
            'Flask-based API for AI/ML model communication',
            'Heart disease and blood sugar risk prediction',
            'Personalized health insights using scikit-learn'
        ],
        technologies: ['C#', 'WPF', 'SQL Server', 'Flask', 'Python', 'scikit-learn', 'AI/ML'],
        highlights: [
            'Integrated advanced predictive analytics with Flask API',
            'Built secure data storage with historical trend tracking',
            'Implemented AI/ML models for health risk prediction',
            'Created intuitive interface for proactive health management'
        ]
    },
    'flowcraft': {
        title: 'FlowCraft - Intelligent Automation Hub',
        status: 'Completed',
        description: 'A comprehensive automation platform that revolutionizes workflow management with intelligent Gmail automation and one-click execution capabilities.',
        features: [
            'Intelligent Gmail workflow automation for email management',
            'Seamless interface for automated workflow execution',
            'Advanced email filtering and response automation',
            'Secure user authentication with Clerk',
            'Scalable SQL storage with Supabase',
            'Google Cloud Console integration for enterprise reliability',
            'One-click n8n workflow execution for complex automations'
        ],
        technologies: ['FastAPI', 'Next.js', 'Gmail API', 'Google Workspace', 'Clerk', 'Supabase', 'Google Cloud', 'n8n', 'OAuth2'],
        highlights: [
            'Automated Gmail workflows reducing email management time by 80%',
            'Eliminated manual configuration for complex automation workflows',
            'Streamlined deployment and access control with enterprise security',
            'Made advanced automation accessible to non-technical users',
            'Integrated enterprise-grade authentication and cloud infrastructure'
        ]
    },
    'libtrack': {
        title: 'LibTrack - Library Management System',
        status: 'Completed',
        description: 'A comprehensive MERN stack library management platform with modern web development practices.',
        features: [
            'Intuitive React-based responsive interface',
            'Robust Express.js and Node.js backend',
            'Efficient book management and user authentication',
            'Real-time data flow with REST APIs',
            'MongoDB integration for scalable data storage'
        ],
        technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST APIs', 'HTML', 'CSS'],
        highlights: [
            'Built comprehensive MERN stack application',
            'Implemented seamless API communication',
            'Ensured real-time data synchronization',
            'Followed modern web development best practices'
        ]
    }
};

// Open career modal
function openCareerModal(careerId) {
    const modal = document.getElementById('projectModal'); // Reuse the same modal
    const modalBody = document.getElementById('modalBody');
    const career = careerData[careerId];
    
    if (!career) return;
    
    modalBody.innerHTML = `
        <div class="modal-career">
            <div class="modal-header">
                <div class="career-title-section">
                    <h2>${career.title}</h2>
                    <h3>${career.company}</h3>
                    <div class="career-meta">
                        <span class="location">${career.location}</span>
                        <span class="duration">${career.duration}</span>
                    </div>
                </div>
            </div>
            <p class="modal-description">${career.description}</p>
            
            <div class="modal-section">
                <h3>Key Responsibilities</h3>
                <ul class="responsibility-list">
                    ${career.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-section">
                <h3>Technologies & Tools</h3>
                <div class="modal-tech-stack">
                    ${career.technologies.map(tech => `<span class="modal-tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div class="modal-section">
                <h3>Key Achievements</h3>
                <ul class="achievement-list">
                    ${career.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Open project modal
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const project = projectData[projectId];
    
    if (!project) return;
    
    modalBody.innerHTML = `
        <div class="modal-project">
            <div class="modal-header">
                <h2>${project.title}</h2>
                <span class="project-status">${project.status}</span>
            </div>
            <p class="modal-description">${project.description}</p>
            
            <div class="modal-section">
                <h3>Key Features</h3>
                <ul class="feature-list">
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-section">
                <h3>Technologies Used</h3>
                <div class="modal-tech-stack">
                    ${project.technologies.map(tech => `<span class="modal-tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div class="modal-section">
                <h3>Key Highlights</h3>
                <ul class="highlight-list">
                    ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close project modal
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeProjectModal();
    }
}

// Mobile navigation toggle
function toggleMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Close mobile menu when clicking on a link
function closeMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    navToggle.addEventListener('click', toggleMobileMenu);
    
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Close mobile menu
            closeMobileMenu();
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const isLightMode = document.documentElement.getAttribute('data-theme') === 'light';
    
    if (window.scrollY > 50) {
        if (isLightMode) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            // Dark mode (default)
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.4)';
        }
    } else {
        if (isLightMode) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
        } else {
            // Dark mode (default)
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.3)';
        }
    }
});

// Courses modal functions
function openCoursesModal() {
    const modal = document.getElementById('coursesModal');
    const modalBody = document.getElementById('coursesModalBody');
    
    let content = `
        <div class="courses-content">
            <h2><i class="fas fa-graduation-cap"></i> Academic Courses</h2>
            <p class="courses-intro">Comprehensive coursework spanning Computer Science core curriculum, Mathematics foundations, Statistics specialization, and diverse breadth requirements.</p>
    `;
    
    Object.entries(coursesData).forEach(([key, category]) => {
        content += `
            <div class="course-category">
                <h3 class="category-title">
                    <i class="${category.icon}"></i>
                    ${category.title}
                </h3>
                <div class="courses-grid">
        `;
        
        category.courses.forEach(course => {
            content += `
                <div class="course-item">
                    <div class="course-code">${course.code}</div>
                    <div class="course-name">${course.name}</div>
                </div>
            `;
        });
        
        content += `
                </div>
            </div>
        `;
    });
    
    content += '</div>';
    
    modalBody.innerHTML = content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeCoursesModal() {
    const modal = document.getElementById('coursesModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('coursesModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeCoursesModal();
    }
});

// Scholarships modal functions
function openScholarshipsModal() {
    const modal = document.getElementById('scholarshipsModal');
    const modalBody = document.getElementById('scholarshipsModalBody');
    
    let content = `
        <div class="scholarships-content">
            <h2><i class="fas fa-trophy"></i> Academic Scholarships</h2>
            <p class="scholarships-intro">Recognition of academic excellence and outstanding achievement throughout my studies at the University of Toronto.</p>
            <div class="scholarships-grid">
    `;
    
    scholarshipsData.forEach(scholarship => {
        content += `
            <div class="scholarship-item">
                <div class="scholarship-header">
                    <i class="${scholarship.icon}"></i>
                    <h3>${scholarship.name}</h3>
                </div>
                <p class="scholarship-description">${scholarship.description}</p>
            </div>
        `;
    });
    
    content += `
            </div>
        </div>
    `;
    
    modalBody.innerHTML = content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeScholarshipsModal() {
    const modal = document.getElementById('scholarshipsModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('scholarshipsModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeScholarshipsModal();
    }
});

// Dark mode functionality
function toggleDarkMode() {
    const html = document.documentElement;
    const darkModeIcon = document.getElementById('darkModeIcon');
    
    if (html.getAttribute('data-theme') === 'light') {
        // Switch to dark mode (remove attribute to use CSS default)
        html.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        darkModeIcon.className = 'fas fa-sun';
        updateLogos('dark');
    } else {
        // Switch to light mode
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        darkModeIcon.className = 'fas fa-moon';
        updateLogos('light');
    }
}

// Update logos based on theme
function updateLogos(theme) {
    const uoftLogos = document.querySelectorAll('.uoft-logo, .edu-logo');
    
    uoftLogos.forEach(logo => {
        if (theme === 'dark') {
            logo.src = 'images/Utoronto_coa.svg.png';
        } else {
            logo.src = 'images/University_of_Toronto-Logo.wine.svg';
        }
    });
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const darkModeIcon = document.getElementById('darkModeIcon');
    
    if (savedTheme === 'light') {
        // Only use light mode if explicitly saved
        document.documentElement.setAttribute('data-theme', 'light');
        darkModeIcon.className = 'fas fa-moon';
        updateLogos('light');
    } else {
        // Default to dark mode (no attribute needed since CSS defaults to dark)
        document.documentElement.removeAttribute('data-theme');
        darkModeIcon.className = 'fas fa-sun';
        updateLogos('dark');
        if (!savedTheme) {
            localStorage.setItem('theme', 'dark');
        }
    }
});