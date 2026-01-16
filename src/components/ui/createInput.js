export const createInput = ({ label, type, name, placeholder }) => {
  const field =
    type === "textarea"
      ? `
        <textarea
          class="form-control bg-transparent text-body-emphasis"
          id="${name}"
          placeholder="${placeholder}"
          required
          style="height:150px"
        ></textarea>
      `
      : `
        <input
          type="${type}"
          class="form-control bg-transparent text-body-emphasis"
          id="${name}"
          placeholder="${placeholder}"
          required
        />
      `;

  const html = `
    <div class="col-12">
      <div class="form-floating">
        ${field}
        <label for="${name}" class="text-body-secondary">
          ${label}
        </label>
        <div class="feedback"></div>
      </div>
    </div>
  `;

  return $(html);
};
