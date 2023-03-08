import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {changeColor} from '../../redux/slices/colourSlice';
import {RootState} from '../../redux/store';
import ButtonReanimated from '../ButtonReanimated/ButtonReanimated';
import ButtonStyledComponent from '../ButtonStyledComponent/ButtonStyledComponent';
import ButtonStyleSheet from '../ButtonStyleSheet/ButtonStyleSheet';

export const MainScreen = () => {
  const buttonColor = useSelector(
    (state: RootState) => state.color.buttonColor,
  );
  const dispatch = useDispatch();

  const handleButtonPress = () => {
    let newColor = '';
    switch (buttonColor) {
      case '#D199E7':
        newColor = '#72C1ED';
        break;
      case '#72C1ED':
        newColor = '#A196F1';
        break;
      case '#A196F1':
        newColor = '#7D72ED';
        break;
      case '#7D72ED':
        newColor = '#D199E7';
        break;
      default:
        newColor = '#D199E7';
    }
    dispatch(changeColor(newColor));
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
