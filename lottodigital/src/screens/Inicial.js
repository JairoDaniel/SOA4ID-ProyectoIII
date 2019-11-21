/**
 * @author Jairo Ortega Calderón
 * @version 1.0
 * @date 21-11-2019
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground
} from 'react-native'
import FadingSlides from 'react-native-fading-slides'

import Fondo from '../../assets/imagenes/fondo.jpg'


/**
 * Constantes para crear los diferentes slides del Fading Slides
 */
const slides = [
  {
    image: require('../../assets/pp1.jpeg'),
    imageWidth: 400,
    imageHeight: 400
  },
  {
    image: require('../../assets/pp2.jpeg'),
    imageWidth: 400,
    imageHeight: 400
  },
  {
    image: require('../../assets/pp3.jpeg'),
    imageWidth: 400,
    imageHeight: 400
  },
  {
    image: require('../../assets/pp4.jpeg'),
    imageWidth: 400,
    imageHeight: 400
  }
]

/**
 * @class Clase para generar la ventana inicial de la aplicación
 */

export default class Inicial extends Component {
  /*signOutUser = () => {
    firebase.auth().signOut()
  }*/

  render () {
    /**
      * ImageBackground:Imagen de fondo en la ventana
      * Fading Slides: Crea un elemento como presentación de power point, similar a un carrusel
      * TouchableOpacity: Botón
      */
    return (
      <ImageBackground source={Fondo} style={styles.imageBack}>
        <View paddingTop={320}>
          <FadingSlides
            slides={slides}
            fadeDuration={1000}
            stillDuration={3000}
            height={400}
            FadingSlides={1000}
            startAnimation
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Registrar') }
          >
            <Text style={{ color: 'gray', fontWeight: '500' }}> Ingresar </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}
//
/**
 * Estilos para darle formato a la ventana
 */
const styles = StyleSheet.create({
  imageBack: {
    width: '100%',
    height: '100%'
  },
  button: {
    marginHorizontal: 130,
    marginVertical: 240,
    backgroundColor: '#9FE802',
    borderRadius: 4,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
