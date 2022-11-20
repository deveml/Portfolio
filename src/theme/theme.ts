import { createTheme } from "@mui/material";
import { colorPalette } from "./color-palette";
import { componentOverride } from "./mui-components";
import { typographyConfig } from "./typography";

/**
 * @description The global theme of the application
 */
export const appTheme = createTheme({
  // Add your custom config here
  typography: typographyConfig,
  palette: colorPalette,
  components: componentOverride,
});
