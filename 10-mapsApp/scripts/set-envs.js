const { writeFileSync, readFileSync, mkdirSync } = require("fs");
require("dotenv").config();

const targerPath = `./src/environments/environment.ts`;
const envConfigFile = `export const environment = {
  mapbox_key: "${process.env["MAPBOX_KEY"]}",
};
`;
mkdirSync("src/environments", { recursive: true });
writeFileSync(targerPath, envConfigFile);
