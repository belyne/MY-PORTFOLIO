document.addEventListener('DOMContentLoaded', () => {
    fetch('https://your-backend-service.com/api/projects')
        .then(response => response.json())
        .then(data => {
            const portfolioContainer = document.getElementById('portfolio-container');
            data.projects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.className = 'project';
                projectElement.innerHTML = `
                    <h2>${project.title}</h2>
                    <p>${project.description}</p>
                `;
                portfolioContainer.appendChild(projectElement);
            });
        })
        .catch(error => console.error('Error fetching projects:', error));
});
