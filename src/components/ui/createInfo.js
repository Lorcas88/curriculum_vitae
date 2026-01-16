export const createInfo = ({ item }) => {
  const { icon, key, value, type = "none" } = item;
  const isLink = type !== "none";

  const tag = isLink ? "a" : "span";
  const text = type === "normal" ? key : value;

  const hrefMap = {
    mail: `mailto:${value}`,
    phone: `tel:${value}`,
    normal: value,
  };

  const attrs = isLink
    ? `
        href="${hrefMap[type]}"
        ${type === "normal" ? 'target="_blank" rel="noopener noreferrer"' : ""}
      `
    : "";

  const html = `
    <div
      class="d-flex align-items-center gap-3 p-3 rounded-3 bg-body-tertiary bg-opacity-10 border border-body-secondary border-opacity-10 shadow-sm"
      style="backdrop-filter: blur(5px)"
    >
      <div
        class="d-flex align-items-center justify-content-center bg-primary bg-gradient text-white rounded-circle"
        style="width: 50px; height: 50px; flex-shrink: 0"
      >
        <i class="bi bi-${icon} fs-4"></i>
      </div>

      <div class="d-flex flex-column">
        <span
          class="text-body-secondary small text-uppercase fw-bold"
          style="letter-spacing: 1px"
        >
          ${key}
        </span>

        <${tag}
          class="text-decoration-none text-body-emphasis${
            isLink ? " hover-effect" : ""
          }"
          ${attrs}
        >
          ${text}
        </${tag}>
      </div>
    </div>
  `;

  return $(html);
};
