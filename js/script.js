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

for (let i = 0; i < projects.length; i++) {
  // Catch link string
  const link = projects[i].websiteLink;

  projectContainer.innerHTML += `
    <div data-aos="fade-up" class="col-lg-4 col-sm-12 col-md-6">
            <button type="button" class="modal-btn" data-bs-toggle="modal" data-bs-target="#${projects[i].modalNr}">
              <div class="col-lg-4 col-sm-12 col-md-6">
                <img loading="lazy" src="${projects[i].image}" alt="${projects[i].name}" />
              </div>
            </button>
            <div class="modal fade" id="${projects[i].modalNr}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <img src="${projects[i].image}" alt="${projects[i].name}" />
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${projects[i].name}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">${projects[i].content}</div>
                  <div class="modal-footer">
                    <a class="cta ${link ? link : "missing"}" href="${projects[i].websiteLink}" target="_blank" rel="noopener noreferrer">View site</a>
                    <a class="cta cta-github" href="${projects[i].githubLink}" target="_blank" rel="noopener noreferrer">View code</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `;
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
