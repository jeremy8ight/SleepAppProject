import {getSleepInformationAction, storeFamilyMemberSleepDataAction, storeNameSelectedAction} from "../index";
import {sleepInformationActions} from "../../enums";

describe('actions', () => {
    it('should return correct action get sleep action', () => {
        const action = getSleepInformationAction("test-url");
        expect(action.type).toEqual(sleepInformationActions.getSleepInfo);
    });

    it('should return storeFamilyMemberSleepDataAction', () => {
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
        const action = storeFamilyMemberSleepDataAction(sleepData)
        expect(action.type).toEqual(sleepInformationActions.storeFamilyMemberSleepInfo)
    });

    it('should return storeNameSelectedAction', () => {
        const sleepData = [{
            id: "",
            ts: "",
            stages: {
                stage: "",
                duration: 123,
            },
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
        const action = storeNameSelectedAction("")
        expect(action.type).toEqual(sleepInformationActions.storeNameSelected)
    });

    it("should return the getSleepInformation action", () => {
        const action = getSleepInformationAction("")
        expect(action.type).toEqual(sleepInformationActions.getSleepInfo)
    })
});
