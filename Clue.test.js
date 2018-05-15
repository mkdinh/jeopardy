import React from "react";
import { shallow } from "enzyme";
import Clue from "./Clue";
import { clue } from "../data/fixtures";

describe("App", () => {
  let wrapper;

  let minProps;

  beforeEach(() => {
    minProps = { clue: { ...clue } };
    // minProps = { clue: JSON.parse(JSON.stringify(clue)) };
    wrapper = shallow(<Clue {...minProps} />);
  });

  it("should render without exploding", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders value", () => {
    expect(wrapper.find("h3").text()).toEqual(clue.value);
  });

  it("renders question", () => {
    expect(
      wrapper
        .find("h4")
        .at(0)
        .text()
    ).toEqual(clue.question);
  });

  it("renders answer", () => {
    expect(
      wrapper
        .find("h4")
        .at(1)
        .text()
    ).toEqual(clue.answer);
  });

  //--------------------------------------------------------
  describe("default state", () => {
    it("set reveal props to false", () => {
      expect(wrapper.state().reveal).toBe(false);
    });

    it("set 'text-hidden' class to clue answer", () => {
      expect(
        wrapper
          .find("h4")
          .at(1)
          .hasClass("text-hidden")
      ).toBe(true);
    });
  });

  //--------------------------------------------------------
  describe("when render a clue with no value", () => {
    beforeEach(() => {
      minProps.clue.value = undefined;
      wrapper = shallow(<Clue {...minProps} />);
    });

    it("display value to be 'Unknown'", () => {
      expect(wrapper.find("h3").text()).toEqual("Unknown");
    });
  });

  describe("And click on clue", () => {
    beforeEach(() => {
      wrapper.simulate("click");
    });

    it("set reveal state to true", () => {
      expect(wrapper.state().reveal).toBe(true);
    });

    it("set 'text-reveal' class to clue answer", () => {
      expect(
        wrapper
          .find("h4")
          .at(1)
          .hasClass("text-reveal")
      ).toBe(true);
    });

    describe("And click again to hide the answer", () => {
      beforeEach(() => {
        wrapper.simulate("click");
      });

      it("set reveal state to false", () => {
        expect(wrapper.state().reveal).toBe(false);
      });

      it("set 'text-hidden' class to clue answer", () => {
        expect(
          wrapper
            .find("h4")
            .at(1)
            .hasClass("text-hidden")
        ).toBe(true);
      });
    });
  });
});
