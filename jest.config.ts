import type { JestConfigWithTsJest } from "ts-jest";
// import { pathsToModuleNameMapper } from "ts-jest/dist/config";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "^.+\\.css$": "jest-transform-css",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  // moduleNameMapper: pathsToModuleNameMapper({
  //   "^.+\\.svg$": ["<rootDir>/src/assets/__mocks__/mock.ts"],
  // }),
};

export default jestConfig;
