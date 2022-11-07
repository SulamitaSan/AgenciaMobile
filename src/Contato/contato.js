import { Text, View, StyleSheet, Button, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { TextInput } from 'react-native-paper'
import whats from '../../assets/whats.png'
import face from '../../assets/face.png'
import insta from '../../assets/insta.png'
import { Ionicons } from 'react-native-vector-icons'



function Contato() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={{ fontSize: 35, marginTop: 50, }}>Contato</Text>

          <Text style={{ fontSize: 20, marginTop: 30, }}>Email:</Text>
          <TextInput style={styles.input}
            placeholder='Insira o seu email'
            autoCorrect={false}
            onChangeText={() => { }}
          />
          <Text style={{ fontSize: 20, marginTop: 30, }}>Descrição:</Text>
          <TextInput style={styles.input}
            placeholder='Qual a sua duvida?'
            autoCorrect={false}
            onChangeText={() => { }}
          />

          <Text>{'\n'}</Text>
          <Button
            style={styles.button}
            title='Cadastrar'
            onPress={''}
            type={'button'}
            value={'button'}
          />

          <TouchableOpacity>
            
          <Image source={whats} />
          </TouchableOpacity>
          <Text>{'\n'}</Text>
          <TouchableOpacity>
            <Image source={face} />
          </TouchableOpacity>
          <Text>{'\n'}</Text>
          <TouchableOpacity>
            <Image source={insta}/>
          </TouchableOpacity>
          <Text>{'\n'}</Text>

          <Text style={styles.info}>
            Rua: Av.Paulista n°0000 {'\n'}
            Cep:00000-000{'\n'}
            Telefone:(00)12345-6789
          </Text>
          <Text>{'\n'}</Text>
          <Text>{'\n'}</Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#DDD',
    borderRadius: 10,
    padding: 5,
  },
    container: {
    flex: 1,
    alignSelf: 'auto',
    marginLeft:20,
    justifyContent: 'center'
  },
  info: {
    alignSelf: 'flex-start',
    fontStyle: 'italic',
  },
  button:{
    backgroundColor: '#35AAFF',
    width: '70%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 7
  }
});

export default Contato
