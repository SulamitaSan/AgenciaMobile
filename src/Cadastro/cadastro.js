import React, { useState } from 'react';
import {
  StyleSheet, TextInput, View, Text,
  ScrollView, StatusBar, Button
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text'


export default function Cadastro() {
  const [cell, setCell] = useState('');
  const [cpf, setCpf] = useState('');
  const [text, onChangeText] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{ fontSize: 40, marginTop: 40, }}>Cadastro</Text>

        <Text style={{ fontSize: 25, marginTop: 30, }}>Nome Completo:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />

        <Text style={{ fontSize: 25, marginTop: 30, }}>Endereço:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Text style={{ fontSize: 25, marginTop: 30, }}>Email:</Text>
        <TextInput style={styles.input}
          placeholder=''
          autoCorrect={false}
          onChangeText={() => { }}
        />
        <Text style={{ fontSize: 25, marginTop: 30, }}>Senha:</Text>
        <TextInput style={styles.input}
          placeholder=''
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <Text style={{ fontSize: 25, marginTop: 30, }}>Confirmar a senha:</Text>
        <TextInput style={styles.input}
          placeholder=''
          autoCorrect={false}
          onChangeText={() => { }}
        />
        <Text style={{ fontSize: 25, marginTop: 30, }}>Telefone:</Text>
        <TextInputMask
          style={styles.input}
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99)'
          }}
          value={cell}
          onChangeText={text => setCell(text)}
        />

        <Text style={{ fontSize: 25, marginTop: 30, }}>CPF:</Text>
        <TextInputMask
          style={styles.input}
          type={'cpf'}
          value={cpf}
          onChangeText={text => setCpf(text)}
        />
        <Text>{'\n'}</Text>
        <Button
          style={styles.button}
          title='Cadastrar'
          onPress={''}
          type={'button'}
          value={'button'}
        />
<Text>{'\n'}</Text><Text>{'\n'}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#DDD',
    borderRadius: 5,
    padding: 5,
  },
  button: {
    backgroundColor: '#35AAFF',
    width: 40,
    height: 35,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
