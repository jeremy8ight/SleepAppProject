import {View, Text, ScrollView, SafeAreaView, TouchableOpacity, Dimensions} from "react-native";
import * as React from 'react';
import {useSelector} from "react-redux";
import {retrieveMemberNameSelector, retrieveMemberSleepInformationSelector} from "../selectors";
import {styles} from "../styles";
import * as Animatable from "react-native-animatable";
import {convertTime, gatherBedTemperatureXY, gatherTossAndTurnXY} from "../utils";
import {useNavigation} from "@react-navigation/native";
import {Intervals} from "../interfaces";
import {LineDataChart} from "../components/LineDataChart";

export const MoreData = ({route}) => {
    const {time} = route.params;
    const timeSleepData = useSelector(retrieveMemberSleepInformationSelector)
    const nameSelected = useSelector(retrieveMemberNameSelector)
    const navigation = useNavigation()
    const timeData: Intervals = timeSleepData.filter((item) => {
        return time === item.ts
    })
    const specificTimeData: Intervals = timeData[0] ?? {}
    const {tempBedCDataXAxis, tempBedCDataYAxis} = gatherBedTemperatureXY(specificTimeData)
    const {tntDataXAxis, tntDataYAxis} = gatherTossAndTurnXY(specificTimeData)

    return (
        <SafeAreaView style={{backgroundColor: 'white'}}>
            <ScrollView style={{backgroundColor: 'white', height: '100%'}}>
                <View>
                    <Text style={styles.loadingHeader}>{`${nameSelected}'s results`}</Text>
                </View>
                <View>
                    <Text style={styles.moreDataTime}>{convertTime(time)}</Text>
                </View>
                <View>
                    <Text style={styles.moreDataTempBedTitle}>Temp Bed
                        (Celsius)</Text>
                    <Animatable.View style={styles.card} animation="pulse" iterationCount={5}
                                     direction="alternate">
                        <ScrollView horizontal={true}>
                            <LineDataChart xLabel={tempBedCDataXAxis} yData={tempBedCDataYAxis} chartColor={"#9a00e2"}/>
                        </ScrollView>
                    </Animatable.View>
                </View>

                <View>
                    <Text style={styles.moreDataTossTurnsTitle}>Toss and Turn
                        (Turn(s))</Text>
                    <Animatable.View style={styles.card} animation="pulse" iterationCount={5}
                                     direction="alternate">
                        <ScrollView horizontal={true}>
                            <LineDataChart xLabel={tntDataXAxis} yData={tntDataYAxis} chartColor={'#9a00e2'}/>
                        </ScrollView>
                    </Animatable.View>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 16, fontWeight: '900'}}>{"Key Abbreviations"}</Text>
                    <Text>{"RR = Respiratory Rate"}</Text>
                    <Text>{"RT = Room Temperature"}</Text>
                    <Text>{"BPM = Beats Per Minute"}</Text>
                    <Text>{"BrPM = Breaths Per Minute"}</Text>
                    <Text>{"HR = Heart Rate"}</Text>
                </View>
                <View style={styles.moreDataDetailsButtons}>
                    <TouchableOpacity
                        testID={'signIn:loginButton'}
                        style={styles.memberDetailBackBtn}
                        onPress={() => navigation.goBack()}>
                        <Text style={styles.loginText}>{"Go Back"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        testID={'signIn:loginButton'}
                        style={styles.memberDetailBackBtn}
                        onPress={() => navigation.navigate("SignIn")}>
                        <Text style={styles.loginText}>{"Sign Out"}</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>

        </SafeAreaView>)
}
