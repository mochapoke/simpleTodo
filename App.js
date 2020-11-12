import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import { StyledSheet, Platform } from 'react-native'
import styled from 'styled-components/native';
import _ from 'lodash';

const Container = styled.SafeAreaView`
  flex:1;
`;
const KeyboardAvoidView = styled.KeyboardAvoidingView`
  flex: 1;
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
`; 
const Button = styled.Button`
`;


export default function App(){
  const [list, setList] = React.useState([
    { id: '1', todo: ' 할  일1 '},
    { id: '2', todo: ' 할  일2 '},
  ]); // useState안에는 기본값
  const [inputTodo, setInputTodo] = React.useState('');

  return(
    // 크게 2가지 리턴 가능
    // components, 컴포넌트로 이루어진 배열
    <Container> 
      <KeyboardAvoidView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>      
      <Contents>
        {list.map(item=>{
          return(          
        <TodoItem key={item.id}> 
          <TodoItemText> 
            {item.todo}
          </TodoItemText>
          <TodoItemButton 
            title='삭제' 
            onPress={ () => {
              setList(_.reject(list, elem => elem.id === item.id ));
            } } 
            />
        </TodoItem>
          )
          })}
     
      </Contents>
      <InputContainer>
        < Input value={inputTodo} 
          onChangeText={ value => setInputTodo(value)} />
        <Button 
          title='입력' 
          onPress={ ()=>{
            // 원본 배열을 수정하는 push는 리액트에서 사용 불가
            // inputTodo.push({...});
            if (inputTodo === ''){
              return; // 아무 동작 안하기
            }
            const newItem = {
              id: new Date().getTime().toString(), // 유니크한 id 값 필요
              todo: inputTodo,
            };
            setList( [
              ...list, // 기존 todo
              newItem, // 추가 todo
            ] );
            setInputTodo(''); // 비어지도록!
          } }
          color='#636e72'/>
      </InputContainer>
      
      </KeyboardAvoidView>
    </Container>
  );
}



