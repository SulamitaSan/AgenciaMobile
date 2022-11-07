import React, { useState, useEffect } from 'react';
import {
  View, KeyboardAvoidingView,
  Image, TextInput,
  TouchableOpacity, Text,
  StyleSheet, Animated,
  Keyboard
} from 'react-native';
import logo from '../../assets/logo.png'


export default function App() {

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View>
      <Image style={styles.logo} source={logo} />
      </View>
        <TextInput style={styles.input}
          placeholder='Email'
          autoCorrect={false}
          onChangeText={() => { }}
        />
       
        <TextInput style={styles.input}
          placeholder='Senha'
          autoCorrect={false}
          onChangeText={() => { }}
        />
<Text>{'\n'}</Text>
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>Criar conta gratuita</Text>
        </TouchableOpacity>
      
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo: {
    marginEnd: 10,
    justifyContent: 'center',
    padding:2
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50
  },

  input: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    width: '90%',
    height:'7%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7
  },

  btnSubmit: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  submitText: {
    color: '#FFF',
    fontSize: 18
  },

  btnRegister: {
    marginTop: 10,
  },
  registerText: {
    color: '#35AAFF'
  }

});