import { StyledEngineProvider, ThemeProvider, Typography } from "@mui/material";
import { lazy, Suspense } from "react";
import { FallBack } from "./components/Fallback";
import { appTheme } from "./theme/theme";

/**
 * @description Lazy loading fonts so that the render will not be blocked
 */
const LazyFontLoader = lazy(() => import("./theme/FontLoader"));

function App() {
  return (
    <Suspense fallback={<FallBack />}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={appTheme}>
          <Typography>Sample app</Typography>
          <LazyFontLoader />
        </ThemeProvider>
      </StyledEngineProvider>
    </Suspense>
  );
}

export default App;
