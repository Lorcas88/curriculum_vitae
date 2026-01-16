export const experienceCards = (data) => {
  const html = `
    <div class="col-12">
      <div class="card border-0 bg-body-tertiary bg-opacity-10 shadow-sm backdrop-filter">
        <div class="card-body p-4">
          <div class="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3">
            <div>
              <h4 class="card-title text-body-emphasis fw-bold mb-1">${
                data.role
              }</h4>
              <h5 class="card-subtitle text-primary mb-2">${data.company}</h5>
            </div>
            <div class="d-flex align-items-center gap-3">
              <span class="badge bg-primary bg-opacity-25 text-primary-emphasis rounded-pill px-3 py-2">
                ${data.period.from} - ${data.period.to}
              </span>
              <button class="btn btn-sm btn-outline-secondary border-0 toggle-experience">
                <i class="bi bi-chevron-up"></i>
              </button>
            </div>
          </div>
          <div class="experience-content">
            ${data.responsibilities
              .map(
                (element) =>
                  `<div class="card-text text-body-secondary">${element}</div>`
              )
              .join("")}
            <ul class="list-inline mb-0 mt-3">
                ${data.skills
                  .map(
                    (element) =>
                      `<li class="list-inline-item">
                        <span
                          class="badge bg-body-secondary bg-opacity-50 text-body-secondary border border-body-secondary border-opacity-25"
                        >${element}</span>
                    </li>`
                  )
                  .join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;

  return $(html);
};
