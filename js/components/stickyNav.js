const nav = document.querySelector(".navbar");
const homeBtn = document.querySelector(".home-btn");
const activeHome = document.querySelector(".active-home");
const activeAbout = document.querySelector(".active-about");
const activeProjects = document.querySelector(".active-projects");
const activeContact = document.querySelector(".active-contact");
const activeCertificates = document.querySelector(".active-certificates");
const h2 = document.querySelector(".extra-padding-about-h2 h2");
const navCollapse = document.querySelector(".navbar-collapse");

const sticky = nav.offsetTop;

export function stickyNav() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

homeBtn.onclick = function () {
  activeAbout.classList.remove("active");
  activeProjects.classList.remove("active");
  activeContact.classList.remove("active");
  if (activeCertificates) activeCertificates.classList.remove("active");
  navCollapse.classList.remove("show");
};

activeHome.onclick = function () {
  activeProjects.classList.add("active");
  h2.style.padding = "100px 0px 0px 0px";
  navCollapse.classList.remove("show");
};

activeAbout.onclick = function () {
  activeAbout.classList.add("active");
  activeProjects.classList.remove("active");
  activeContact.classList.remove("active");
  if (activeCertificates) activeCertificates.classList.remove("active");
  h2.style.padding = "0px";
  navCollapse.classList.remove("show");
};

activeProjects.onclick = function () {
  activeProjects.classList.add("active");
  activeAbout.classList.remove("active");
  activeContact.classList.remove("active");
  if (activeCertificates) activeCertificates.classList.remove("active");
  h2.style.padding = "100px 0px 0px 0px";
  navCollapse.classList.remove("show");
};

activeContact.onclick = function () {
  activeContact.classList.add("active");
  activeProjects.classList.remove("active");
  activeAbout.classList.remove("active");
  if (activeCertificates) activeCertificates.classList.remove("active");
  h2.style.padding = "100px 0px 0px 0px";
  navCollapse.classList.remove("show");
};

if (activeCertificates) {
  activeCertificates.onclick = function () {
    activeCertificates.classList.add("active");
    activeProjects.classList.remove("active");
    activeAbout.classList.remove("active");
    activeContact.classList.remove("active");
    h2.style.padding = "100px 0px 0px 0px";
    navCollapse.classList.remove("show");
  };
}
