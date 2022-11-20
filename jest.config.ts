import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "\\.(css|less)$": "identity-obj-proxy",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
};

export default jestConfig;
