import React from 'react';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {Text} from 'react-native';

interface Props {
  onPress: () => void;
}

const ButtonStyledComponent: React.FC<Props> = ({onPress}) => {
  const color = useSelector((state: RootState) => state.color.buttonColor);

  return (
    <ButtonWrapper backgroundColor={color} onPress={onPress}>
      <Text>Button</Text>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.TouchableOpacity<{backgroundColor: string}>`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-vertical: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({backgroundColor}) => backgroundColor};
`;

export default ButtonStyledComponent;
