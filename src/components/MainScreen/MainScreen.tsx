import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {setButtonColorIndex} from '../../redux/slices/colourSlice';
import ButtonReanimated from '../ButtonReanimated/ButtonReanimated';
import ButtonStyledComponent from '../ButtonStyledComponent/ButtonStyledComponent';
import ButtonStyleSheet from '../ButtonStyleSheet/ButtonStyleSheet';

export const MainScreen = () => {
  const dispatch = useDispatch();

  const handleButtonPress = () => {
    dispatch(setButtonColorIndex());
  };

  return (
    <View style={styles.wrapper}>
      <ButtonReanimated onPress={handleButtonPress} />
      <ButtonStyleSheet onPress={handleButtonPress} />
      <ButtonStyledComponent onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
