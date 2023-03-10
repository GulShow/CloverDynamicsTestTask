import React, {useRef} from 'react';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {Animated, Text} from 'react-native';

type Props = {
  onPress: () => void;
};

const Button = styled.TouchableOpacity<Props>`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-vertical: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({backgroundColor}) => `background-color: ${backgroundColor};`}
`;

const AnimatedButton = Animated.createAnimatedComponent(Button);

const ButtonStyledComponent: React.FC<Props> = ({onPress}) => {
  const backgroundColor = useRef(new Animated.Value(0)).current;
  const colors = useSelector((state: RootState) => state.color.colors);

  const animateBackgroundColor = () => {
    Animated.timing(backgroundColor, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      backgroundColor.setValue(0);
    });
  };

  const handlePress = () => {
    onPress();
    animateBackgroundColor();
  };

  const backgroundColorInterpolation = backgroundColor.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: colors,
  });

  return (
    <AnimatedButton
      onPress={handlePress}
      style={{backgroundColor: backgroundColorInterpolation}}>
      <Text>Button</Text>
    </AnimatedButton>
  );
};

export default ButtonStyledComponent;
