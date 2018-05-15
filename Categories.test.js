import React from "react";
import { shallow } from "enzyme";
import { Categories } from "./Categories";
import { categories } from "../data/fixtures";

describe("Categories", () => {
  let wrapper;

  let minProps = { categories };

  beforeEach(() => {
    wrapper = shallow(<Categories {...minProps} />);
  });

  it("should render without exploding", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("creates the correct number of links", () => {
    expect(wrapper.find("Link").length).toEqual(categories.length);
  });

  it("title the links correctly", () => {
    wrapper.find("Link h4").forEach((linkTitle, index) => {
      expect(linkTitle.text()).toEqual(categories[index].title);
    });
  });
});
