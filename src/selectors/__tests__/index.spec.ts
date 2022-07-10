import {retrieveMemberNameSelector, retrieveMemberSleepInformationSelector} from "../index";

describe('Main selectors', () => {
    it('should return correct member information state', () => {
        const testState = {
            familyMemberIntervals: [],
            nameSelected: undefined,
        }
        expect(retrieveMemberSleepInformationSelector(testState)).toEqual([]);
    });

    it('should return correct member name state', () => {
        const testState = {
            familyMemberIntervals: [],
            nameSelected: 'jeremy',
        };
        expect(retrieveMemberNameSelector(testState)).toEqual('jeremy');
    });
});
