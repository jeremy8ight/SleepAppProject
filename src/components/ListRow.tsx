import * as React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {ListRowProps} from '../interfaces';
import {styles} from '../styles';

export const ListRow = (props: ListRowProps) => {
  return (
    <View style={{paddingVertical: 15}}>
      <TouchableOpacity
        style={styles.listRowTouchableOpacity}
        onPress={props.onPress}>
        <View style={styles.listRowInsideStyle}>
          <View
            style={{
              flexDirection: 'column',
            }}>
            {props.showMemberName ?
            <Image
              source={require('../images/sleepyOwl.jpg')}
              style={{ height: 100,
                width: 50,
                bottom: 3}}
            /> : <Image
              source={require('../images/clock.jpg')}
              style={{ height: 50,
                width: 50,
                top: 30,
                bottom: 3}}
              />}
          </View>
          <View style={{left: props.showMemberName ? 200: -20,
            flexDirection: 'column',
            flexGrow: 20}}>
            <Text style={{  fontSize: props.showMemberName ? 25: 20,
              fontWeight: '600',}}>
              {props.data}
            </Text>
            <Text style={styles.tickerNameText}>{""}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
