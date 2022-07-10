import {GetSleepInformationAction, Intervals} from "../interfaces";
import {takeEvery, delay} from 'redux-saga/effects';
import {sleepInformationActions} from "../enums";
import {storeFamilyMemberSleepDataAction} from "../actions";
import {put} from "redux-saga-test-plan/matchers";

export function* getSleepInformation(action: GetSleepInformationAction) {
    const url = {action}
    try {
        const response = yield fetch(url.action.value.url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const data = yield response.status === 200
            ? response.json()
            : [];
        if (response.status === 200) {
            yield put(storeFamilyMemberSleepDataAction(data.intervals))
        }
    } catch (error) {
        console.log("this is an error================>", error)
    }
}



export default function* mainSaga() {
    yield takeEvery(
        sleepInformationActions.getSleepInfo,
        getSleepInformation,
    );
}
