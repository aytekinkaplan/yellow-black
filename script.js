// Style definitions
const styles = `
body, html {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #ECD06F;
    color: #333;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}
.logo {
    font-size: 24px;
    font-weight: bold;
}
nav a {
    margin-left: 20px;
    text-decoration: none;
    color: #333;
}
.main-content {
    display: flex;
    margin-top: 50px;
}
.left-column {
    flex: 1;
    padding-right: 50px;
}
.right-column {
    flex: 1;
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
}
h1 {
    font-size: 60px;
    margin-bottom: 20px;
}
.description {
    font-size: 18px;
    line-height: 1.6;
}
.project {
    margin-bottom: 30px;
}
.project h3 {
    margin: 0;
    font-size: 18px;
}
.project p {
    margin: 5px 0;
    font-size: 14px;
    color: #666;
}
.cta-button {
    display: inline-block;
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 20px;
}
.decorative-element {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background-color: #E9967A;
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    z-index: -1;
}
`;

// Create style element and add it to the page
const styleElement = document.createElement("style");
styleElement.textContent = styles;
document.head.appendChild(styleElement);

// Function to create header
const createHeader = () => {
  const header = document.createElement("header");

  const logo = document.createElement("div");
  logo.className = "logo";
  logo.textContent = "KAPLAN";

  const nav = document.createElement("nav");
  ["WORK", "ABOUT", "SERVICES", "CAREERS", "CONTACT"].forEach((item) => {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = item;
    nav.appendChild(link);
  });

  header.appendChild(logo);
  header.appendChild(nav);
  return header;
};

// Function to create main content
const createMainContent = () => {
  const mainContent = document.createElement("div");
  mainContent.className = "main-content";

  const leftColumn = document.createElement("div");
  leftColumn.className = "left-column";

  const h1 = document.createElement("h1");
  h1.textContent = "Kaplan is a digital design and web technology company.";

  const description = document.createElement("p");
  description.className = "description";
  description.textContent =
    "We're a team of strategists, designers, and web technologists, here to help you find clarity and craft websites and digital products that effectively connect people to meaningful content.";

  leftColumn.appendChild(h1);
  leftColumn.appendChild(description);

  const rightColumn = document.createElement("div");
  rightColumn.className = "right-column";

  const projects = [
    {
      title:
        "A digital marketing website platform for Aytekin Kaplan furniture dealers",
      company: "MURAT ÇORLU",
    },
    {
      title: "Launching and growing an academic publishing brand",
      company: "VAN ACADEMIC",
    },
    {
      title:
        "A multi-site platform to localize a national outdoor conservation nonprofit",
      company: "AYTEKİN LEGACY",
    },
    {
      title: "A social community for outdoor enthusiasts",
      company: "MURAT ÇORLU",
    },
  ];

  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";

    const h3 = document.createElement("h3");
    h3.textContent = project.title;

    const p = document.createElement("p");
    p.textContent = project.company;

    projectDiv.appendChild(h3);
    projectDiv.appendChild(p);
    rightColumn.appendChild(projectDiv);
  });

  const ctaButton = document.createElement("a");
  ctaButton.href = "#";
  ctaButton.className = "cta-button";
  ctaButton.textContent = "SEE MORE WORK";
  rightColumn.appendChild(ctaButton);

  mainContent.appendChild(leftColumn);
  mainContent.appendChild(rightColumn);
  return mainContent;
};

// Function to create decorative element
const createDecorativeElement = () => {
  const element = document.createElement("div");
  element.className = "decorative-element";
  return element;
};

// Function to create the entire page and add it to the DOM
const createPage = () => {
  const container = document.createElement("div");
  container.className = "container";

  container.appendChild(createHeader());
  container.appendChild(createMainContent());

  document.body.appendChild(container);
  document.body.appendChild(createDecorativeElement());
};

// Run when the page is loaded
document.addEventListener("DOMContentLoaded", createPage);
