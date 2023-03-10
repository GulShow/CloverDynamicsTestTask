import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, Animated} from 'react-native';
import {SharedValue, useAnimatedStyle} from 'react-native-reanimated';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

interface Props {
  onPress: () => void;
}

const ButtonReanimated: React.FC<Props> = ({onPress}) => {
  const colors = useSelector((state: RootState) => state.color.colors);
  const [animation] = useState(new Animated.Value<number>(0));

  const onPressButton = () => {
    onPress();
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      animation.setValue(0);
    });
  };

  const interpolatedColor = animation.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: colors,
  });

  const animatedStyle = {
    backgroundColor: interpolatedColor,
  };

  return (
    <TouchableOpacity onPress={onPressButton}>
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
