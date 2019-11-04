import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

configure({ adapter: new Adapter() });

describe('<div className="App"></div>', () => {
  it("should not render <Main> if !weatherData", () => {});
});
