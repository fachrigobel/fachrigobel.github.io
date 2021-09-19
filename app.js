window.addEventListener("DOMContentLoaded", () => {
    const experienceItems = document.querySelector(".experience-items");
    const projectsElement = document.querySelector("#projects");
    const footer = document.querySelector("footer");
    const fotoProfil = document.querySelector("#foto-profil");

    const imgSource = [
        "photo_2021-07-28_19-18-45.jpg", 
        "photo_2021-07-28_19-18-49.jpg",
        "IMG_20210724_225845_329.jpg"
    ];
    let index = 0;

    footer.lastElementChild.innerHTML = `Handcrafted &copy by Fachri Gobel<br>Last Update: ${document.lastModified}`;

    setInterval (async function(){
        if (index === imgSource.length) {
            index = 0;
        }
        fotoProfil.style.backgroundImage = `url(./res/${imgSource[index]}`;
        index++;
    } , 3000);


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