document.addEventListener("DOMContentLoaded", () => {
    const workContainer = document.querySelector(".work__container");

    const projects = [
        {
            company: 'USAA',
            companyLogo: 'https://cdn.brandfetch.io/id7nXFaoJg/w/718/h/718/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B',
            color: '#12385C',
            role: 'Frontend Developer',
            date: 'Jan 2021 - Present',
            desc: 'Worked on various front-end projects using React.',
            descBullets: [
                'Developed new features using React.',
                'Collaborated with cross-functional teams.',
                'Optimized web performance for better user experience.'
            ],
        },
        {
            company: 'AMEX',
            companyLogo: 'https://cdn.brandfetch.io/id5WXF6Iyd/theme/dark/idAyOxP8-l.svg?c=1dxbfHSJFAPEGdCLU4o5B',
            color: '#006FCF',
            role: 'Frontend Developer',
            date: 'Jan 2021 - Present',
            desc: 'Worked on various front-end projects using React.',
            descBullets: [
                'Developed new features using React.',
                'Collaborated with cross-functional teams.',
                'Optimized web performance for better user experience.'
            ],
        },
        {
            company: 'Arvest Bank',
            companyLogo: 'https://cdn.brandfetch.io/idGIe3oexM/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B',
            color: '#00457C',
            role: 'Frontend Developer',
            date: 'Jan 2021 - Present',
            desc: 'Worked on various front-end projects using React.',
            descBullets: [
                'Developed new features using React.',
                'Collaborated with cross-functional teams.',
                'Optimized web performance for better user experience.'
            ],
        },
        {
            company: 'OYO Rooms',
            companyLogo: 'https://cdn.brandfetch.io/idSXt7tZEr/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B',
            color: '#EE2A24',
            role: 'Frontend Developer',
            date: 'Jan 2021 - Present',
            desc: 'Worked on various front-end projects using React.',
            descBullets: [
                'Developed new features using React.',
                'Collaborated with cross-functional teams.',
                'Optimized web performance for better user experience.'
            ],
        },
        {
            company: 'Idea',
            companyLogo: 'https://cdn.brandfetch.io/idN6iTSgKh/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B',
            color: '#ED2740',
            role: 'Junior Software Engineer',
            date: 'Oct 2017 - Nov 2019',
            desc: 'Contributed to customer management system development, optimized SQL queries, and created REST APIs.',
            descBullets: [
                'Developed REST APIs for mobile integrations and real-time subscription management.',
                'Utilized Redis for caching to improve response time and reduce database load.',
                'Assisted in CI/CD pipeline configuration using Jenkins and Maven.'
            ],
        },
    ];

    // Function to generate the bullet points
    function generateDescBullets(descBullets, isDark) {
        return descBullets
            .map((bullet) => {
                return `<li class="${isDark ? 'dark-mode-text' : ''}">${bullet}</li>`;
            })
            .join('');
    }

    // Function to create the work section dynamically
    function createWorkSection(projects, isDark = false) {
        projects.forEach((project) => {
            // Create work card (either light or dark mode)
            const workCard = document.createElement('div');
            workCard.classList.add(isDark ? 'experience-card-dark' : 'experience-card');
            
            // Create banner
            const banner = document.createElement('div');
            banner.classList.add('experience-banner');
            banner.style.background = project.color;
            
            // Add blurred overlay to banner
            const blurredDiv = document.createElement('div');
            blurredDiv.classList.add('experience-blurred_div');
            banner.appendChild(blurredDiv);
            
            // Add company name to the banner
            const companyDiv = document.createElement('div');
            companyDiv.classList.add('experience-div-company');
            const companyName = document.createElement('h5');
            companyName.classList.add('experience-text-company');
            companyName.innerText = project.company;
            companyDiv.appendChild(companyName);
            banner.appendChild(companyDiv);
            
            // Add company logo to the banner
            const companyLogo = document.createElement('img');
            companyLogo.classList.add('experience-roundedimg');
            companyLogo.src = project.companyLogo;
            companyLogo.alt = project.company;
            banner.appendChild(companyLogo);
            
            workCard.appendChild(banner);

            // Create details section
            const details = document.createElement('div');
            details.classList.add('experience-text-details');
            
            // Add role and date
            const role = document.createElement('h5');
            role.classList.add(isDark ? 'experience-text-role dark-mode-text' : 'experience-text-role');
            role.innerText = project.role;
            details.appendChild(role);
            
            const date = document.createElement('h5');
            date.classList.add(isDark ? 'experience-text-date dark-mode-text' : 'experience-text-date');
            date.innerText = project.date;
            details.appendChild(date);
            
            // Add description
            const description = document.createElement('p');
            description.classList.add(isDark ? 'experience-text-desc dark-mode-text' : 'experience-text-desc');
            description.innerText = project.desc;
            details.appendChild(description);
            
            // Add bullet points
            const bulletList = document.createElement('ul');
            bulletList.innerHTML = generateDescBullets(project.descBullets, isDark);
            details.appendChild(bulletList);

            workCard.appendChild(details);

            // Add click event to toggle visibility of details
            workCard.addEventListener('click', () => {
                // Hide all details first
                const allDetails = document.querySelectorAll('.experience-text-details');
                allDetails.forEach(detail => detail.style.display = 'none');
                
                // Toggle clicked panel details visibility
                if (details.style.display === 'none' || details.style.display === '') {
                    details.style.display = 'block';
                } else {
                    details.style.display = 'none';
                }
            });

            // Append the work card to the work container
            workContainer.appendChild(workCard);
        });
    }

    // Call the function to generate the work section
    createWorkSection(projects);
});
