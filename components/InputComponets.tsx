import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

type Props = {
  title?: string;
};

const InputComponets = ({title = 'somethigs'}: Props) => {
  return (
    <TextInput
      key={title}
      placeholder={`Enter your ${title}`}
      style={{fontFamily: 'Roboto-Medium'}}
      className="bg-[#51445a] rounded-md text-[#9f98a4] p-3 px-4 text-lg"
    />
  );
};

export default InputComponets;

const styles = StyleSheet.create({});
