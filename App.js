// Olá professor!
// As imagens estão em meu gitHub. Segue link: 
// Fiquei com dúvida de como mostrar a mensagem, pois não especificava como,
// portanto mostrei no console e na tela, através de um useState.

import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, Button} from 'react-native';

export default function App() {

const [message, setMessage] = useState('')

  return (
    <View style={styles.container}>
      <StatusBar
        style="auto"
        />
        <Image
          style={styles.imagem}
          source={require('./src/images/avatar.jpg')} />
        <Text
          style={styles.nome}>Leonardo Copello</Text>
        <View style={styles.containerTel}>
          <Image
            style={styles.zap}
            source={require('./src/images/zap.png')}
          />
          <Text>(71) 99167-3188</Text>
        </View>
        <Button
          color='#841584'
          title="Message"
          onPress={() => {
            console.log('Isto é uma mensagem')
            setMessage('Isto é uma mensagem')
          }}
          
        />
        <View>
          <Text style={{color: 'black', fontSize: 30}}>{message}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7E7E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    lineHeight: 32,
  },
  containerTel: {
    flexDirection: 'row',

  },
  zap: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  btn: {
    backgroundColor: ''
  }
});
