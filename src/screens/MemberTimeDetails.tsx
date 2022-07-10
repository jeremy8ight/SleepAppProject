import {View, Text, SafeAreaView, SectionList, TouchableOpacity} from "react-native";
import * as React from 'react';
import {useSelector} from "react-redux";
import {retrieveMemberNameSelector, retrieveMemberSleepInformationSelector} from "../selectors";
import {styles} from "../styles";
import {ListRow} from "../components/ListRow";
import {convertTime} from "../utils";
import {sleepApplicationRoute} from "../enums";

export const MemberTimeDetails = ({navigation}) => {
    const timeSleepData = useSelector(retrieveMemberSleepInformationSelector)
    const nameSelected = useSelector(retrieveMemberNameSelector)
    const rawTimeStorage = []
    timeSleepData.map((item) => {
        rawTimeStorage.push(item.ts)
    })
    const DATA = [
        {
            title: nameSelected,
            data: rawTimeStorage,
        },
    ];

    return (
        <SafeAreaView style={{backgroundColor: 'white'}}>
            <View style={styles.dashboard} testID={"memberTimeDetails:sectionList"}>
                <SectionList
                    stickySectionHeadersEnabled={true}
                    sections={DATA}
                    renderItem={({item}) => <ListRow  data={convertTime(item)} onPress={() => {
                        navigation.navigate(sleepApplicationRoute.memberData, {
                            time: item
                        })
                    }} showMemberName={false}/>}
                    renderSectionHeader={({section}) => (
                        <View style={styles.sectionHeaderViewStyle}>
                            <Text style={styles.loadingHeader}>{section.title}</Text>
                        </View>
                    )}
                    keyExtractor={item => item}
                />
            </View>
            <View style={styles.memberTimeDetailsButtons}>
                <TouchableOpacity
                    testID={'memberTimeDetails:goBack:button'}
                    style={styles.memberDetailBackBtn}
                    onPress={() => navigation.goBack()}>
                    <Text style={styles.loginText}>{"Go Back"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    testID={'memberTimeDetails:signOut:button'}
                    style={styles.memberDetailBackBtn}
                    onPress={() => navigation.navigate(sleepApplicationRoute.signIn)}>
                    <Text style={styles.loginText}>{"Sign Out"}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
