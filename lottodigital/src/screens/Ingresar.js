/**
 * @author Jairo Ortega Calderón
 * @version 1.0
 * @date 21-11-2019
 */
import React from 'react'
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from 'react-native'

import * as firebase from 'firebase'

import Fondo from '../../assets/imagenes/fondo.jpg'

/**
 * @class Clase para generar la ventana de inicio de sesión
 * Esta clase está basada en el taller de Firebase: https://github.com/KJeanpol/LoginReactFirebase
 */
export default class Ingresar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cedula: '',
      contrasena: '',
      errorMessage: null
    }
  }
  /**
   * Método iniciar sesión del usuario en Firebase 
   */
  handleLogin = () => {
    const { cedula, contrasena } = this.state

    firebase
      .auth()
      .signInWithEmailAndPassword(cedula + '@gmail.com', contrasena)
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render () {
    /**
    * ImageBackground:Imagen de fondo en la ventana
    * FlatList: Crea un elemento "Lista" vertical para insertar las transacciones realizadas
    * TouchableOpacity: Botón
    */
    return (
      <ImageBackground source={Fondo} style={styles.imageBack}>
        <View style={styles.container}>
          <Text style={styles.title}>¡Bienvenido de nuevo, Suerte!</Text>

          <Text style={styles.paragraph}>Ingrese su número de cédula</Text>
          <TextInput
            style={styles.password}
            placeholder='Cédula'
            onChangeText={cedula => this.setState({ cedula })}
            value={this.state.cedula}
            keyboardType={'numeric'}
          />
          <Text style={styles.paragraph}>Ingrese su contraseña</Text>
          <TextInput
            style={styles.password}
            placeholder='Contraseña'
            onChangeText={contrasena => this.setState({ contrasena })}
            value={this.state.contrasena}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleLogin()}
          >
            <Text style={{ color: 'gray', fontWeight: '500' }}>
              Ingresar al sistema
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignSelf: 'center', marginTop: 32 }}
            onPress={() => this.props.navigation.navigate('Registrar')}
          >
            <Text style={{ color: 'white', fontSize: 13 }}>
              ¿Aún no tienes cuenta?
              <Text style={{ fontWeight: '500', color: '#5FFF0F' }}>
                Registrate
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }
}
/**
 * Estilos para darle formato a la ventana
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
  title: {
    margin: 40,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#5FFF0F'
  },
  paragraph: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#5FFF0F'
  },
  password: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
    backgroundColor: '#ecf0f1'
  },
  imageBack: {
    width: '100%',
    height: '100%'
  },
  button: {
    marginHorizontal: 30,
    marginVertical: 50,
    backgroundColor: '#9FE802',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
