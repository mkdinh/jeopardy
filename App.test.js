import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";
import { categories } from "../data/fixtures";

describe("App", () => {
  let wrapper;

  let minProps = { categories };

  beforeEach(() => {
    wrapper = shallow(<App {...minProps} />);
  });

  it("should render without exploding", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the title", () => {
    expect(wrapper.find("h1").text()).toEqual("Jeopardy");
  });
});
