import React from "react";
import {
  View, Text, StyleSheet, Image, SafeAreaView,
  ScrollView, TextInput, TouchableOpacity, Button, useState
} from "react-native";
import logo from '../../assets/logo.png'
import ibiza from "../../assets/ibiza.jpg";
import praia2 from "../../assets/praia2.jpg";
import lhama from "../../assets/lhama.jpg";
import { Card } from "react-native-paper";



function Home() {

  // const [onPress, setOnPress] = useState(0);

  return (
    <>
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Image source={logo} />

            <TextInput style={styles.input}
              placeholder='Origem'
              autoCorrect={false}
              onChangeText={() => { }}
            />
            <TextInput style={styles.input}
              placeholder='Destino'
              autoCorrect={false}
              onChangeText={() => { }}
            />

            <TouchableOpacity style={styles.btnSubmit}>
              <Text style={styles.submitText}>Pesquisar</Text>
            </TouchableOpacity>
            <Text>{'\n'}</Text>

            <Card>
              <View style={styles.content}>
                <Image style={styles.logo} source={ibiza} />
                <Text sytle={styles.info}>Imagem ilustrativa</Text>
              </View>
            </Card>
            <Text>{'\n'}</Text>
            <Card>
              <View style={styles.content}>
                <Image style={styles.logo} source={praia2} />
                <Text sytle={styles.info}>Imagem ilustrativa</Text>
              </View>
            </Card>
            <Text>{'\n'}</Text>
            <Card>
              <View style={styles.content}>
                <Image style={styles.logo} source={lhama} />
                <Text sytle={styles.info}>Imagem ilustrativa</Text>
              </View>
            </Card>
            <Text>{'\n'}</Text>
            <Text>{'\n'}</Text>
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  )

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    resizeMode: 'contain',
  },
  text: {
    color: 'black',
    fontSize: 32,
    
  },
  logo: {
    flex: 1,
    margin: 20,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: 460,
    width: 300,
    resizeMode: 'stretch',
  },
  input: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    width: '98%',
    height: 50,
    marginBottom: 15,
    color: '#222',
    fontSize: 14,
    borderRadius: 7
  },
  btnSubmit: {
    backgroundColor: '#35AAFF',
    width: '70%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 7
  },
  submitText: {
    color: '#FFF',
    fontSize: 18
  },
  info: {
    alignSelf: 'center',
    fontStyle: 'italic',
    fontWeight: 'bolde',
  }
})

export default Home;