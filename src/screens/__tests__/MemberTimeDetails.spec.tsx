import * as React from 'react';
import {render} from "@testing-library/react-native";
import {MemberTimeDetails} from "../MemberTimeDetails";
import {Provider} from "react-redux";
import {configureStore} from "../../reducers";

describe("Member time details screen test", () => {
    const mockNavigation = jest.fn()

    it("should find section list of member", () => {
        const initialState = {
            familyMemberIntervals: [],
            nameSelected: "jeremy",
        };
        const store = configureStore(initialState);
        const component = (
            <Provider store={store}>
                <MemberTimeDetails navigation={mockNavigation}/>
            </Provider>
        );
        const {getByTestId} = render(component);
        expect(getByTestId("memberTimeDetails:sectionList")).toBeTruthy()
    })

    it("should find go back button", () => {
        const initialState = {
            familyMemberIntervals: [],
            nameSelected: "jeremy",
        };
        const store = configureStore(initialState);
        const component = (
            <Provider store={store}>
                <MemberTimeDetails navigation={mockNavigation}/>
            </Provider>
        );
        const {getByTestId} = render(component);
        expect(getByTestId("memberTimeDetails:goBack:button")).toBeTruthy()
    })

    it("should find go back button", () => {
        const initialState = {
            familyMemberIntervals: [],
            nameSelected: "jeremy",
        };
        const store = configureStore(initialState);
        const component = (
            <Provider store={store}>
                <MemberTimeDetails navigation={mockNavigation}/>
            </Provider>
        );
        const {getByTestId} = render(component);
        expect(getByTestId("memberTimeDetails:signOut:button")).toBeTruthy()
    })
})
