import {Intervals} from "../interfaces";

export const gatherMemberAnalysisAvgData = (timeData: Intervals) => {
    let heartRateSum: number = 0;
    let roomTempSum: number = 0;
    let respiratorySum: number = 0;
    const specificTimeData =  timeData[0] ?? {}

    for (let s = 0; s < specificTimeData.timeseries.heartRate.length; s++) {
        heartRateSum += specificTimeData.timeseries.heartRate[s][1]
    }

    for (let r = 0; r < specificTimeData.timeseries.tempRoomC.length; r++ ) {
        roomTempSum += specificTimeData.timeseries.tempRoomC[r][1]
    }

    for (let v = 0; v < specificTimeData.timeseries.respiratoryRate.length; v++ ) {
        respiratorySum += specificTimeData.timeseries.respiratoryRate[v][1]
    }

    const heartRateAvg = (heartRateSum/specificTimeData.timeseries.heartRate.length).toFixed(1)
    const roomTempAvg = (roomTempSum/specificTimeData.timeseries.tempRoomC.length).toFixed(1)
    const respiratoryAvg = (roomTempSum/specificTimeData.timeseries.respiratoryRate.length).toFixed(1)

    return {heartRateAvg, roomTempAvg, respiratoryAvg}
}

export const  gatherMemberAnalysisFilteredData = (timeData: Intervals) => {
    const specificTimeData =  timeData[0] ?? {}
    const awakeTotal = specificTimeData.stages.filter((item) => {
        return item.stage === "awake"
    })
    const lightTotal = specificTimeData.stages.filter((item) => {
        return item.stage === 'light'
    })
    const outTotal = specificTimeData.stages.filter((item) => {
        return item.stage === 'out'
    })

    const deepTotal = specificTimeData.stages.filter((item) => {
        return item.stage === 'deep'
    })

    const awakeDuration = awakeTotal.reduce(function(prev, cur) {
        return prev + cur.duration;
    }, 0);

    const lightDuration = lightTotal.reduce(function(prev, cur) {
        return prev + cur.duration;
    }, 0);

    const outDuration = outTotal.reduce(function(prev, cur) {
        return prev + cur.duration;
    }, 0);

    const deepDuration = deepTotal.reduce(function(prev, cur) {
        return prev + cur.duration;
    }, 0);

    return {awakeDuration, lightDuration, deepDuration, outDuration}

}

export const convertTimeWithoutDate = (time: string) => {
    const timeString = new Date(time).toLocaleTimeString()
    return `${timeString}`
}


export const convertTime = (time:string) => {
    const timeString = new Date(time).toLocaleTimeString()
    const dateString = new Date(time).toDateString()
    return `${dateString} at ${timeString}`
}

export const gatherBedTemperatureXY = (timeData: Intervals) => {
    const tempBedCDataXAxis = []
    const tempBedCDataYAxis = []
    timeData.timeseries.tempBedC.map((item) => {
        const [date, tempReading] = item
        const convertTime = convertTimeWithoutDate(date as string)
        tempBedCDataXAxis.push(convertTime)
        tempBedCDataYAxis.push(tempReading)
    })
    return {tempBedCDataXAxis, tempBedCDataYAxis}
}

export const gatherTossAndTurnXY = (timeData: Intervals) => {
    const tntDataXAxis = []
    const tntDataYAxis = []
    timeData.timeseries.tnt.map((item) => {
        const [date, turnData] = item
        const convertTime = convertTimeWithoutDate(date as string)
        tntDataXAxis.push(convertTime)
        tntDataYAxis.push(turnData)
    })
    return {tntDataXAxis, tntDataYAxis}
}

