export const themeConfig = {
  token: {
    colorPrimary: "#800080",
    colorLink: "#800080",
    colorInfo: "#8d6c17", // Secondary amber (used for default buttons)
    colorLinkHover: "#800080b3", // 70% opacity
    colorText: "#333",
    colorBorder: "#d9d9d9",
    colorPrimaryBorder: "#800080",
    borderRadius: 6,

    colorIcon: "#800080", // Add this for default icons
    colorIconHover: "#9a009a", // Add this for hover state
  },
  components: {
    Button: {
      colorPrimary: "#800080",
      colorPrimaryHover: "#800080b3", // 70% opacity on hover
      colorPrimaryActive: "#800080", // Solid on click
      colorTextLightSolid: "#ffffff",
      controlHeight: 40,
      fontWeight: 500,
      colorText: "#800080", // This affects text buttons
    },
    Input: {
      hoverBorderColor: "#800080",
      activeBorderColor: "#800080",
      activeShadow: "0 0 0 2px rgba(128, 0, 128, 0.2)",
    },
    Checkbox: {
      colorPrimary: "#800080",
    },
    Menu: {
      itemColor: "#800080", // Menu item icons
      itemHoverColor: "#9a009a", // Menu item hover
      itemSelectedColor: "#800080", // Selected menu item
    },
  },
};
