import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput
} from 'react-native'
import RNPickerSelect from 'react-native-picker-select'

import Fondo from '../../assets/imagenes/fondo.jpg'

export default class PuntosVenta extends Component {
  constructor () {
    super()
    this.state = {
      juego: '',
      numero: '',
      valor: ''
    }
  }

  render () {
    const placeholder = {
      label: 'Seleccione el juego que desea:',
      value: null,
      fontSize: 18
    }
    return (
      <ImageBackground source={Fondo} style={styles.imageBack}>
        <View style={styles.MainContainer}>
          <RNPickerSelect
            style={{
              inputAndroid: {
                backgroundColor: 'transparent'
              },
              iconContainer: {
                top: 5,
                right: 15
              }
            }}
            placeholder={placeholder}
            onValueChange={value => (this.state.juego = value)}
            items={[
              {
                label: 'Costarricense',
                value: 'Costarricense',
                backgroundColor: '#ecf0f1'
              },
              { label: 'Panameña', value: 'Panameña' },
              { label: 'Dominicana', value: 'Dominicana' }
            ]}
          />
          <Text style={styles.paragraph}> 22/11/2019 -> 19:00 </Text>
          <TextInput
            style={styles.paragraph}
            placeholder='Número'
            onChangeText={numero => this.setState({ numero })}
            value={this.state.numero}
            keyboardType={'numeric'}
          />
          <TextInput
            style={styles.paragraph}
            placeholder='Valor (₡)'
            onChangeText={valor => this.setState({ valor })}
            value={this.state.valor}
            keyboardType={'numeric'}
          />

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Image
              style={styles.button}
              source={require('../../assets/deal.png')}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1
  },
  paragraph: {
    fontSize: 18,
    margin: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    backgroundColor: '#ecf0f1',
    borderRadius: 10
  },
  imageBack: {
    width: '100%',
    height: '100%'
  },
  button: {
    marginHorizontal: 175,
    marginVertical: 50,
    borderRadius: 4,
    height: 52,
    width: 52,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
