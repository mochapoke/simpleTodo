import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex:1;
`;
const Contents = styled.ScrollView`
  flex:1;
  padding: 8px 25px;
`;
const TodoItem = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TodoItemText = styled.Text`
  font-size: 20px;

  flex:1;
`;
const TodoItemButton = styled.Button``;
const InputContainer = styled.View`
  flex-direction: row;
  padding: 8px 20px;
`;
const Input = styled.TextInput`
  border: 1px solid #e5e5e5;
  flex: 1
`; // 최대크기 
const Button = styled.Button`
`;


export default function App(){

  return(
    <Container> 
      <Contents>
        <TodoItem> 
          <TodoItemText> 
            할일 목록 표시
          </TodoItemText>
          <TodoItemButton title='삭제' onPress={ () => {} } />
        </TodoItem>
      </Contents>
      <InputContainer>
        <Input></Input>
        <Button title='전송' onPress={ ()=>{} } />
      </InputContainer>
    </Container>
  );
}
