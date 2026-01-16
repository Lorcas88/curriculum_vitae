import { translateTitles } from "../../utils/helpers.js";

export const createSkills = (data) => {
  const { technical, softSkills } = data;
  const cards = [];

  const createCard = (title, items, isSoft = false) => {
    const badges = items
      .map(
        (item) => `
      <span class="badge ${
        isSoft
          ? "bg-success bg-opacity-25 text-success-emphasis border-success"
          : "bg-primary bg-opacity-25 text-primary-emphasis border-primary"
      } border border-opacity-25 rounded-pill px-3 py-2 m-1">
        ${item}
      </span>
    `
      )
      .join("");

    const html = `
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 border-0 bg-body-tertiary bg-opacity-10 shadow-sm backdrop-filter">
          <div class="card-body p-4">
            <h5 class="card-title text-body-emphasis fw-bold mb-3">${translateTitles(
              title
            )}</h5>
            <div class="d-flex flex-wrap gap-2">
              ${badges}
            </div>
          </div>
        </div>
      </div>
    `;

    cards.push($(html));
  };

  // Technical Skills
  Object.entries(technical).forEach(([key, values]) => {
    createCard(key, values);
  });

  // Soft Skills
  if (softSkills && softSkills.length > 0) {
    createCard("Habilidades Blandas", softSkills, true);
  }

  return cards; // Return an jQuery objects array
};
