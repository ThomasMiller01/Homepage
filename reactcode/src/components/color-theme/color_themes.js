class ColorThemes {
  constructor() {
    this.themes = [
      {
        name: "Normal",
        value: "main",
        default: true,
      },
      {
        name: "Darkmode",
        value: "darkmode",
        default: false,
      },
      {
        name: "Pink World",
        value: "pink_world",
        default: false,
      },
      {
        name: "Test Mode",
        value: "test_mode",
        default: false,
      },
    ];
  }

  update = () => {
    let color_theme_value = this.getLocalstorage();
    if (
      this.themes.filter((theme) => theme.value === color_theme_value)
        .length !== 0
    ) {
      this.setTheme(color_theme_value);
    } else {
      let default_theme = this.themes.filter(
        (theme) => theme.default === true
      )[0];
      this.setTheme(default_theme.value);
    }
  };

  set = (theme) => {
    this.setLocalstorage(theme);
    this.update();
  };

  setTheme = (theme) => {
    let root = document.documentElement;
    root.style.setProperty(
      "--background-main",
      "var(--" + theme + "_background-main)"
    );
    root.style.setProperty(
      "--background-second",
      "var(--" + theme + "_background-second)"
    );
    root.style.setProperty(
      "--background-third",
      "var(--" + theme + "_background-third)"
    );
    root.style.setProperty(
      "--background-fourth",
      "var(--" + theme + "_background-fourth)"
    );
    root.style.setProperty(
      "--background-fifth",
      "var(--" + theme + "_background-fifth)"
    );
    root.style.setProperty(
      "--background-top",
      "var(--" + theme + "_background-top)"
    );
    root.style.setProperty(
      "--background-top-border",
      "var(--" + theme + "_background-top-border)"
    );
    root.style.setProperty(
      "--background-light",
      "var(--" + theme + "_background-light)"
    );
    root.style.setProperty("--link-active", "var(--" + theme + "_link-active)");
    root.style.setProperty("--text-main", "var(--" + theme + "_text-main)");
    root.style.setProperty("--text-second", "var(--" + theme + "_text-second)");
    root.style.setProperty("--highlight", "var(--" + theme + "_highlight)");
  };

  setLocalstorage(color_scheme) {
    localStorage.setItem("color_scheme", color_scheme);
  }

  getLocalstorage() {
    return localStorage.getItem("color_scheme");
  }
}

export default ColorThemes;
