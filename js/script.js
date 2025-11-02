import { stickyNav } from "./components/stickyNav.js";
import { projects } from "./components/projectsArray.js";
import { customers } from "./components/customersArray.js";
import { validateForm } from "./components/formValidation.js";

window.onscroll = function () {
  stickyNav();
};

// Run form validation only if a form exists on the page
validateForm();

const projectContainer = document.querySelector(".projects__container");

if (projectContainer) {
  const originalIndex = new Map();
  projects.forEach((p, i) => originalIndex.set(p.name, i));

  const priorities = new Map([
    ["Gamehub Remastered", 0],
    ["Lift training app", 1000],
  ]);

  const getPriority = (p) => (priorities.has(p.name) ? priorities.get(p.name) : 100 + (originalIndex.get(p.name) ?? 0));

  const ordered = [...projects].sort((a, b) => getPriority(a) - getPriority(b));

  const journey = document.createElement("div");
  journey.className = "journey";
  projectContainer.innerHTML = "";
  projectContainer.appendChild(journey);

  for (let i = 0; i < ordered.length; i++) {
    const p = ordered[i];
    const side = i % 2 === 0 ? "left" : "right";
    const label = (() => {
      if (p.name === "Gamehub Remastered") return "My first exam";
      if (p.name === "Personalforeningen i Coop Øst") return "My first real project";
      if (p.name === "Lift training app") return "My latest app";
      const fm = new Set(["Tip calculator", "World Countries", "Interactive cards", "Url shortening app", "Multi step form"]);
      if (fm.has(p.name)) return "Frontend Mentor challenge";
      return "";
    })();
    const firstSentence = (() => {
      const idx = p.content.indexOf(".");
      return idx !== -1 ? p.content.slice(0, idx + 1) : p.content;
    })();

    journey.innerHTML += `
      <div data-aos="fade-up" class="journey__item ${side}">
        ${label ? `<span class=\"journey__label\">${label}</span>` : ""}
        <div class="journey__content">
          <img loading="lazy" src="${p.image}" alt="${p.name}" />
          <h3>${p.name}</h3>
          <p>${firstSentence}</p>
          <div class="journey__actions">
            <a class="cta ${p.websiteLink ? "" : "missing"}" href="${p.websiteLink || "#"}" target="_blank" rel="noopener noreferrer">View site</a>
            <a class="cta cta-github" href="${p.githubLink}" target="_blank" rel="noopener noreferrer">View code</a>
          </div>
        </div>
      </div>
    `;
  }
}

// Customers rendering
const customersContainer = document.querySelector(".customers__container");

if (customersContainer) {
  for (let i = 0; i < customers.length; i++) {
    customersContainer.innerHTML += `
      <div data-aos="fade-up" class="col-lg-3 col-md-4 col-sm-6 customers__item">
        <div class="customers__card">
          <img loading="lazy" src="${customers[i].image}" alt="${customers[i].name} logo" onerror="this.style.display='none'; this.parentElement.querySelector('.customers__fallback').style.display='flex';" />
          <div class="customers__fallback">${customers[i].name}</div>
        </div>
        <p class="customers__name">${customers[i].name}</p>
      </div>
    `;
  }
}
