class ColorThemes {
  constructor() {
    this.themes = [
      {
        name: "Dark Grey",
        value: "dark_grey",
        default: true,
      },
      {
        name: "Dark Blue",
        value: "dark_blue",
        default: false,
      },
      {
        name: "Dark Green",
        value: "dark_green",
        default: false,
      },
      {
        name: "Light Green",
        value: "light_green",
        default: false,
      },
      {
        name: "Light Pink",
        value: "light_pink",
        default: false,
      },
      {
        name: "Dark Test",
        value: "dark_test",
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
    root.style.setProperty("--c1", "var(--" + theme + "_c1)");
    root.style.setProperty("--c2", "var(--" + theme + "_c2)");
    root.style.setProperty("--c3", "var(--" + theme + "_c3)");
    root.style.setProperty("--c4", "var(--" + theme + "_c4)");
    root.style.setProperty("--c5", "var(--" + theme + "_c5)");
  };

  setLocalstorage(color_scheme) {
    localStorage.setItem("color_scheme", color_scheme);
  }

  getLocalstorage() {
    return localStorage.getItem("color_scheme");
  }
}

export default ColorThemes;
