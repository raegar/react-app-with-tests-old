import React from "react";
import { create } from "react-test-renderer";
import Users from "../Users.react";
import axios from 'axios';
import { list } from "postcss";

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
        //console.log(instance.state);
        const root = component.root;
        const listOfLi = root.findAll(element => element.type === "li");
        expect(listOfLi[0].props.children).toBe("Jamie Myland");
        expect(listOfLi[1].props.children).toBe("James Larner");
        expect(listOfLi[2].props.children).toBe("Chris Jakeman");
        
    });
});