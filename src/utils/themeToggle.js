export const initThemeToggle = () => {
  const toggleBtn = $("#theme-toggle");
  const icon = toggleBtn.find("i");
  const html = $("html");

  let currentTheme = "dark";
  html.attr("data-bs-theme", currentTheme);
  updateIcon(currentTheme);

  toggleBtn.on("click", function () {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    html.attr("data-bs-theme", currentTheme);
    updateIcon(currentTheme);
  });

  function updateIcon(theme) {
    if (theme === "dark") {
      icon.removeClass("bi-moon-stars-fill").addClass("bi-sun-fill");
    } else {
      icon.removeClass("bi-sun-fill").addClass("bi-moon-stars-fill");
    }
  }
};
