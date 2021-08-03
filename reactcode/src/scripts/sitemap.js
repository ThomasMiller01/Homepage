// require("@babel/register")({
//   extends: "babel.config.json",
// });

require.extensions[".scss"] = () => {};
require.extensions[".css"] = () => {};

const router = require("../components/router").default;
const Sitemap = require("../assets/sitemap").default;

const filterConfig = {
  isValid: false,
  rules: [/\/login/, /\/private\/\*/],
};

// Setup some random projects
const alphabet = "abc".split("");
const lotOfNames = [];

function produceItem(arr, char) {
  return arr.map((c) => {
    lotOfNames.push(`${c}-${char}`);
  });
}

alphabet.map((c) => produceItem(alphabet, c));

const projects = {
  projectName: lotOfNames,
  achievement: lotOfNames,
};

const paramsConfig = {
  "/projects/:projectName": [
    { projectName: "hello-world" },
    { projectName: "second-project" },
    { projectName: ["third-project", "fourth-project"] },
    projects,
  ],
  "/projects/:projectName/view": [
    { projectName: "hello-world" },
    { projectName: "second-project" },
    { projectName: ["third-project", "fourth-project"] },
    projects,
  ],
  "/projects/:projectName/achievements/:achievement": [
    { projectName: "hello-world" },
    { projectName: "second-project" },
    { projectName: ["third-project", "fourth-project"] },
    projects,
  ],
};

new Sitemap(router)
  .filterPaths(filterConfig)
  .applyParams(paramsConfig)
  .build("https://thomasmiller.info", { limitCountPaths: 10000 })
  .save("./public/static/sitemap/sitemap.xml", "/static/");
