import React from "react";
import { mount } from "enzyme";
import { Category } from "./Category";
import { category, clues } from "../data/fixtures";
import { fakeServer } from "sinon";

describe("Category", () => {
  let wrapper;
  let server;
  let minProps = { category };

  beforeEach(() => {
    const response = JSON.stringify(clues);
    server = fakeServer.create();
    server.respondWith(
      "GET",
      `http://jservice.io/api/clues?category=${minProps.category.id}`,
      [200, { "Content-Type": "application/json" }, response]
    );
  });

  describe("When creating an new category", () => {
    beforeEach(done => {
      wrapper = mount(<Category {...minProps} />);
      server.respond();
      setTimeout(done);
    });

    it("should render without exploding", () => {
      expect(wrapper.exists()).toBe(true);
    });

    it("logs the category", () => {
      console.log(wrapper.update().debug());
    });
  });
});
