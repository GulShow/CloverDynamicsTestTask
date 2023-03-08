import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

interface Props {
  onPress: () => void;
}

const ButtonReanimated: React.FC<Props> = ({onPress}) => {
  const color = useSelector((state: RootState) => state.color.buttonColor);

  const progress = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: color,
      transform: [{scale: progress.value}],
    };
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View style={[styles.button, animatedStyle]}>
        <Text>Button</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ButtonReanimated;
