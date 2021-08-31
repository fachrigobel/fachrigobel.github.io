window.addEventListener("DOMContentLoaded", () => {
    const experienceItems = document.querySelector(".experience-items");
    const projectsElement = document.querySelector("#projects");
    const footer = document.querySelector("footer");

    footer.lastElementChild.innerHTML = `Handcrafted &copy by Fachri Gobel<br>Last Update: ${document.lastModified}`;


    fetch("./src/data/experience.json")
    .then(response => response.json())
    .then(responseJSON => {
        responseJSON.forEach(data => {
            const itemEXP = document.createElement("div");
            itemEXP.className = "item-exp";
            itemEXP.innerHTML = `
                <div class="dot"></div>
                <p>
                    <span>${data.name}</span> <br />${data.year}
                    <br />${data.organizer}
                </p>
            `;
            experienceItems.appendChild(itemEXP);
        });
    });

    fetch("./src/data/recent-projects.json")
    .then(response => response.json())
    .then(responseJSON => {
        responseJSON.forEach(data => {
            const project = document.createElement("div");
            project.className = "project d-flex";
            project.innerHTML = `
            <div class="left-item">
                <img src="${data.image}" />
            </div>
            <div class="right-item">
                <h4>${data.name}</h4>
                <p>${data.description}</p>
                <div class="project-languages">
                    <p>Languages:</p>
                    <div class="language">
                    </div>
                </div>
            </div>
            `;
            projectsElement.appendChild(project);

            const lang = document.querySelectorAll(".language");
            data.languages.forEach(language => {
                const img = document.createElement("img");
                img.setAttribute("src", language);
                lang[lang.length-1].appendChild(img);
            })
        });
    })
});