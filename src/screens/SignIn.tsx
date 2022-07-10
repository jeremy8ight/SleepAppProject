import {View, Text, ActivityIndicator} from 'react-native';
import * as React from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../styles';
import {useEffect, useRef, useState} from 'react';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {sleepApplicationRoute} from "../enums";

export const SignIn = () => {
  const [account, setUsername] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [error, showError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const accountInput = useRef<any>();
  const passwordInput = useRef<any>();

  useEffect(() => {}, []);
  useFocusEffect(
    React.useCallback(() => {
      setPassword(undefined);
      setUsername(undefined);
    }, []),
  );

  const onPress = () => {
    if (
      account !== undefined &&
      password !== undefined &&
      password.length !== 0
    ) {
      showError(false);
      setUsername(undefined);
      accountInput.current.clear();
      passwordInput.current.clear();
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigation.navigate(sleepApplicationRoute.familyMemberSelection);
      }, 3000);
    } else {
      showError(true);
    }
  };

  return (
    <View style={styles.container}>
      {loading && (
        <View style={[styles.horizontal]}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )}
      <Text style={styles.logoName}>{'Sleep Analysis'}</Text>
      <View style={styles.inputView}>
        <TextInput
          ref={accountInput}
          style={styles.inputTextSignIn}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={text => setUsername(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          ref={passwordInput}
          style={styles.inputTextSignIn}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View>
        {error && (
          <Text style={styles.signInErrorText}>
            {'Username and password cant be blank'}
          </Text>
        )}
      </View>
      <TouchableOpacity
        testID={'signIn:loginButton'}
        style={styles.loginBtn}
        onPress={onPress}>
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};
