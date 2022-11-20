import { Components, Theme } from "@mui/material/styles";

/**
 * @description The global override config for all the components that will be imported from `@mui/material`.
 * @note This can obviously be overridden at component level, but this gets applied to all the components under `<ThemeProvider>`
 */
export const componentOverride: Components<Omit<Theme, "components">> = {
  // Add your custom config here
};
