// Project data
const projects = [
    {
        company: "Austin Independent School District",
        companyLogo: "assets/img/AISD.png",
        color: '#A94442',
        role: "Data Engineer/Analyst",
        date: "Jan 2023 - Present",
        desc: "",
        descBullets: [
            "Engineered end-to-end ETL pipelines using AWS S3, Lambda, Snowpipe, dbt, and Python, automating ingestion of SIS, attendance, health, finance, and assessment datasets into Snowflake.",
            "Built scalable Snowflake Tasks & Streams workflows to orchestrate incremental loading and transformation processes, reducing manual intervention by 70%.",
            "Developed 20+ BI dashboards (Power BI, Tableau, QuickSight) with optimized SQL workloads improving query performance by 40-60% and minimizing warehouse compute costs.",
            "Implemented data quality and reconciliation frameworks using Python, PySpark, SQL, and Alteryx, improving downstream reporting accuracy by ~70%.",
            "Designed dimensional data marts for student health, finance, and performance analytics supporting district-wide reporting across 130+ campuses and saving ~300 hours/year through automation."
        ]
    },
    {
        company: "Airtel",
        companyLogo: "assets/img/airtel-logo.svg",
        color: '#FF0000',
        role: "Data Engineer",
        date: "Jan 2019 - Jun 2021",
        desc: "",
        descBullets: [
            "Built large-scale ETL pipelines using Azure Data Factory, ingesting customer, usage, and network data into Azure Data Lake Storage (ADLS) for analytics consumption.",
            "Engineered transformation frameworks in Azure Databricks (PySpark) to process billions of telecom records, creating analysis-ready aggregates for churn, segmentation, and usage KPIs.",
            "Designed scalable dimensional data marts for Customer, Usage, and Network domains using star schema modeling, improving cross-team metric consistency and BI performance.",
            "Optimized ADF data flows and Databricks processing tasks, reducing pipeline latency by 35% and long-running job execution times by 30-40%, enabling faster operational reporting.",
            "Delivered clean analytical datasets powering Power BI dashboards for churn monitoring, revenue KPIs, customer segmentation, and network performance analytics, reducing manual effort by 40%."
        ]
    }
];const companyButtons = document.querySelectorAll('.company-button');
const projectList = document.getElementById('project-list');

// Function to render selected company job experience
function renderProject(index) {
    const project = projects[index];
    projectList.innerHTML = ''; // Clear existing content

    // Create project details container
    const projectDiv = document.createElement('div');
    projectDiv.style.padding = '20px';
    projectDiv.style.backgroundColor = '#f9f9f9';
    projectDiv.style.borderLeft = `10px solid ${project.color}`;
    projectDiv.style.borderRadius = '5px';

    // Add company logo and details
    const companyLogo = document.createElement('img');
    companyLogo.src = project.companyLogo;
    companyLogo.alt = project.company;
    companyLogo.style.width = '50px';
    companyLogo.style.height = '50px';
    projectDiv.appendChild(companyLogo);

    const companyName = document.createElement('h3');
    companyName.innerText = project.company;
    projectDiv.appendChild(companyName);

    const role = document.createElement('p');
    role.innerText = `${project.role} | ${project.date}`;
    projectDiv.appendChild(role);

    const description = document.createElement('p');
    description.innerText = project.desc;
    projectDiv.appendChild(description);

    // List the description bullets
    const descList = document.createElement('ul');
    descList.style.listStyleType = 'disc';  // Add bullet points to the list
    descList.style.marginLeft = '20px';  // Add some left margin for better indentation

    project.descBullets.forEach(bullet => {
        const listItem = document.createElement('li');
        listItem.innerText = bullet;
        descList.appendChild(listItem);
    });

    projectDiv.appendChild(descList);

    // Append the project div to the project list
    projectList.appendChild(projectDiv);
}

// Handle company button clicks
companyButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Remove the selected class from all buttons
        companyButtons.forEach(btn => {
            btn.classList.remove('selected');
            // Reset the background color of the highlight
            btn.style.setProperty('--highlight-color', 'transparent');
        });

        // Add the selected class to the clicked button
        button.classList.add('selected');

        // Set the company color dynamically
        const companyColor = projects[index].color;
        button.style.setProperty('--highlight-color', companyColor); // Update the highlighter's color

        // Render the job details for the clicked company
        renderProject(index);
    });
});

// Initial render for the first company
renderProject(0);
companyButtons[0].classList.add('selected'); // Mark first company as selected by default
companyButtons[0].style.setProperty('--highlight-color', projects[0].color); // Set the first company color
