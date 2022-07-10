import {
    GetSleepInformationAction,
    Intervals,
    StoreFamilyMemberSleepDataAction,
    StoreNameSelectedAction
} from "../interfaces";
import {sleepInformationActions} from "../enums";

export const getSleepInformationAction = (url: string): GetSleepInformationAction => {
    return {
        type: sleepInformationActions.getSleepInfo,
        value: {
            url: url,
        },
    };
};


export const storeFamilyMemberSleepDataAction = (sleepData: Intervals[]): StoreFamilyMemberSleepDataAction => {
    return {
        type: sleepInformationActions.storeFamilyMemberSleepInfo,
        value: {
            intervals: sleepData
        }
    }
}

export const storeNameSelectedAction = (name: String): StoreNameSelectedAction => {
    return {
        type: sleepInformationActions.storeNameSelected,
        value: {
            name: name
        }
    }
}
