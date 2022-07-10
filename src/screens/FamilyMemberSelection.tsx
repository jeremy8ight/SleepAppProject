import {SafeAreaView, SectionList, Text, TouchableOpacity, View} from 'react-native';
import * as React from 'react';
import {styles} from '../styles';
import {ListRow} from "../components/ListRow";
import {FamilyMemberIdentification} from "../interfaces";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {getSleepInformationAction, storeNameSelectedAction} from "../actions";
import {sleepApplicationRoute} from "../enums";

export const FamilyMemberSelection = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
  const familyMembers: FamilyMemberIdentification[] = [{
      name: 'Alice',
      id: 1,
      url: 'https://s3.amazonaws.com/eight-public/challenge/2228b530e055401f81ba37b51ff6f81d.json'
  }, {
      name: 'John',
      id: 2,
      url: 'https://s3.amazonaws.com/eight-public/challenge/d6c1355e38194139b8d0c870baf86365.json'

  }, {name: 'Mary',
      id: 3,
      url: 'https://s3.amazonaws.com/eight-public/challenge/f9bf229fd19e4c799e8c19a962d73449.json'
  }

  ]
    const DATA = [
        {
            title: 'Family Member Selection',
            data: familyMembers,
        },
    ];
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={styles.dashboard} testID={"familyMemberSelection:sectionList"}>
        <SectionList
            stickySectionHeadersEnabled={true}
          sections={DATA}
          renderItem={({item}) => <ListRow  data={item.name} onPress={() => {
              dispatch(storeNameSelectedAction(item.name))
              dispatch(getSleepInformationAction(item.url))
              navigation.navigate(sleepApplicationRoute.memberTimeDetails)
          }} showMemberName={true}/>}
            renderSectionHeader={({section}) => (
            <View style={styles.sectionHeaderViewStyle}>
                <Text style={styles.loadingHeader}>{section.title}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
        <View style={styles.familyMemberSelectionButtons}>
            <TouchableOpacity
                testID={'signIn:loginButton'}
                style={styles.memberDetailBackBtn}
                onPress={() => navigation.navigate(sleepApplicationRoute.signIn)}>
                <Text style={styles.loginText}>{"Sign Out"}</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};
