import {View, Text, Image, ScrollView, Dimensions, SafeAreaView, FlatList, TouchableOpacity, Modal} from "react-native";
import * as React from 'react';
import {useSelector} from "react-redux";
import {
    retrieveMemberNameSelector,
    retrieveMemberSleepInformationSelector
} from "../selectors";
import {Intervals} from "../interfaces";
import {convertTime} from "../utils";
import * as Animatable from "react-native-animatable";
import {styles} from "../styles";
import {PieChart} from "react-native-chart-kit";
import {useNavigation} from "@react-navigation/native";
import {gatherMemberAnalysisAvgData, gatherMemberAnalysisFilteredData} from "../utils";
import {sleepApplicationRoute} from "../enums";
import {TextScoreColoring} from "../components/TextScoreColoring";

export const MemberData = ({route}) => {
    const {time} = route.params;
    const timeSleepData = useSelector(retrieveMemberSleepInformationSelector)
    const nameSelected = useSelector(retrieveMemberNameSelector)
    const navigation = useNavigation()
    const screenWidth = Dimensions.get("window").width;
    const timeData: Intervals = timeSleepData.filter((item) => {
        return time === item.ts
    })
    const specificTimeData: Intervals = timeData[0] ?? {}
    const {heartRateAvg, roomTempAvg, respiratoryAvg} = gatherMemberAnalysisAvgData(timeData)
    const {awakeDuration, lightDuration, deepDuration, outDuration} = gatherMemberAnalysisFilteredData(timeData)
    const data = [
        {
            name: "Awake",
            population: awakeDuration,
            color: "blue",
            legendFontColor: "#000000",
            legendFontSize: 12
        },
        {
            name: "Light",
            population: lightDuration,
            color: "orange",
            legendFontColor: "#000000",
            legendFontSize: 12
        },
        {
            name: "Out",
            population: outDuration,
            color: "red",
            legendFontColor: "#000000",
            legendFontSize: 12
        },
        {
            name: "Deep",
            population: deepDuration,
            color: "yellow",
            legendFontColor: "#000000",
            legendFontSize: 12
        },
    ];

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    return (
        <SafeAreaView style={{backgroundColor: 'white'}}>
            <ScrollView style={{height: '100%'}} showVerticalScrollIndicator={false}>
                <Text style={styles.loadingHeader}>{`${nameSelected}'s results`}</Text>
                <View>
                    <Text style={styles.resultsTimeText}>{convertTime(specificTimeData.ts)}</Text>
                </View>
                <View style={styles.resultsTopView}>
                    <View style={styles.resultsAnimationHeart}>
                        <Text style={styles.resultsHRText}>{"Avg HR (BPM)"}</Text>
                        <Animatable.View style={styles.card} animation="pulse" iterationCount={5}
                                         direction="alternate">
                            <Image
                                source={require('../images/heart.jpg')}
                                style={styles.heartImage}
                            />
                        </Animatable.View>
                        <Text style={styles.heartTextAvgText}>{`${heartRateAvg}`}</Text>
                    </View>
                    <View style={styles.scoresTopView}>
                        <Text style={styles.scoresTitleText}>{"Score"}</Text>
                        <Animatable.View style={styles.card} animation="flash" iterationCount={5}
                                         direction="alternate">
                            <Image
                                source={require('../images/sleepFace.jpg')}
                                style={styles.sleepyFaceImage}
                            />
                        </Animatable.View>
                        <View>
                            {TextScoreColoring(specificTimeData.score)}
                        </View>
                    </View>
                </View>
                <View style={styles.roomTempTopView}>
                    <View style={styles.roomTempAnimatedView}>
                        <Text style={styles.roomTempTitleText}>{"Avg RT (C)"}</Text>
                        <Animatable.View style={styles.card} animation="shake" iterationCount={5}
                                         direction="alternate">
                            <Image
                                source={require('../images/roomTemp.png')}
                                style={styles.roomTempImage}
                            />
                        </Animatable.View>
                        <Text style={styles.roomTempResultsText}>{`${roomTempAvg}`}</Text>
                    </View>
                    <View style={styles.respiratoryRateTopView}>
                        <Text style={styles.respiratoryRateTitleText}>{"Avg RR (BrPM)"}</Text>
                        <Animatable.View style={styles.card} animation="bounce" iterationCount={5}
                                         direction="alternate">
                            <Image
                                source={require('../images/respiratoryRate.jpg')}
                                style={styles.respiratoryRateImage}
                            />
                        </Animatable.View>
                        <View>
                            <Text style={styles.respiratoryResultsText}>{`${respiratoryAvg}`}</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.sleepStageTitle}>Sleep Stages</Text>
                <View style={styles.pieChartAnimationTopView}>
                    <Animatable.View style={styles.card} animation="tada" iterationCount={5}
                                     direction="alternate">
                        <PieChart
                            data={data}
                            width={screenWidth}
                            height={200}
                            chartConfig={chartConfig}
                            accessor={"population"}
                            backgroundColor={"transparent"}
                            paddingLeft={""}
                            center={[0, 0]}
                        />
                    </Animatable.View>
                </View>
            </ScrollView>
            <View style={styles.moreDataButtons}>
                <TouchableOpacity
                    testID={'signIn:loginButton'}
                    style={styles.memberDetailBackBtn}
                    onPress={() => navigation.goBack()}>
                    <Text style={styles.loginText}>{"Go Back"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    testID={'signIn:loginButton'}
                    style={styles.memberDetailBackBtn}
                    onPress={() => navigation.navigate(sleepApplicationRoute.signIn)}>
                    <Text style={styles.loginText}>{"Sign Out"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    testID={'signIn:loginButton'}
                    style={styles.memberDetailBackBtn}
                    onPress={() => navigation.navigate(sleepApplicationRoute.moreData, {
                        time: time
                    })}>
                    <Text style={styles.loginText}>{"More Data"}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>)

}
