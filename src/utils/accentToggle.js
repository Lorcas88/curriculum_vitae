export const initAccentToggle = () => {
  const toggleBtn = $("#color-toggle");

  // Define background pairs (Dark / Light)
  const backgrounds = [
    {
      dark: "linear-gradient(135deg, #00082e 0%, #764ba2 100%)",
      light: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    },
    {
      dark: "linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)",
      light: "linear-gradient(135deg, #E0F7FA 0%, #B2EBF2 100%)",
    },
    {
      dark: "linear-gradient(135deg, #134E5E 0%, #71B280 100%)",
      light: "linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)",
    },
    {
      dark: "linear-gradient(135deg, #23074d 0%, #cc5333 100%)",
      light: "linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)",
    },
    {
      dark: "linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)",
      light: "linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)",
    },
  ];

  let currentIndex = 0;

  toggleBtn.on("click", function () {
    currentIndex = (currentIndex + 1) % backgrounds.length;
    updateBackground(backgrounds[currentIndex]);
  });

  function updateBackground(bgPair) {
    // Update both custom variables
    document.documentElement.style.setProperty("--custom-bg-dark", bgPair.dark);
    document.documentElement.style.setProperty(
      "--custom-bg-light",
      bgPair.light
    );
  }
};
