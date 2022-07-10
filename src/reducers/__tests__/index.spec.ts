import {mainReducer} from "../index";
import {storeFamilyMemberSleepDataAction, storeNameSelectedAction} from "../../actions";

describe('Main reducer', () => {
    it('should store family member action and set reducing', () => {
        const state = {
            familyMemberIntervals: [],
            nameSelected: undefined,
        };
        const sleepData = [{
            id: "",
            ts: "",
            stages:[{
                stage: "",
                duration: 123,
            }],
            score: 123,
            timeseries: {
                tnt: [[]],
                tempRoomC:[[]],
                tempBedC: [[]],
                heartRate: [[]],
                respiratoryRate: [[]],
            },
            heating: []
        }]
        const expectedState = {
            familyMemberIntervals: sleepData,
            nameSelected: undefined,
        };
        expect(mainReducer(state, storeFamilyMemberSleepDataAction(sleepData))).toEqual(expectedState)
    });

    it('should handle changing loading state to false', () => {
        const state = {
            familyMemberIntervals: [],
            nameSelected: undefined,
        };
        const expectedState = {
            familyMemberIntervals: [],
            nameSelected: 'jeremy',
        };
        expect(mainReducer(state, storeNameSelectedAction('jeremy'))).toEqual(expectedState)
    });
});
