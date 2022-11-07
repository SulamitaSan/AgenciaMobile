import React from "react";
import {
  View, Text, StyleSheet, Image, SafeAreaView,
  ScrollView, TouchableOpacity
} from "react-native";
import cancun from "../../assets/cancun.jpg";
import rio from "../../assets/rio.jpg";
import grecia from '../../assets/grecia.jpg'
import london from '../../assets/london.jpg'
import { Card } from "react-native-paper";

function Destino() {

  return (
    <>
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Text style={styles.text}> Destinos</Text>

            <Text>{'\n'}</Text>

            <Card>
              <View style={styles.content}>
                <Image style={styles.logo} source={cancun} />
                <Text style={styles.texto}>Cancun</Text>
                <TouchableOpacity style={styles.btnSubmit}>
                  <Text style={styles.submitText}>Visitar</Text>
                </TouchableOpacity>
                <Text>{'\n'}</Text>
              </View>
            </Card>
            <Text>{'\n'}</Text>
            <Card>
              <View style={styles.content}>
                <Image style={styles.logo} source={rio} />
                <Text style={styles.texto}>Rio de Janeiro</Text>
                <TouchableOpacity style={styles.btnSubmit}>
                  <Text style={styles.submitText}>Visitar</Text>
                </TouchableOpacity>
                <Text>{'\n'}</Text>
              </View>
            </Card>
            <Text>{'\n'}</Text>
            <Card>
              <View style={styles.content}>
                <Image style={styles.logo} source={grecia} />
                <Text style={styles.texto}>Grécia</Text>
                <TouchableOpacity style={styles.btnSubmit}>
                  <Text style={styles.submitText}>Visitar</Text>
                </TouchableOpacity>
                <Text>{'\n'}</Text>
              </View>
            </Card>
            <Text>{'\n'}</Text>
            <Card>
              <View style={styles.content}>
                <Image style={styles.logo} source={london} />
                <Text style={styles.texto}>
                  Londres
                </Text>
                <TouchableOpacity style={styles.btnSubmit}>
                  <Text style={styles.submitText}>Visitar</Text>
                </TouchableOpacity>
                <Text>{'\n'}</Text>
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
    fontSize: 40,
  },
  texto: {
    fontSize: 25,
    alignSelf: 'center',
    fontWeight:'bolde',
  },
  logo: {
    flex: 1,
    margin: 20,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
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
    width: '30%',
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
})

export default Destino;