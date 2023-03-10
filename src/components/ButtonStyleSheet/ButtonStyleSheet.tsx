import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, Animated} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

interface Props {
  onPress: () => void;
}

const ButtonStyleSheet: React.FC<Props> = ({onPress}) => {
  const colors = useSelector((state: RootState) => state.color.colors);
  const [animation] = useState(new Animated.Value(0));

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
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ButtonStyleSheet;
