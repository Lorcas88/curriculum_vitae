import { sections } from "./data/data.js";
import { createInput } from "./components/ui/createInput.js";
import { createInfo } from "./components/ui/createInfo.js";
import { experienceCards } from "./components/ui/createExperienceCards.js";
import { createEducationCards } from "./components/ui/createEducationCards.js";
import { createSkills } from "./components/ui/createSkills.js";
import { initContactForm } from "./components/forms/createContactForm.js";
import { initExperienceToggles } from "./utils/toggleExperience.js";
import { initAccentToggle } from "./utils/accentToggle.js";
import { initThemeToggle } from "./utils/themeToggle.js";
import { initScrollReveal } from "./utils/scrollReveal.js";

$(document).ready(function () {
  // Initialize Theme Toggle
  initThemeToggle();
  // Initialize Scroll Reveal
  initScrollReveal();
  // Initialize Accent Toggle
  initAccentToggle();

  // Navbar fill
  const $ul = $("nav ul");
  sections.forEach((section) => {
    $ul.append(`
      <li class="nav-item">
        <a class="nav-link" href="#${section.id}">${section.label}</a>
      </li>
    `);
  });

  // Titles fill
  sections.forEach((section, index) => {
    if (index === 0) {
      $(`#${section.id} h1`).html(sections[index].items.name);
    } else {
      $(`#${section.id} h2`).html(sections[index].label);
    }
  });

  // ----------------------- About fill -----------------------
  $("#about p").html(sections[0].items.professional_description);

  // ----------------------- Information contact fill -----------------------
  // Dynamic filling based on type of the link
  const $infoContainer = $("#contact-info-container");
  sections[1].items.forEach((item) => {
    $infoContainer.append(createInfo({ item }));
  });

  // Form contact fill
  sections[1].inputs.forEach((input) => {
    $("#contact-form .row").append(createInput(input));
  });

  // Form handling
  const $form = $("#contact-form");
  initContactForm($form);

  // ----------------------- Experience fill -----------------------
  sections[2].items.forEach((item) => {
    $("#experience .row").append(experienceCards(item));
  });

  // Initialize toggles
  initExperienceToggles();

  // ----------------------- Education fill -----------------------
  sections[3].items.forEach((item) => {
    $("#education .row").append(createEducationCards(item));
  });

  // ----------------------- Skills fill -----------------------
  createSkills(sections[4].items).forEach(($card) => {
    $("#skills .row").append($card);
  });
});
