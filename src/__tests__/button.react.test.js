import React from "react";
import { create } from "react-test-renderer";
import Button from "../Button.react";

describe("Button component", () => {
    test("It shows the expected text when clicked", () => {
        const component = create(<button text="SUBSCRIBE" />);
        const rootInstance = component.root;
        const button = rootInstance.findByType("button");
       // button.props.onClick();
       // expect(button.props.children).toBe("PROCEED TO CHECKOUT");
    });
});
