/**
 * @version 1.0
 * @date 21-11-2019
 */
import React from 'react'
import { 
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native'

import * as firebase from 'firebase'

/**
 * @class Clase para generar la ventana de loading que redirecciona entre los stacks de ventanas
 * Esta clase fue tomada del taller de Firebase: https://github.com/KJeanpol/LoginReactFirebase
 */
export default class LoadingScreen extends React.Component {
  //Método para montar externos
  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'App' : 'Auth')
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
        <ActivityIndicator size='large' />
      </View>
    )
  }
}
/**
 * Estilos para darle formato a la ventana
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
