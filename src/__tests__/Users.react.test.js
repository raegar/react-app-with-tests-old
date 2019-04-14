import React from "react";
import { create } from "react-test-renderer";
import Users from "../Users.react";

describe("Users component", () => {
    it("shows a list of users", async () => {
        const component = create(<Users />);
        const instance = component.getInstance();
        await instance.componentDidMount();
    });
});