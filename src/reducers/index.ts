import {states} from '../states';
import {sleepInformationActions} from "../enums";
import {createStore} from "redux";

export const mainReducer = (state = states, action) => {
    switch (action.type) {
        case sleepInformationActions.storeFamilyMemberSleepInfo:
            return {...state, familyMemberIntervals: action.value.intervals}
        case sleepInformationActions.storeNameSelected:
            return {...state, nameSelected: action.value.name}
        default:
            return {...state};
    }
};

export const configureStore = (initialState = states) => {
    return createStore(mainReducer, initialState);
}
