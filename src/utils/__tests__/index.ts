import {
    convertTime,
    convertTimeWithoutDate,
    gatherBedTemperatureXY,
    gatherMemberAnalysisAvgData,
    gatherMemberAnalysisFilteredData,
    gatherTossAndTurnXY
} from "../index";

describe("utils test", () => {
    const timeData = [{
        id: "1489046760",
        ts: "2017-03-09T08:06:00.000Z",
        stages: [
            {
                stage: "awake",
                duration: 1080
            },
            {
                stage: "light",
                duration: 3600
            },
            {
                stage: "deep",
                duration: 1980
            },
            {
                stage: "light",
                duration: 3420
            },
            {
                stage: "deep",
                duration: 540
            },
            {
                stage: "out",
                duration: 420
            },
            {
                stage: "awake",
                duration: 600
            },
            {
                stage: "light",
                duration: 1680
            },
            {
                stage: "awake",
                duration: 1200
            },
            {
                stage: "light",
                duration: 6480
            },
            {
                stage: "awake",
                duration: 1380
            }
        ],
        score: 44,
        timeseries: {
            tnt: [
                [
                    "2017-03-09T08:26:00.000Z",
                    1
                ],
                [
                    "2017-03-09T09:15:00.000Z",
                    1
                ],
                [
                    "2017-03-09T09:56:00.000Z",
                    1
                ],
                [
                    "2017-03-09T10:10:00.000Z",
                    1
                ],
                [
                    "2017-03-09T10:28:00.000Z",
                    1
                ],
                [
                    "2017-03-09T10:34:00.000Z",
                    1
                ],
                [
                    "2017-03-09T10:41:00.000Z",
                    1
                ],
                [
                    "2017-03-09T11:02:00.000Z",
                    1
                ],
                [
                    "2017-03-09T12:37:00.000Z",
                    1
                ],
                [
                    "2017-03-09T12:53:00.000Z",
                    1
                ],
                [
                    "2017-03-09T13:11:00.000Z",
                    1
                ],
                [
                    "2017-03-09T13:22:00.000Z",
                    1
                ]
            ],
            tempRoomC: [
                [
                    "2017-03-09T08:00:00.000Z",
                    21.93648148148148
                ],
                [
                    "2017-03-09T09:00:00.000Z",
                    21.534000000000006
                ],
                [
                    "2017-03-09T10:00:00.000Z",
                    21.444333333333336
                ],
                [
                    "2017-03-09T11:00:00.000Z",
                    21.028
                ],
                [
                    "2017-03-09T12:00:00.000Z",
                    20.241666666666667
                ],
                [
                    "2017-03-09T13:00:00.000Z",
                    20.185999999999996
                ],
                [
                    "2017-03-09T14:00:00.000Z",
                    20.54315789473684
                ]
            ],
            tempBedC: [
                [
                    "2017-03-09T08:00:00.000Z",
                    29.661111111111122
                ],
                [
                    "2017-03-09T09:00:00.000Z",
                    34.39683333333333
                ],
                [
                    "2017-03-09T10:00:00.000Z",
                    35.08616666666668
                ],
                [
                    "2017-03-09T11:00:00.000Z",
                    33.68883333333333
                ],
                [
                    "2017-03-09T12:00:00.000Z",
                    34.04483333333332
                ],
                [
                    "2017-03-09T13:00:00.000Z",
                    34.6735
                ],
                [
                    "2017-03-09T14:00:00.000Z",
                    34.28315789473684
                ]
            ],
            respiratoryRate: [
                [
                    "2017-03-09T08:00:00.000Z",
                    16.516129032258064
                ],
                [
                    "2017-03-09T09:00:00.000Z",
                    18.21276595744681
                ],
                [
                    "2017-03-09T10:00:00.000Z",
                    17.666666666666668
                ],
                [
                    "2017-03-09T12:00:00.000Z",
                    16.125
                ],
                [
                    "2017-03-09T13:00:00.000Z",
                    17
                ]
            ],
            heartRate: [
                [
                    "2017-03-09T08:00:00.000Z",
                    80.35483870967742
                ],
                [
                    "2017-03-09T09:00:00.000Z",
                    86.29787234042553
                ],
                [
                    "2017-03-09T10:00:00.000Z",
                    81.75757575757575
                ],
                [
                    "2017-03-09T12:00:00.000Z",
                    83.875
                ],
                [
                    "2017-03-09T13:00:00.000Z",
                    88.25
                ]
            ],
            heating: []
        },
    }]
    describe("gatherMemberAnalysis function tests", () => {
        it('should return the correct average' , ()  =>  {
            // @ts-ignore
            const {heartRateAvg, roomTempAvg, respiratoryAvg} = gatherMemberAnalysisAvgData(timeData)
            expect(heartRateAvg).toEqual("84.1")
            expect(roomTempAvg).toEqual("21.0")
            expect(respiratoryAvg).toEqual("29.4")
        })
    })

    describe("gatherMemberAnalysisFilteredData function tests", () => {
        it("should return the correct filtered data", () => {
            // @ts-ignore
            const {awakeDuration, lightDuration, deepDuration, outDuration} = gatherMemberAnalysisFilteredData(timeData)
            expect(awakeDuration).toEqual(4260)
            expect(lightDuration).toEqual(15180)
            expect(deepDuration).toEqual(2520)
            expect(outDuration).toEqual(420)
        })
    })

    describe("convertTimeWithoutDate function tests", () => {
        it('should return the date with the correct format', () => {
            const expectedTime = convertTimeWithoutDate('2017-03-09T08:06:00.000Z')
            expect(expectedTime).toEqual("3:06:00 AM")

        })
    })

    describe("convertTime function tests", () => {
        it('should return the data and time in the correct format in the app', () => {
            const expectedTime = convertTime('2017-03-09T08:06:00.000Z')
            expect(expectedTime).toEqual("Thu Mar 09 2017 at 3:06:00 AM")
        })
    })

    describe("gatherBedTemperatureXY function tests", () => {
        it ('should return x and y valyes for getting the bed temperature from dataset', ()  => {
            const {tempBedCDataXAxis, tempBedCDataYAxis} = gatherBedTemperatureXY(timeData[0])
            expect(tempBedCDataXAxis).toEqual(["3:00:00 AM",
                "4:00:00 AM",
                "5:00:00 AM",
                "6:00:00 AM",
                "7:00:00 AM",
                "8:00:00 AM",
                "9:00:00 AM"])
            expect(tempBedCDataYAxis).toEqual([
                29.661111111111122,
                34.39683333333333,
                35.08616666666668,
                33.68883333333333,
                34.04483333333332,
                34.6735,
                34.28315789473684,
            ])
        })
    })

    describe("gatherTossAndTurnXY function tests", () => {
        it('should return the x and y values for toss and turn data' ,() => {
            // @ts-ignore
            const {tntDataXAxis, tntDataYAxis} = gatherTossAndTurnXY(timeData[0])
            expect(tntDataXAxis).toEqual(["3:26:00 AM",
                "4:15:00 AM",
                "4:56:00 AM",
                "5:10:00 AM",
                "5:28:00 AM",
                "5:34:00 AM",
                "5:41:00 AM",
                "6:02:00 AM",
                "7:37:00 AM",
                "7:53:00 AM",
                "8:11:00 AM",
                "8:22:00 AM",])
            expect(tntDataYAxis).toEqual([+   1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,])
        })
    })
})
