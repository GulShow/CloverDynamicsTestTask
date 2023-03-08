import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

interface Props {
  onPress: () => void;
}

const ButtonStyleSheet: React.FC<Props> = ({onPress}) => {
  const color = useSelector((state: RootState) => state.color.buttonColor);

  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      onPress={onPress}>
      <Text>Button</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ButtonStyleSheet;
