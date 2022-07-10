import * as React from "react";
import {TextScoreColoring} from "../TextScoreColoring";
import {render} from "@testing-library/react-native";

describe('Main reducer', () => {
    it('should return green text if score is 81 or more', () => {
        const {getByTestId} = render(TextScoreColoring(81));
        expect(getByTestId("textScore:green")).toBeTruthy()
    });

    it('should return yellow text if score is between 60 and 80', () => {
        const {getByTestId} = render(TextScoreColoring(65));
        expect(getByTestId("textScore:yellow")).toBeTruthy()
    });

    it('should return red text if score is less than 60', () => {
        const {getByTestId} = render(TextScoreColoring(50));
        expect(getByTestId("textScore:red")).toBeTruthy()
    });
});
