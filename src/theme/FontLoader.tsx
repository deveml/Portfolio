import { Helmet } from "react-helmet";

/**
 * @description A component that should be lazy loaded to the UI to fetch the fonts from the CDN. The font CDn can be changed to whatever you want to import
 * @note This component has to be lazy loaded to improve efficiency. The default font loaded to the application is `Fira-code`
 */

const FontLoader = () => {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default FontLoader;
