import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
//@ts-ignore
import Logo from '../assets/Images/Logo.svg';
//@ts-ignore
import Google from '../assets/Images/Google.svg';
//@ts-ignore
import Facebook from '../assets/Images/Facebook.svg';
import InputComponets from '../components/InputComponets';

type Props = {};

const LoginScreen = (props: Props) => {
  return (
    <View
      style={{flex: 1, backgroundColor: '#463850'}}
      className=" justify-between py-6">
      <View>
        <View style={styles.container}>
          <Logo />
        </View>
        <Text
          style={{fontFamily: 'Roboto-Bold'}}
          className="text-3xl text-center pt-5 text-white">
          Login to your Account
        </Text>
      </View>

      {/* Login Area */}
      <View className="px-8 ">
        <View className="space-y-8">
          <View>
            <Text style={styles.textInput}>E-mail</Text>
            <InputComponets title="mail" />
          </View>
          <View>
            <Text style={styles.textInput}>Password</Text>
            <InputComponets title="password" />
          </View>
        </View>
        <Text className="py-2 underline" style={{textAlign: 'right'}}>
          Forget password ?
        </Text>
        <Pressable className="bg-[#f05b89] py-2 rounded-md mt-5">
          <Text
            className="text-center text-2xl text-white"
            style={{fontFamily: 'Roboto-Bold'}}>
            Login
          </Text>
        </Pressable>
        <View className="flex flex-row space-x-1 items-center justify-center py-4">
          <Text
            className="text-center text-xl text-white"
            style={{fontFamily: 'Roboto-Light'}}>
            Don’t have account ?
          </Text>
          <Text
            className="text-center text-xl text-white underline"
            style={{fontFamily: 'Roboto-Bold'}}>
            Register
          </Text>
        </View>
      </View>

      {/* Login Social Media */}
      <View className="px-8 space-y-3">
        {/* Login With */}
        <View className="flex flex-row space-x-4 items-center justify-center">
          <View className="w-16 h-[1px] bg-white" />
          <Text
            className="text-center text-lg text-white "
            style={{fontFamily: 'Roboto-Bold'}}>
            or Login with
          </Text>
          <View className="w-16 h-[1px] bg-white" />
        </View>

        {/* Socila Icons */}
        <View className="flex flex-row space-x-4 items-center justify-center">
          {/* Google Login */}
          <Pressable className="bg-white px-4 py-3 rounded-lg ">
            <View className="items-center flex flex-row space-x-4 ">
              <Google />
              <Text
                className="text-black text-lg"
                style={{fontFamily: 'Roboto-Bold'}}>
                Google
              </Text>
            </View>
          </Pressable>
          <Pressable className="bg-[#0066ff] px-4 py-3 rounded-lg ">
            <View className="items-center flex flex-row space-x-4 ">
              <Facebook />
              <Text
                className="text-black text-lg"
                style={{fontFamily: 'Roboto-Bold'}}>
                Facebook
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignSelf: 'center',
  },

  textInput: {
    fontFamily: 'Roboto-Bold',
    color: '#ecebed',
    fontSize: 18,
    paddingBottom: 15,
  },
});
