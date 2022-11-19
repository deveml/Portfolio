import * as renderer from "react-test-renderer";
import App from "../App";

describe("App wrapper component snapshot test", () => {
  it("Should render the component and it should match the stored snapshot", () => {
    const appComponent = renderer.create(<App />);
    const parsedComponent = appComponent.toJSON();
    expect(parsedComponent).toMatchSnapshot();
  });
});

export {};
