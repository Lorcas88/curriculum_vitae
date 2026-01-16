import { translateTitles } from "../../utils/helpers.js";

export const successForm = ($container, data) => {
  const rows = Object.entries(data)
    .map(
      ([key, value]) => `
        <tr>
          <th scope="row" class="text-capitalize">${translateTitles(key)}</th>
          <td>${value}</td>
        </tr>
      `
    )
    .join("");

  const html = `
    <div class="d-flex justify-content-center mb-3">
      <i class="bi bi-check-circle text-success big-icon"></i>
    </div>
    <h3 class="mb-4 text-center">
      Formulario enviado con éxito
    </h3>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Campo</th>
          <th scope="col">Contenido</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;

  $container.empty().append($(html));
};
