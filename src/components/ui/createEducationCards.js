export const createEducationCards = (data) => {
  const html = `
    <div class="col-12">
      <div class="card border-0 bg-body-tertiary bg-opacity-10 shadow-sm backdrop-filter">
        <div class="card-body p-4">
          <div class="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3">
            <div>
              <h4 class="card-title text-body-emphasis fw-bold mb-1">${
                data.course
              }</h4>
              <h5 class="card-subtitle text-primary mb-2">${
                data.institution
              }</h5>
            </div>
            <div class="d-flex align-items-center gap-3">
              <span class="badge bg-primary bg-opacity-25 text-primary-emphasis rounded-pill px-3 py-2">
                ${data.period}
              </span>
            </div>
          </div>
          <div class="card-text text-body-secondary">
            <ul class="mb-0">
              ${data.details.map((detail) => `<li>${detail}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;

  return $(html);
};
