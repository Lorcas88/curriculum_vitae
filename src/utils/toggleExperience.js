export const initExperienceToggles = () => {
  $(".toggle-experience").on("click", function () {
    const $btn = $(this);
    const $cardBody = $btn.closest(".card-body");
    const $content = $cardBody.find(".experience-content");
    const $icon = $btn.find("i");

    // Toggle content visibility
    $content.slideToggle(300, function () {
      // Rotate icon logic or class toggle
      if ($content.is(":visible")) {
        $icon.removeClass("bi-chevron-down").addClass("bi-chevron-up");
      } else {
        $icon.removeClass("bi-chevron-up").addClass("bi-chevron-down");
      }
    });
  });
};
