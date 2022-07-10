import {sleepInformationActions} from "../enums";

export interface ListRowProps {
  data: string;
  showMemberName: boolean;
  onPress?: () => void;
}

export interface LinedataChartProps {
  xLabel: any[];
  yData: number[];
  chartColor: string;
}

export interface FamilyMemberIdentification {
  name: string
  id: number
  url: string
}

export interface Intervals {
    id: string
    ts: string
    stages: SleepStages[]
    score: number
    timeseries: EnvironmentalData
    heating?: string[]
}

export interface SleepStages {
  stage: string
  duration: number
}

export interface EnvironmentalData {
  tnt: (string | number) [][]
  tempRoomC: (string | number) [][]
  tempBedC: (string | number) [][]
  heartRate: (string | number) [][]
  respiratoryRate: (string | number) [][]
}

export interface GetSleepInformationAction {
  type: sleepInformationActions.getSleepInfo
  value: {
    url: string
  }
}

export interface StoreFamilyMemberSleepDataAction {
  type: sleepInformationActions.storeFamilyMemberSleepInfo
  value: {
    intervals: Intervals[]
  }
}

export interface StoreNameSelectedAction {
  type: sleepInformationActions.storeNameSelected
  value: {
    name: String
  }
}
