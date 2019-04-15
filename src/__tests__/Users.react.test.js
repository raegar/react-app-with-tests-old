import React from "react";
import { create } from "react-test-renderer";
import Users from "../Users.react";
import axios from 'axios';

jest.mock('axios');

describe("Users component", () => {
    it("shows a list of users", async () => {
        const response = {
            data:[
                { name: "Jamie Myland" },
                { name: "James Larner" },
                { name: "Chris Jakeman" },
            ]
        };
        axios.get.mockResolvedValue(response);
        const component = create(<Users />);
        const instance = component.getInstance();
        await instance.componentDidMount();
        console.log(instance.state);
    });
});